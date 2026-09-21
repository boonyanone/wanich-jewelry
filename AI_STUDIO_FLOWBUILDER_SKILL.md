# FlowBuilder Headless Next.js Project Skill (AI Studio & Antigravity Standard)

## 1. Overview & Architectural Vision
This skill defines the unified standard operating procedure for developing new frontend web applications across AI Studio and Antigravity. The frontend functions strictly as a **Headless Presentation Layer** powered by Next.js 15+ (App Router), React 19, and Tailwind CSS v4, fetching content and dynamic business data directly from **FlowBuilder** (Centralized Headless CMS & Workflow Backend).

---

## 2. Core Tech Stack & Standards
- **Frontend Framework**: Next.js 15+ (App Router)
- **Runtime & Styling**: React 19 + Tailwind CSS v4
- **Type Safety**: Strict TypeScript (`no implicit any`, explicit interfaces in `src/types/`)
- **Backend & Data Source**: FlowBuilder Headless API (REST / GraphQL)
- **Component File Limits**:
  - Pages (`src/app/**/page.tsx`): **< 80 lines** (Orchestrators only)
  - UI Components (`src/components/**`): **< 120-150 lines** (Single-responsibility subcomponents)

---

## 3. Standard Environment Variables
Every project adhering to the FlowBuilder standard must declare these keys in `.env.example`:

```env
# FlowBuilder Headless Backend Configuration
FLOWBUILDER_BASE_URL=https://api.flowbuilder.io/v1
FLOWBUILDER_API_KEY=
FLOWBUILDER_PROJECT_ID=
FLOWBUILDER_REVALIDATE_SECRET=
```

---

## 4. Service Layer: Fallback & Mock Adapter Pattern (`src/services/api.ts`)
To ensure the AI Studio and preview containers **never crash or show blank screens** when API keys are not yet configured or during backend downtime, all FlowBuilder calls must use the **Graceful Fallback & Mock Adapter**:

```typescript
// src/services/api.ts
import { headers } from "next/headers";

const BASE_URL = process.env.FLOWBUILDER_BASE_URL || "";
const API_KEY = process.env.FLOWBUILDER_API_KEY || "";
const PROJECT_ID = process.env.FLOWBUILDER_PROJECT_ID || "";

export interface FetchOptions {
  endpoint: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
  revalidate?: number | false;
  tags?: string[];
  fallbackData?: any;
}

export async function fetchFlowBuilder<T>({
  endpoint,
  method = "GET",
  body,
  revalidate = 60, // Default 60 seconds ISR
  tags,
  fallbackData,
}: FetchOptions): Promise<T> {
  // 1. Fallback if credentials are missing
  if (!BASE_URL || !API_KEY) {
    if (fallbackData !== undefined) {
      console.warn(`[FlowBuilder API] Missing credentials for ${endpoint}, using fallback data.`);
      return fallbackData as T;
    }
  }

  try {
    const res = await fetch(`${BASE_URL}/${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
        "X-Project-Id": PROJECT_ID,
      },
      body: body ? JSON.stringify(body) : undefined,
      next: {
        revalidate: typeof revalidate === "number" ? revalidate : undefined,
        tags,
      },
    });

    if (!res.ok) {
      throw new Error(`FlowBuilder Error [${res.status}]: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error(`[FlowBuilder API Failure] Failed fetching ${endpoint}:`, error);
    if (fallbackData !== undefined) return fallbackData as T;
    throw error;
  }
}
```

---

## 5. Next.js Caching & On-Demand Revalidation (`src/app/api/revalidate/route.ts`)
FlowBuilder triggers a webhook to purge and refresh pages immediately when editors publish changes:

```typescript
// src/app/api/revalidate/route.ts
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (secret !== process.env.FLOWBUILDER_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  const { path, tag } = await req.json().catch(() => ({}));
  if (tag) revalidateTag(tag);
  if (path) revalidatePath(path);

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
```

---

## 6. Step-by-Step AI Implementation Protocol for New Projects
When an agent is requested to build a new project or page under this skill:

1. **Contract First (`src/types/`)**:
   - Define exact TypeScript data interfaces representing FlowBuilder collections before writing any UI.
2. **Setup Service Layer (`src/services/api.ts`)**:
   - Implement `fetchFlowBuilder` with mock fallback presets so UI is fully reviewable in the browser instantly.
3. **Build Sub-components (`src/components/`)**:
   - Write pure, isolated components under 120-150 lines.
   - Keep styling straightforward and independent of any specific brand design.
4. **Assemble Page Orchestrators (`src/app/**/page.tsx`)**:
   - Fetch data in the server component.
   - Pass typed props down to sub-components. Keep page file under 80 lines.
5. **Self-Verification**:
   - Run `lint_applet` and `compile_applet`.
   - Ensure zero build errors and verified mobile responsiveness.
