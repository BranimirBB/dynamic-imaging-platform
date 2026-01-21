# UI Components Documentation

This document provides detailed documentation for the reusable UI components used throughout the Dynamic Imaging Platform.

## Table of Contents

- [Base Components (shadcn/ui)](#base-components-shadcnui)
- [Custom Components](#custom-components)
- [Component Patterns](#component-patterns)

---

## Base Components (shadcn/ui)

The platform uses [shadcn/ui](https://ui.shadcn.com/) components built on Radix UI primitives. These are located in `src/components/ui/`.

### Available Components

| Component | File | Description |
|-----------|------|-------------|
| Avatar | `avatar.tsx` | User profile images with fallback initials |
| Badge | `badge.tsx` | Status labels and tags |
| Button | `button.tsx` | Interactive buttons with variants |
| Card | `card.tsx` | Content containers |
| Checkbox | `checkbox.tsx` | Selection controls |
| Dialog | `dialog.tsx` | Modal dialogs |
| Dropdown Menu | `dropdown-menu.tsx` | Contextual menus |
| Input | `input.tsx` | Text input fields |
| Label | `label.tsx` | Form labels |
| Popover | `popover.tsx` | Floating content |
| Progress | `progress.tsx` | Progress indicators |
| Select | `select.tsx` | Dropdown selections |
| Separator | `separator.tsx` | Visual dividers |
| Sheet | `sheet.tsx` | Slide-out panels |
| Sidebar | `sidebar.tsx` | Navigation sidebar |
| Skeleton | `skeleton.tsx` | Loading placeholders |
| Slider | `slider.tsx` | Range inputs |
| Switch | `switch.tsx` | Toggle switches |
| Table | `table.tsx` | Data tables |
| Tabs | `tabs.tsx` | Tabbed interfaces |
| Textarea | `textarea.tsx` | Multi-line text input |
| Toggle | `toggle.tsx` | Toggle buttons |
| Tooltip | `tooltip.tsx` | Hover tooltips |

---

## Custom Components

### AppSidebar

**File:** `src/components/app-sidebar.tsx`

The main navigation sidebar containing:
- Logo and branding
- Primary navigation links
- User profile section
- Theme toggle

### InnerPageNavigation

**File:** `src/components/inner-page-navigation.tsx`

Tab-style navigation for sub-pages within a module.

**Usage:**
```tsx
import { InnerPageNavigation } from "@/components/inner-page-navigation"

<InnerPageNavigation />
```

**Styling Pattern:**
```tsx
<nav className="flex gap-8 border-b border-gray-200 mb-2 mt-4">
    <button
        onClick={() => setActiveSection("tab1")}
        className={`pb-2 transition-colors flex items-center gap-2
            ${activeSection === "tab1"
                ? "font-bold text-black border-b-2 border-black"
                : "font-medium text-gray-500 border-b-2 border-transparent hover:text-black"}
        `}
        style={{ marginBottom: "-1px" }}
    >
        Tab Label
    </button>
</nav>
```

### PatientEvaluationsTable

**File:** `src/components/patient-evaluations-table.tsx`

Displays ultrasound evaluation history for a patient using TanStack Table.

**Props:**
| Prop | Type | Description |
|------|------|-------------|
| `data` | `object` | Evaluation data from JSON |
| `patientName` | `string` | Current patient's name |

### DataTable

**File:** `src/components/data-table.tsx`

Generic data table component for displaying tabular data.

### SectionCards

**File:** `src/components/section-cards.tsx`

Card grid layouts for dashboard sections.

### SiteHeader

**File:** `src/components/site-header.tsx`

Top header bar with breadcrumbs and actions.

---

## Component Patterns

### Card with Custom Outline

For highlighted/featured cards:

```tsx
<style>{`
    .custom-card-outline {
        border: 1.5px solid #6188C3 !important;
        box-shadow: 0 2px 8px 0 #6188C333 !important;
    }
`}</style>

<Card className="custom-card-outline">
    {/* content */}
</Card>
```

### Selected State Pattern

For selectable items (e.g., patient cards):

```tsx
<style>{`
    .selected-patient-card {
        border: 0.5px solid #5589C8 !important;
        box-shadow: 0 2px 8px 0 #5589C833 !important;
        background-color: #F4FAFF !important;
    }
`}</style>

<Card className={selectedId === item.id ? 'selected-patient-card' : ''}>
    {/* content */}
</Card>
```

### Contextual Menu Dots

3-dot vertical menu for cards:

```tsx
<button 
    onClick={(e) => { e.stopPropagation(); }}
    className="absolute top-3 right-3 p-1 rounded-md hover:bg-gray-200 transition-colors z-10"
>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-500">
        <circle cx="12" cy="5" r="1.5" />
        <circle cx="12" cy="12" r="1.5" />
        <circle cx="12" cy="19" r="1.5" />
    </svg>
</button>
```

### Add More Button Pattern

Non-functional placeholder for future features:

```tsx
<button
    onClick={() => {/* Non-functional placeholder */}}
    className="pb-2 transition-colors flex items-center gap-1.5 font-medium text-gray-400 border-b-2 border-transparent hover:text-gray-600 cursor-pointer"
>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
    Add more
</button>
```

### Video Card with Play Overlay

```tsx
<div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
    <video 
        src={videoSource}
        className="absolute inset-0 h-full w-full object-cover opacity-80"
        muted
        playsInline
    />
    <div className="absolute inset-0 bg-black/20" />
    <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-background/80 rounded-full p-3 backdrop-blur-sm">
            <IconPlayerPlay className="size-8 text-foreground fill-foreground" />
        </div>
    </div>
</div>
```

---

## Best Practices

1. **Use existing UI components** from `src/components/ui/` before creating new ones
2. **Follow the established color scheme** (see design-system.md)
3. **Use CSS-in-JS via style tags** for component-specific styles
4. **Keep components focused** - one responsibility per component
5. **Use TypeScript props** for type safety
