# FlowBuilder Headless Next.js Project Skill (AI Studio)

## Overview
This skill defines the standard operating procedures for developing new frontend web projects based on the `pratharn` / `wanich-jewelry` architectural standard. The core architecture uses Next.js (App Router), React 19, Tailwind CSS v4, and connects to **FlowBuilder** as a Headless CMS Backend.

## Core Stack
- **Frontend Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS v4 (using CSS Variables in `globals.css` for easy theme switching)
- **Language**: TypeScript (Strict typing for all component props and API responses)
- **Backend/Data Source**: FlowBuilder (Headless CMS fetching via REST/GraphQL API)

## Architecture Guidelines (The "Wanich" Standard)

### 1. Separation of Concerns (Modular Components)
- **Pages as Orchestrators**: Page files (`app/**/page.tsx`) must be clean, containing LESS than 80 lines of code. They should only fetch data and compose sub-components.
- **Isolated UI Components**: Place all complex UI elements into `src/components/`. 
  - Keep component files under 150 lines. If larger, split into sub-components.
  - Component styling should rely on Tailwind classes and responsive utility classes.

### 2. State & Context Management
- Use React Context (e.g., `CartContext`) for global states like shopping carts or user sessions.
- Keep contexts lightweight and separate from UI logic.

### 3. Data Integration (FlowBuilder Headless Approach)
- Do NOT use local JSON files (`fs.writeFileSync`) for production data in new projects.
- **Service Layer**: Create API fetchers in `src/services/api.ts` to communicate with the FlowBuilder Backend.
- **Data Contracts**: Always define TypeScript interfaces (`src/types/*.ts`) mapping to the JSON structures provided by FlowBuilder before building the UI.

### 4. UI/UX Quality (Dark/Light Mode Ready)
- Ensure all components support CSS variables defined in `globals.css` to allow rapid rebranding (e.g., swapping from a dark luxury theme to a bright minimal theme).
- Maintain WCAG AA contrast and mobile-first responsiveness (touch targets >= 44px).

## Instructions for AI Agents
When initializing a new project or building new features using this skill:
1. **Analyze Requirements**: Understand what FlowBuilder API endpoints will be provided.
2. **Define Types**: Write the TypeScript interfaces first.
3. **Build Components**: Create isolated Tailwind UI components using mock data if API is not yet ready.
4. **Wire Up Data**: Assemble the components in the Next.js `page.tsx` and integrate the `fetch()` calls to FlowBuilder.
