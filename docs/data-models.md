# Data Models

This document defines all data structures and models used throughout the Dynamic Imaging Platform.

## Table of Contents

- [Patient Data](#patient-data)
- [Learning Content](#learning-content)
- [Evaluations](#evaluations)
- [News & Updates](#news--updates)
- [User Data](#user-data)

---

## Patient Data

### Patient Interface

```typescript
interface Patient {
    id: number;
    patientId: string;
    name: string;
    status: PatientStatus;
    currentInjury: string | null;
    dateOfBirth: string;
    bmc: string;
    avatar: string;
}
```

### PatientStatus Type

```typescript
type PatientStatus = 
    | "Ready for training"
    | "Ready for competing"
    | "Early in rehabilitation"
    | "Limited training"
    | "Post surgery";
```

### Field Specifications

| Field | Type | Format | Example | Required |
|-------|------|--------|---------|----------|
| `id` | `number` | Integer | `0`, `1`, `2` | Yes |
| `patientId` | `string` | P-XXXX | `"P-1000"` | Yes |
| `name` | `string` | Full name | `"John Smith"` | Yes |
| `status` | `PatientStatus` | Enum value | `"Ready for training"` | Yes |
| `currentInjury` | `string \| null` | Injury name | `"Calf strain"` | No |
| `dateOfBirth` | `string` | DD.MM.YYYY | `"11.04.2001"` | Yes |
| `bmc` | `string` | Formatted number | `"2.200"` | Yes |
| `avatar` | `string` | URL path | `"/avatars/shadcn.jpg"` | Yes |

### Patient Injuries (Mock Data)

```typescript
const patientInjuries = [
    "Calf strain",
    "Hamstring tear", 
    "ACL sprain",
    "Quadriceps contusion",
    "Achilles tendinopathy",
    "Biceps femoris pain",
    "Tibia stress fracture",
    "Groin strain",
    "Patellar tendinitis"
];
```

---

## Learning Content

### LearningItem Interface

```typescript
interface LearningItem {
    title: string;
    shortDesc: string;
    fullDesc: string;
    video: string | null;
    author: Author;
}
```

### Author Interface

```typescript
interface Author {
    name: string;
    experience: string;
    avatar: string;  // Imported asset or URL
}
```

### ProbeFix Item Interface

```typescript
interface ProbefixItem {
    title: string;
    shortDesc: string;
    fullDesc: string;
    author: Author;
}
```

### Field Specifications

| Field | Type | Max Length | Example |
|-------|------|------------|---------|
| `title` | `string` | 50 chars | `"Cardiac Imaging Fundamentals"` |
| `shortDesc` | `string` | 40 chars | `"Master heart ultrasound basics"` |
| `fullDesc` | `string` | 500 chars | Full description text |
| `video` | `string \| null` | - | Imported video asset |
| `author.name` | `string` | 50 chars | `"Dr. Erik Eurelings"` |
| `author.experience` | `string` | 60 chars | `"27 years of experience in physiotherapy"` |
| `author.avatar` | `string` | - | Imported image asset |

---

## Evaluations

### Evaluation Data Source

Evaluation data is loaded from `src/app/data.json`.

### Expected JSON Structure

```json
{
    "evaluations": [
        {
            "id": 1,
            "date": "2026-01-15",
            "type": "Muscle Assessment",
            "findings": "Normal muscle fiber alignment",
            "status": "Completed"
        }
    ]
}
```

### Evaluation Interface

```typescript
interface Evaluation {
    id: number;
    date: string;           // ISO date format
    type: string;           // Evaluation type
    findings: string;       // Assessment findings
    status: EvaluationStatus;
}

type EvaluationStatus = "Completed" | "Pending" | "In Review";
```

---

## News & Updates

### NewsItem Interface

```typescript
interface NewsItem {
    title: string;
    desc: string;
    fullDesc: string;
}
```

### Example Data

```typescript
const newsItems = [
    {
        title: "Platform Update v2.1",
        desc: "New features released",
        fullDesc: "We are excited to announce Platform Update v2.1..."
    },
    {
        title: "Community Event",
        desc: "Join our webinar next week",
        fullDesc: "Don't miss our upcoming community webinar..."
    }
];
```

---

## User Data

### User Interface (Sidebar)

```typescript
interface User {
    name: string;
    email: string;
    avatar: string;
}
```

### Example

```typescript
const user = {
    name: "Erik Hendriks",
    email: "erik@helmond-rehab.nl",
    avatar: "/avatars/user.jpg"
};
```

---

## Assessment Data

### LatestAssessment Interface

```typescript
interface LatestAssessment {
    title: string;      // "Patient / Injury / Week"
    shortDesc: string;  // Date
    fullDesc: string;   // Assessment description
    image: string;      // Image path
}
```

### Example

```typescript
const didYouKnowItems = [
    {
        title: "Ronaldo / Biceps Femoris injury / Week3",
        shortDesc: "26.12.2025",
        fullDesc: "Ultrasound shows clear signs of healing...",
        image: "/src/assets/LastAssessment1.png"
    }
];
```

---

## Patient Groups

### Group Type

```typescript
type PatientGroup = "helmond" | "psv";
```

### Group Metadata (Future)

```typescript
interface PatientGroup {
    id: string;
    name: string;
    description: string;
    patientCount: number;
    createdAt: Date;
}
```

---

## File Assets

### Image Assets

| Path | Description |
|------|-------------|
| `/src/assets/UltrasoundImage.png` | Patient ultrasound files |
| `/src/assets/LastAssessment1.png` | Assessment thumbnails |
| `/src/assets/CaseOfTheMonth.png` | Featured case image |
| `/src/assets/ErikH.jpeg` | Author avatar |
| `/src/assets/Aukje.jpeg` | Author avatar |
| `/src/assets/Ricardo.png` | Author avatar |

### Video Assets

| Path | Description |
|------|-------------|
| `/src/assets/VideoUsono.mov` | ProbeFix demo video |
| `/src/assets/MusculoskeletalScanning.mov` | MSK training video |
| `/src/assets/BonesVideo.mov` | Bone imaging video |

### Icon Assets

| Path | Description |
|------|-------------|
| `/src/assets/icons/LogoForThePlatform.svg` | Main platform logo |
| `/src/assets/icons/OverviewPageLogo.svg` | Overview page icon |
| `/src/assets/icons/PatientsPageLogo.svg` | Patients page icon |
| `/src/assets/icons/LearningPageLogo.svg` | Learning page icon |
| `/src/assets/icons/AnnotationToolPageLogo.svg` | Annotation tool icon |
| `/src/assets/icons/GlobalCommunityPageLogo.svg` | Community page icon |
| `/src/assets/icons/EstablishedConnectionLogo.svg` | Connections icon |
| `/src/assets/icons/MailPageLogo.svg` | Mailbox icon |

---

## Data Validation

### Date Format

- Display format: `DD.MM.YYYY` (European)
- Storage format: `YYYY-MM-DD` (ISO)

### BMC Values

- Range: 2,000g - 4,000g typical
- Format: European number formatting (comma as thousands separator)
- Unit: grams (g)

### Patient ID

- Format: `P-` followed by 4 digits
- Range: `P-1000` to `P-9999`
- Must be unique within a group

---

## API Considerations (Future)

When connecting to a real backend, consider:

### RESTful Endpoints

```
GET    /api/patients              - List all patients
GET    /api/patients/:id          - Get patient details
POST   /api/patients              - Create patient
PUT    /api/patients/:id          - Update patient
DELETE /api/patients/:id          - Delete patient

GET    /api/patients/:id/evaluations  - Get evaluations
POST   /api/patients/:id/evaluations  - Add evaluation

GET    /api/groups                - List patient groups
POST   /api/groups                - Create group

GET    /api/learning              - List learning content
GET    /api/learning/:id          - Get course details
```

### Response Format

```typescript
interface ApiResponse<T> {
    data: T;
    success: boolean;
    message?: string;
    pagination?: {
        page: number;
        limit: number;
        total: number;
    };
}
```
