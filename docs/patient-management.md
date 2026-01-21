# Patient Management Module

This document provides detailed documentation for the Patient Management module, including data structures, workflows, and implementation details.

## Table of Contents

- [Overview](#overview)
- [Page Structure](#page-structure)
- [Patient Groups](#patient-groups)
- [Patient Data Model](#patient-data-model)
- [Status Workflow](#status-workflow)
- [UI Components](#ui-components)
- [Features](#features)

---

## Overview

The Patient Management module (`src/app/patients/page.tsx`) provides a comprehensive interface for managing patient information, tracking rehabilitation progress, and viewing ultrasound evaluations.

### Key Features

- Multi-group patient organization
- Master-detail layout (list + detail view)
- Status tracking with color-coded badges
- Injury tracking
- Ultrasound evaluation history
- Patient file gallery
- Notes system

---

## Page Structure

### Layout

The page uses a **10-column grid** layout:

```
┌─────────────────────────────────────────────────────────────┐
│  Inner Navigation Tabs (Helmond | PSV | + Add more)         │
├─────────────────────────────────────────────────────────────┤
│  Left Panel (3 cols)  │  Right Panel (7 cols)               │
│  ┌─────────────────┐  │  ┌────────────────────────────────┐ │
│  │ Action Buttons  │  │  │ Patient Details                │ │
│  │ Search Bar      │  │  │ - Avatar, Name, Status         │ │
│  │ ─────────────── │  │  │ - DOB, ID, BMC                 │ │
│  │ Patient List    │  │  │ ─────────────────────────────  │ │
│  │ - Card 1        │  │  │ Notes Section                  │ │
│  │ - Card 2        │  │  │ ─────────────────────────────  │ │
│  │ - Card 3        │  │  │ Tabs: Evaluations | Files      │ │
│  │ - ...           │  │  │ [Tab Content]                  │ │
│  └─────────────────┘  │  └────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### CSS Grid Implementation

```tsx
<div className="grid grid-cols-1 lg:grid-cols-10 gap-4 h-full">
    <div className="lg:col-span-3">  {/* Left Panel */}
    <div className="lg:col-span-7">  {/* Right Panel */}
</div>
```

---

## Patient Groups

### Current Groups

| Group | Key | Status |
|-------|-----|--------|
| Helmond Rehabilitation | `helmond` | Active |
| PSV Eindhoven | `psv` | Placeholder |

### Group Navigation State

```tsx
const [activeSection, setActiveSection] = useState<"helmond" | "psv">("helmond")
```

### Adding New Groups

To add a new group:

1. Update the type definition:
```tsx
const [activeSection, setActiveSection] = useState<"helmond" | "psv" | "newgroup">("helmond")
```

2. Add navigation button in the `<nav>` element

3. Add content section in the conditional rendering

> **Note:** The "Add more" button is a placeholder for future functionality to dynamically add groups.

---

## Patient Data Model

### Data Structure

```typescript
interface Patient {
    id: number;                    // Unique identifier
    patientId: string;             // Display ID (e.g., "P-1000")
    name: string;                  // Full name
    status: PatientStatus;         // Current rehabilitation status
    currentInjury: string | null;  // Active injury or null
    dateOfBirth: string;           // Format: "DD.MM.YYYY"
    bmc: string;                   // Bone Mineral Content (e.g., "2,200")
    avatar: string;                // Avatar image path
}

type PatientStatus = 
    | "Ready for training"
    | "Ready for competing"
    | "Early in rehabilitation"
    | "Limited training"
    | "Post surgery";
```

### Mock Data Generation

```tsx
const patients = Array.from({ length: 12 }, (_, i) => {
    let status = i % 3 === 0 ? "Ready for training" 
               : i % 3 === 1 ? "Early in rehabilitation" 
               : "Ready for competing"
    
    // Custom overrides
    if (i === 1) status = "Limited training"  // Maria Garcia
    if (i === 3) status = "Post surgery"      // Sarah Williams
    
    return {
        id: i,
        patientId: `P-${String(1000 + i).padStart(4, '0')}`,
        name: patientNames[i],
        status,
        currentInjury: i % 3 === 2 ? null : patientInjuries[i],
        dateOfBirth: patientDOBs[i],
        bmc: (2200 + (i * 120)).toLocaleString('de-DE'),
        avatar: "/avatars/shadcn.jpg"
    }
})
```

### Field Definitions

| Field | Description | Format |
|-------|-------------|--------|
| `id` | Internal unique ID | Integer starting at 0 |
| `patientId` | Display ID for patients | "P-XXXX" format |
| `name` | Full patient name | "FirstName LastName" |
| `status` | Rehabilitation stage | See Status Workflow |
| `currentInjury` | Active injury | String or null |
| `dateOfBirth` | Birth date | European format (DD.MM.YYYY) |
| `bmc` | Bone Mineral Content | Grams with European formatting (e.g., "2.200") |
| `avatar` | Profile image | URL path |

---

## Status Workflow

### Status Types

```
┌─────────────────┐     ┌───────────────────────┐     ┌─────────────────────┐
│  Post Surgery   │ ──► │ Early in Rehabilitation│ ──► │  Limited Training   │
│     (Red)       │     │       (Gray)           │     │      (Blue)         │
└─────────────────┘     └───────────────────────┘     └─────────────────────┘
                                                                │
                                                                ▼
                        ┌─────────────────────┐     ┌─────────────────────┐
                        │ Ready for Competing │ ◄── │  Ready for Training │
                        │      (Green)        │     │      (Orange)       │
                        └─────────────────────┘     └─────────────────────┘
```

### Status Descriptions

| Status | Color | Meaning |
|--------|-------|---------|
| **Post Surgery** | Red | Patient has recently undergone surgery |
| **Early in Rehabilitation** | Gray | Initial rehabilitation phase |
| **Limited Training** | Blue | Can train with restrictions |
| **Ready for Training** | Orange | Cleared for full training |
| **Ready for Competing** | Green | Fully cleared for competition |

### Injury Badge

- Shown alongside status badge when `currentInjury` is not null
- Gray background with dark text
- Examples: "Calf strain", "Hamstring tear", "ACL sprain"
- **Not shown** for "Ready for competing" status

---

## UI Components

### Left Panel - Patient List

**Components:**
- Action buttons (New athlete, Filter)
- Search input with icon
- Scrollable patient card list

**Patient Card Content:**
```
┌─────────────────────────────────────────────┐
│ Patient Name              [Status Badge]    │
│                           [Injury Badge]    │
│ DOB: DD.MM.YYYY                             │
│ ID: P-XXXX                                  │
└─────────────────────────────────────────────┘
```

### Right Panel - Detail View

**Sections:**
1. **Basic Details** - Avatar, name, status badges, DOB, ID, BMC
2. **Notes** - Textarea for case notes
3. **Tabbed Content:**
   - Ultrasound Evaluations (table)
   - Patient's Files (image grid)

### Tabs in Detail View

```tsx
const [activeTab, setActiveTab] = useState<"evaluations" | "files">("evaluations")
```

---

## Features

### Search (Placeholder)

```tsx
<Input 
    placeholder="Search patients..." 
    className="pl-9"
/>
```

> **Status:** UI only, search logic not yet implemented

### Filter (Placeholder)

```tsx
<Button variant="outline" className="flex-1">
    <IconFilter className="w-4 h-4 mr-2" />
    Filter
</Button>
```

> **Status:** UI only, filter modal not yet implemented

### Patient Selection

```tsx
const [selectedPatient, setSelectedPatient] = useState<number | null>(0)

<Card
    className={selectedPatient === patient.id ? 'selected-patient-card' : ''}
    onClick={() => setSelectedPatient(patient.id)}
>
```

### Patient Files Gallery

4x4 grid of clickable ultrasound images with modal preview:

```tsx
<div className="grid grid-cols-4 gap-3 pt-2">
    {Array.from({ length: 16 }).map((_, index) => (
        <Dialog key={index}>
            <DialogTrigger asChild>
                <div className="aspect-square cursor-pointer rounded-lg overflow-hidden">
                    <img src={UltrasoundImage} alt={`Ultrasound ${index + 1}`} />
                </div>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
                <img src={UltrasoundImage} alt={`Ultrasound ${index + 1}`} />
            </DialogContent>
        </Dialog>
    ))}
</div>
```

---

## Future Enhancements

- [ ] Implement search functionality
- [ ] Add filter modal with status/injury filters
- [ ] Connect to real patient database
- [ ] Add patient creation form
- [ ] Implement patient editing
- [ ] Add evaluation data per patient
- [ ] Enable PSV Eindhoven group
- [ ] Implement "Add more" group functionality
