# Design System

This document defines the visual design language for the Dynamic Imaging Platform, ensuring consistency across all components and pages.

## Table of Contents

- [Color Palette](#color-palette)
- [Typography](#typography)
- [Spacing](#spacing)
- [Icons](#icons)
- [Shadows & Effects](#shadows--effects)
- [Status Badges](#status-badges)
- [Dark Mode](#dark-mode)

---

## Color Palette

### Primary Colors

| Name | Hex | Usage |
|------|-----|-------|
| Primary Blue | `#6188C3` | Main brand color, card outlines, links |
| Accent Blue | `#5589C8` | Selected states, borders, highlights |
| Dark Blue | `#2D4F83` | Headings, emphasis text |

### Background Colors

| Name | Hex | Usage |
|------|-----|-------|
| Light Blue 1 | `#F4FAFF` | Selected card backgrounds |
| Light Blue 2 | `#EFF7FF` | Section backgrounds, hover states |
| Light Blue 3 | `#F8FCFF` | Subtle hover backgrounds |
| White | `#FFFFFF` | Default backgrounds, table bodies |

### Status Colors

| Status | Background | Text | Border | Hover |
|--------|------------|------|--------|-------|
| Ready for Training | `#fb923c` (orange) | white | `#fb923c` | `#f97316` |
| Ready for Competing | `#22c55e` (green) | white | `#22c55e` | `#16a34a` |
| Early in Rehabilitation | `#6b7280` (gray) | white | `#6b7280` | - |
| Limited Training | `#3b82f6` (blue) | white | `#3b82f6` | `#2563eb` |
| Post Surgery | `#ef4444` (red) | white | `#ef4444` | `#dc2626` |
| Current Injury | `#e5e7eb` (light gray) | `#374151` | `#d1d5db` | - |

### Neutral Colors

| Name | Hex | Usage |
|------|-----|-------|
| Gray 50 | `#f9fafb` | Subtle backgrounds |
| Gray 100 | `#f3f4f6` | Borders, dividers |
| Gray 200 | `#e5e7eb` | Injury badges, borders |
| Gray 300 | `#d1d5db` | Muted borders |
| Gray 400 | `#9ca3af` | Placeholder text |
| Gray 500 | `#6b7280` | Secondary text, icons |
| Gray 600 | `#4b5563` | Body text |
| Gray 700 | `#374151` | Dark text |
| Black | `#000000` | Headings, active tabs |

---

## Typography

### Font Family

The platform uses the system font stack for optimal performance:

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

### Font Sizes

| Element | Size | Weight | Class |
|---------|------|--------|-------|
| Page Title | `2xl` (1.5rem) | Bold (700) | `text-2xl font-bold` |
| Section Title | `lg` (1.125rem) | Semibold (600) | `text-lg font-semibold` |
| Card Title | `base` (1rem) | Semibold (600) | `font-semibold` |
| Body Text | `sm` (0.875rem) | Normal (400) | `text-sm` |
| Caption | `xs` (0.75rem) | Normal (400) | `text-xs` |
| Muted Text | `xs` (0.75rem) | Normal (400) | `text-xs text-muted-foreground` |

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Normal | 400 | Body text, descriptions |
| Medium | 500 | Navigation items, labels |
| Semibold | 600 | Card titles, section headers |
| Bold | 700 | Page titles, active states |

---

## Spacing

### Base Unit

The spacing system uses a 4px base unit with Tailwind's spacing scale.

### Common Spacing Values

| Name | Value | Tailwind Class | Usage |
|------|-------|----------------|-------|
| xs | 4px | `gap-1`, `p-1` | Icon gaps, tight spacing |
| sm | 8px | `gap-2`, `p-2` | Button padding, small gaps |
| md | 12px | `gap-3`, `p-3` | Card padding, list gaps |
| lg | 16px | `gap-4`, `p-4` | Section gaps, page padding |
| xl | 24px | `gap-6`, `p-6` | Large section spacing |
| 2xl | 32px | `gap-8` | Tab navigation gaps |

### Layout Spacing

| Context | Value | Notes |
|---------|-------|-------|
| Page padding | `p-4 pt-0` | Standard page container |
| Card padding | `p-4` to `p-6` | Depends on content density |
| Grid gaps | `gap-3` to `gap-4` | Between grid items |
| Section margins | `mt-4` | Between content sections |

---

## Icons

### Icon Libraries

1. **Tabler Icons** (`@tabler/icons-react`) - Primary icon set
2. **Lucide React** (`lucide-react`) - Secondary icons
3. **Custom SVG** - Brand-specific icons in `src/assets/icons/`

### Icon Sizes

| Size | Pixels | Class | Usage |
|------|--------|-------|-------|
| Small | 16px | `w-4 h-4` | Inline icons, buttons |
| Medium | 20px | `w-5 h-5` | Navigation, cards |
| Large | 32px | `size-8` | Feature highlights |
| XL | 64px | `size-16` | Modal placeholders |

### Common Icons

| Icon | Component | Usage |
|------|-----------|-------|
| User Plus | `IconUserPlus` | Add new patient |
| Filter | `IconFilter` | Filter controls |
| Search | `IconSearch` | Search inputs |
| Play | `IconPlayerPlay` | Video thumbnails |
| Trending Up | `IconTrendingUp` | Trends, insights |

### Custom Icons Location

```
src/assets/icons/
├── AnnotationToolPageLogo.svg
├── EstablishedConnectionLogo.svg
├── GlobalCommunityPageLogo.svg
├── LearningPageLogo.svg
├── LogoForThePlatform.svg
├── MailPageLogo.svg
├── OverviewPageLogo.svg
└── PatientsPageLogo.svg
```

---

## Shadows & Effects

### Box Shadows

| Name | CSS | Usage |
|------|-----|-------|
| Card Shadow | `0 2px 8px 0 #5589C833` | Selected cards |
| Outline Shadow | `0 2px 8px 0 #6188C333` | Featured cards |
| Hover Shadow | `0 0 8px 2px #6188C355` | Card hover states |
| News Hover | `0 2px 12px 0 #6188C355` | News item hover |

### Border Styles

| Style | CSS | Usage |
|-------|-----|-------|
| Standard Border | `border` | Default card borders |
| Accent Border | `border: 1.5px solid #6188C3` | Featured cards |
| Selected Border | `border: 0.5px solid #5589C8` | Selected items |
| Separator | `border-b border-gray-200` | Tab navigation |

### Transitions

```css
/* Standard transition */
transition-colors

/* Card hover */
transition-all hover:shadow-md

/* Scale effect */
transition-transform hover:scale-[1.01]
```

---

## Status Badges

### Badge CSS Classes

```css
.badge-training {
    background-color: #fb923c !important;
    color: white !important;
    border-color: #fb923c !important;
}

.badge-ready {
    background-color: #22c55e !important;
    color: white !important;
    border-color: #22c55e !important;
}

.badge-rehabilitation {
    background-color: #6b7280 !important;
    color: white !important;
    border-color: #6b7280 !important;
}

.badge-limited-training {
    background-color: #3b82f6 !important;
    color: white !important;
    border-color: #3b82f6 !important;
}

.badge-post-surgery {
    background-color: #ef4444 !important;
    color: white !important;
    border-color: #ef4444 !important;
}

.badge-injury {
    background-color: #e5e7eb !important;
    color: #374151 !important;
    border-color: #d1d5db !important;
}
```

### Badge Usage

```tsx
<Badge 
    variant="outline"
    className={`text-xs ${
        status === "Ready for training" ? "badge-training" : 
        status === "Ready for competing" ? "badge-ready" :
        status === "Early in rehabilitation" ? "badge-rehabilitation" :
        status === "Limited training" ? "badge-limited-training" :
        status === "Post surgery" ? "badge-post-surgery" : ""
    }`}
>
    {status}
</Badge>
```

---

## Dark Mode

The application supports dark mode via `next-themes`. Theme toggle is available in the sidebar.

### Theme Variables

Theme colors are defined in `src/index.css` using CSS custom properties that switch based on the active theme.

### Implementation

```tsx
import { ModeToggle } from "@/components/mode-toggle"

// In sidebar
<ModeToggle />
```

### Best Practices

1. Use Tailwind's `dark:` variants for dark mode styles
2. Avoid hardcoded colors - use theme variables
3. Test both modes when adding new components
4. Use `bg-background` and `text-foreground` for theme-aware colors

---

## Accessibility

### Color Contrast

All text colors meet WCAG 2.1 AA standards for contrast:
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum

### Focus States

All interactive elements have visible focus indicators using Tailwind's `focus:` and `focus-visible:` utilities.

### Keyboard Navigation

- All interactive elements are keyboard accessible
- Tab order follows visual layout
- Escape closes modals and dropdowns
