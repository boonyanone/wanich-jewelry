# Master Agent Directives & Engineering Protocol (AGENTS.md)

This configuration file defines the persistent operating standards, cognitive workflows, architecture principles, and token-efficiency rules for this codebase.

---

## 1. Deep Analysis & "Grill Me" Protocol (ถามก่อนทำ ไม่เดาเอง)
- **Clarification First**: When given complex, ambiguous, or architecturally significant requirements, **do NOT write code immediately**.
- **Edge Case & Data Analysis**: Analyze data flow, edge cases, business constraints, and downstream impacts.
- **Grill Me Inquiry**: Present 2–4 concise, critical clarifying questions or design choices to the user first to confirm assumptions before implementing.

---

## 2. Token Conservation & High-Signal Communication (ประหยัด Token สูงสุด)
- **Action Over Chitchat**: Avoid long preambles, marketing hype, repetitive conversational filler, or self-praise.
- **Surgical Code Edits**: Edit only the necessary lines/functions. Avoid rewriting entire massive files when modifying single functions.
- **Compact Scannable Summaries**: End each turn with a high-density, bulleted summary focusing on functional outcomes and visual/architectural decisions without listing redundant file paths unless asked.

---

## 3. Architecture Simplicity & Strict File Length Boundaries (กำหนดขนาดไฟล์ชัดเจน ไม่เกิน 120-150 บรรทัด)
- **Strict Line Limits per File (< 120-150 lines)**:
  - ห้ามเขียนไฟล์ Component หรือ Page ที่มีความยาวเกิน **120-150 บรรทัด** เด็ดขาด
  - หากหน้าจอหรือโมดูลใดมีความซับซ้อน **ต้องแตกเป็น Sub-components ย่อยทันที** ในโฟลเดอร์เฉพาะ (เช่น `components/admin/`, `components/bespoke/`, `components/silver/`)
  - หน้า Page หลักใน `app/` จะต้องทำหน้าที่เป็นเพียง Orchestrator รวบรวม Sub-components เท่านั้น (ความยาวเฉลี่ย 40-80 บรรทัด)
- **Single Source of Truth**: แยก Data models, types, และ business constants ในไฟล์เฉพาะ (`types.ts`, `data/`, `services/`)
- **Separation of Concerns**:
  - `components/` -> Pure UI & Isolated Sub-components (< 120 lines)
  - `views/` หรือ `app/` -> Clean Orchestrators & Layouts (< 80 lines)
  - `services/` / `utils/` -> Business Logic, Calculations & API Handlers
  - `data/` -> Master constants, presets, and seed definitions
- **KISS & Anti-Overengineering**: ไม่สร้างโค้ดที่ซับซ้อนเกินความจำเป็น โค้ดทุกไฟล์ต้องสั้น กระชับ อ่านเข้าใจและแก้ไขได้ทันที

---

## 4. Universal Tech Stack Adaptability (ปรับตาม Stack ของโปรเจกต์)
- Respect and align with the existing project dependencies and frameworks (`package.json`, TypeScript, React, Tailwind CSS, Vite, etc.).
- Enforce strict type-safety with TypeScript (`no implicit any`, explicit interfaces).
- No simulated/fake infrastructure: Always use robust, production-grade logic and real-world data pipelines.

---

## 5. UI/UX Craftsmanship (Anti-Slop Standard)
- Professional, enterprise-grade typography and spacing ratios.
- Strict color contrast (WCAG AA compliant).
- Responsive by default (Mobile touch targets >= 44px, Desktop fluidity with `max-w-*` constraints).
- Explicit HTML `id` attributes on key interactive elements.

---

## 6. AI-Native Advanced Engineering Patterns (3 เสริมแกร่งมาตรฐานสากล)
- **Deterministic Data Contracts First (Type ก่อน UI เสมอ)**:
  - นิยาม Data Schema, TypeScript Interfaces, และ Error States ใน `types.ts` หรือ Schema Layer ให้สมบูรณ์และชัดเจนก่อนเริ่มเขียน UI Component เพื่อป้องกันปัญหา Property Mismatch
- **Feature Flags & State Management Strategy**:
  - ออกแบบ State กลางและ Role-Based Access Control (RBAC) ให้มี Feature Flags ป้องกันการเข้าถึงข้อมูลลับ (เช่น การซ่อนต้นทุน/กำไรขั้นต้นจากพนักงานขาย) อย่างรัดกุมระดับ State Layer
- **Living Architecture & Changelog Alignment**:
  - ทุกครั้งที่มีการเพิ่มหรือปรับปรุงโมดูลสำคัญ ให้คงความสอดคล้องของ Data Flow และสรุปการเปลี่ยนแปลงในรูปแบบ Bullet Point ที่ตรวจสอบย้อนหลังได้ทันที

---

## 7. Self-Verification & Quality Loop
- Every code modification must automatically pass:
  1. TypeScript type checking
  2. Production compilation build
- In case of build or lint errors, diagnose the root cause and self-correct systematically.

---

## 8. Headless FlowBuilder Architecture (มาตรฐานโปรเจคใหม่ระดับสากล)
- **Unified Skill Standard**: สำหรับการพัฒนาโปรเจกต์ใหม่ทุกโปรเจกต์ Agent **ต้องอ่านและยึดถือมาตรฐานใน `AI_STUDIO_FLOWBUILDER_SKILL.md` เป็นหลักเสมอ**
- **Decoupled Backend**: Next.js (Frontend) ทำงานแบบ Headless ดึงข้อมูลและจัดการสถานะผ่าน API จาก **FlowBuilder** (ระบบหลังบ้านกลาง) เท่านั้น
- **Replace Local JSON with Service Layer**: ห้ามใช้การอ่าน/เขียนไฟล์ JSON ตรงๆ (`fs.readFileSync` / `writeFileSync`) สำหรับ Data หลักของ Business Logic ให้สร้าง `src/services/api.ts` โดยใช้ **Fallback & Mock Adapter Pattern** เพื่อให้หน้าเว็บพรีวิวใน AI Studio ทำงานได้ลื่นไหล ไม่พังแม้ยังไม่มี API Key
- **On-Demand Revalidation & ISR**: กำหนดค่าการแคชด้วย Next.js ISR (`next: { revalidate: 60 }`) และรองรับ Webhook ใน `src/app/api/revalidate/route.ts` เพื่ออัปเดตข้อมูลจาก FlowBuilder ได้ทันที
- **Standard Environment Variables**: ทุกโปรเจกต์ต้องประกาศตัวแปรกลางใน `.env.example` ให้ตรงกัน (`FLOWBUILDER_BASE_URL`, `FLOWBUILDER_API_KEY`, `FLOWBUILDER_PROJECT_ID`)
- **Theme-able UI**: การตั้งค่าสีและ Design Tokens ต้องผูกกับ CSS Variables ใน `globals.css` เพื่อให้รองรับการเปลี่ยนธีมสำหรับลูกค้าหลายโปรเจคได้อย่างรวดเร็วโดยไม่ต้องแก้โค้ด Component
