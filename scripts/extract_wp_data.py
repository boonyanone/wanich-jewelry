import os, sys, re, json, subprocess, shutil

workspace_dir = '/Volumes/Data/งาน web/wanichjewlry.com'
wp_dir = os.path.join(workspace_dir, 'backup wp')
sql_path = os.path.join(wp_dir, 'softsql.sql')
uploads_dir = os.path.join(wp_dir, 'wp-content/uploads')

out_data_dir = os.path.join(workspace_dir, 'src/data')
out_img_dir = os.path.join(workspace_dir, 'public/images/products')
out_banner_dir = os.path.join(workspace_dir, 'public/images/banners')

os.makedirs(out_data_dir, exist_ok=True)
os.makedirs(out_img_dir, exist_ok=True)
os.makedirs(out_banner_dir, exist_ok=True)

print("Reading softsql.sql...")
with open(sql_path, 'r', encoding='utf-8', errors='ignore') as f:
    sql = f.read()

# 1. Parse terms & taxonomy
terms = {}
for m in re.finditer(r"\((\d+),\s*'([^']*)',\s*'([^']*)',\s*(\d+)\)", sql):
    tid, name, slug, group = m.groups()
    terms[tid] = {'id': tid, 'name': name, 'slug': slug}

# Parse term_taxonomy
cat_map = {} # term_id -> category info
tt_to_term = {} # tt_id -> term_id
for m in re.finditer(r"\((\d+),\s*(\d+),\s*'product_cat',\s*'([^']*)',\s*(\d+),\s*(\d+)\)", sql):
    tt_id, term_id, desc, parent, count = m.groups()
    tt_to_term[tt_id] = term_id
    if term_id in terms:
        cat_map[term_id] = {
            'id': term_id,
            'name': terms[term_id]['name'],
            'slug': terms[term_id]['slug'],
            'parent': parent,
            'count': int(count)
        }

print(f"Product Categories parsed: {len(cat_map)}")

# 2. Parse term relationships: object_id (post_id) -> term_taxonomy_id
post_categories = {}
for m in re.finditer(r"\((\d+),\s*(\d+),\s*(\d+)\)", sql):
    pid, tt_id, order = m.groups()
    term_id = tt_to_term.get(tt_id)
    if term_id and term_id in cat_map:
        if pid not in post_categories:
            post_categories[pid] = []
        post_categories[pid].append(cat_map[term_id]['name'])

# 3. Parse Master Attachments (_wp_attached_file)
attached_files = {}
for m in re.finditer(r"\((\d+),\s*(\d+),\s*'_wp_attached_file',\s*'([^']*)'\)", sql):
    mid, pid, filepath = m.groups()
    attached_files[pid] = filepath

print(f"Master Attachments indexed: {len(attached_files)}")

# 4. Parse Postmeta for products
product_meta = {}
for m in re.finditer(r"\((\d+),\s*(\d+),\s*'([^']*)',\s*'(.*?)'\)", sql):
    mid, pid, key, val = m.groups()
    if key in ['_price', '_regular_price', '_sale_price', '_thumbnail_id', '_sku', '_stock_status', '_product_image_gallery']:
        if pid not in product_meta:
            product_meta[pid] = {}
        if key == '_product_image_gallery':
            product_meta[pid][key] = [x.strip() for x in val.split(',') if x.strip()]
        else:
            product_meta[pid][key] = val

# 5. Extract published products
published_products = []
for m in re.finditer(r"\((\d+),\s*(\d+),\s*'([^']*)',\s*'([^']*)',\s*'(.*?)',\s*'(.*?)',\s*'(.*?)',\s*'publish',\s*'([^']*)',\s*'([^']*)',\s*'([^']*)',\s*'([^']*)',\s*'([^']*)',\s*'([^']*)',\s*'([^']*)',\s*'([^']*)',\s*'(.*?)',\s*(\d+),\s*'([^']*)',\s*(\d+),\s*'product',", sql):
    pid = m.group(1)
    content = m.group(5)
    title = m.group(6)
    excerpt = m.group(7)
    slug = m.group(12)
    
    meta = product_meta.get(pid, {})
    thumb_id = meta.get('_thumbnail_id')
    thumb_rel = attached_files.get(thumb_id) if thumb_id else None
    
    gallery_ids = meta.get('_product_image_gallery', [])
    gallery_rels = [attached_files[gid] for gid in gallery_ids if gid in attached_files]
    
    price_val = meta.get('_price') or meta.get('_regular_price') or ''
    try:
        price_num = float(price_val) if price_val else 0
    except:
        price_num = 0
        
    cats = post_categories.get(pid, ['เครื่องเงินแท้ 925'])
    primary_cat = cats[0] if cats else 'เครื่องเงินแท้ 925'
    
    # Normalize category name
    cat_th = 'เครื่องเงินแท้ 925'
    cat_en = 'Silver 925'
    if any(k in title.lower() or k in primary_cat.lower() for k in ['bangle', 'กำไล']):
        cat_th = 'กำไลเงินแท้ 925'
        cat_en = 'Bangles'
    elif any(k in title.lower() or k in primary_cat.lower() for k in ['br', 'bracelet', 'สร้อยข้อมือ']):
        cat_th = 'สร้อยข้อมือเงินแท้ 925'
        cat_en = 'Bracelets'
    elif any(k in title.lower() or k in primary_cat.lower() for k in ['bt', 'belt', 'เข็มขัด']):
        cat_th = 'เข็มขัดเงินแท้โบราณ'
        cat_en = 'Belts'
    elif any(k in title.lower() or k in primary_cat.lower() for k in ['r0', 'ring', 'แหวน']):
        cat_th = 'แหวนเงินแท้ & พลอย'
        cat_en = 'Rings'
    elif any(k in title.lower() or k in primary_cat.lower() for k in ['er', 'earring', 'ต่างหู']):
        cat_th = 'ต่างหูเงินแท้ 925'
        cat_en = 'Earrings'
    elif any(k in title.lower() or k in primary_cat.lower() for k in ['neck', 'สร้อยคอ']):
        cat_th = 'สร้อยคอเงินแท้'
        cat_en = 'Necklaces'
    elif any(k in title.lower() or k in primary_cat.lower() for k in ['onyx', 'โอนิกซ์']):
        cat_th = 'กำไลหินโอนิกซ์ฝังทับทิม'
        cat_en = 'Onyx Gemstone'

    # Clean description
    clean_desc = re.sub(r'\[.*?\]|<.*?>', ' ', content).strip()
    clean_desc = re.sub(r'\s+', ' ', clean_desc)
    if not clean_desc:
        clean_desc = f"{title} เครื่องเงินแท้ 925 มาตรฐานงานช่างหัตถกรรมเมืองน่าน ลวดลายประณีต ทรงคุณค่า สวมใส่ได้ทุกโอกาส"

    published_products.append({
        'id': pid,
        'sku': meta.get('_sku') or f"WNJ-{pid}",
        'title': title,
        'slug': slug,
        'category': cat_th,
        'categoryEn': cat_en,
        'price': price_num,
        'priceFormatted': f"฿{price_num:,.0f}" if price_num > 0 else "ติดต่อสอบถามราคา",
        'description': clean_desc,
        'shortExcerpt': excerpt or clean_desc[:120],
        'primaryImageRel': thumb_rel,
        'galleryImageRels': gallery_rels,
        'isFeatured': True if len(published_products) < 12 else False,
        'purity': 'เงินแท้ 92.5% (Sterling Silver 925)' if 'เข็มขัด' not in cat_th else 'เงินแท้ 95% (Nan Heritage Silver)',
        'craftsmanship': 'หัตถศิลป์ช่างเงินเมืองน่าน 20 ปี'
    })

print(f"Total Published Products: {len(published_products)}")

# 6. Copy & Optimize active product images using macOS sips
processed_images = {}
for prod in published_products:
    img_list = []
    all_rels = ([prod['primaryImageRel']] if prod['primaryImageRel'] else []) + prod['galleryImageRels']
    for idx, rel in enumerate(all_rels):
        if not rel:
            continue
        src_file = os.path.join(uploads_dir, rel)
        if os.path.exists(src_file):
            dest_filename = f"prod-{prod['id']}-{idx+1}.jpg"
            dest_path = os.path.join(out_img_dir, dest_filename)
            web_url = f"/images/products/{dest_filename}"
            
            if not os.path.exists(dest_path):
                # Copy and resize with sips to max 1200px width/height while keeping high quality
                cmd = ['sips', '-Z', '1200', src_file, '--out', dest_path]
                subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            
            img_list.append(web_url)
            
    if img_list:
        prod['image'] = img_list[0]
        prod['images'] = img_list
    else:
        # Fallback to sample jewelry asset or placeholder
        prod['image'] = "/images/products/placeholder.jpg"
        prod['images'] = ["/images/products/placeholder.jpg"]

# Save products.json
with open(os.path.join(out_data_dir, 'products.json'), 'w', encoding='utf-8') as f:
    json.dump(published_products, f, ensure_ascii=False, indent=2)

print("Saved products.json successfully!")

# 7. Extract Brand Master info & Banners
brand_info = {
    "name": "Wanich Jewelry",
    "nameTh": "วานิชจิวเวลรี่",
    "company": "บริษัท ดีเอส วาณิช จำกัด (DS WANICH CO., LTD.)",
    "tagline": "เครื่องเงินแท้ 925 และหัตถศิลป์เครื่องเงินน่านชั้นสูง",
    "taglineEn": "Timeless Elegance, Masterfully Handcrafted Sterling Silver 925",
    "experienceYears": 20,
    "phoneNumbers": ["088-260-4198", "086-364-4281", "081-697-7076"],
    "lineId": "@wanich",
    "lineUrl": "https://line.me/R/ti/p/@wanich",
    "email": "wanichjewelry@gmail.com",
    "facebook": "https://web.facebook.com/DSWanich",
    "facebookName": "DSWanich / Wanich Jewelry",
    "factoryAddress": "239 หมู่ 1 บ้านนาป่าน ต.สถาน อ.ปัว จ.น่าน 55120",
    "retailBranches": [
        {
            "name": "โชว์รูมและโรงงานใหญ่ อ.ปัว จ.น่าน",
            "address": "239 หมู่ที่ 1 บ้านนาป่าน ต.สถาน อ.ปัว จ.น่าน 55120",
            "hours": "เปิดทุกวัน 08:30 - 17:30 น.",
            "tel": "088-260-4198",
            "lat": 19.1741667,
            "lng": 100.914478
        },
        {
            "name": "เคาน์เตอร์ เซ็นทรัล ชิดลม (Central Chidlom)",
            "address": "ชั้น 7 แผนกสินค้าหัตถกรรมไทย เซ็นทรัล ชิดลม กรุงเทพฯ",
            "hours": "เปิดทุกวัน 10:00 - 21:00 น.",
            "tel": "086-364-4281"
        },
        {
            "name": "เคาน์เตอร์ เซ็นทรัล ภูเก็ต (Central Phuket)",
            "address": "เซ็นทรัล ภูเก็ต ฟลอเรสต้า แผนกเครื่องประดับและหัตถศิลป์",
            "hours": "เปิดทุกวัน 10:30 - 21:30 น.",
            "tel": "088-260-4198"
        }
    ],
    "silverPriceDefault": {
        "buyPricePerKg": 32500,
        "sellPricePerKg": 34800,
        "pureSilverPct": 99.9,
        "standardSilverPct": 92.5,
        "updatedAt": "อัปเดตล่าสุดวันนี้"
    }
}

with open(os.path.join(out_data_dir, 'brand.json'), 'w', encoding='utf-8') as f:
    json.dump(brand_info, f, ensure_ascii=False, indent=2)

# Copy logo and banner images
logo_src = os.path.join(wp_dir, 'logo.png')
if os.path.exists(logo_src):
    shutil.copy2(logo_src, os.path.join(workspace_dir, 'public/images/logo.png'))

print("All data & media extracted successfully!")
