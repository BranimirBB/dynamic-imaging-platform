# Learning Modules

This document provides detailed documentation for the Learning Center module, including content structure, author management, and video integration.

## Table of Contents

- [Overview](#overview)
- [Module Structure](#module-structure)
- [Content Types](#content-types)
- [Author Profiles](#author-profiles)
- [Video Integration](#video-integration)
- [Sub-pages](#sub-pages)

---

## Overview

The Learning Center (`src/app/learning/`) provides educational content for healthcare professionals on ultrasound techniques and ProbeFix Dynamic usage.

### Learning Hub Pages

| Page | File | Description |
|------|------|-------------|
| Main | `page.tsx` | Learning center overview |
| ProbeFix Dynamic | `probefix-dynamic.tsx` | ProbeFix training modules |
| Ultrasound Knowledge | `ultrasound-knowledge.tsx` | Ultrasound technique courses |
| Learning Community | `learning-community-page.tsx` | Community learning features |
| Workshops | `workshops.tsx` | Workshop listings |

---

## Module Structure

### Page Layout

Each learning page follows a consistent structure:

```
┌─────────────────────────────────────────────────────────────┐
│  Inner Page Navigation (tabs)                               │
├─────────────────────────────────────────────────────────────┤
│  Featured Section (with blue outline)                       │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                   │
│  │ Card 1   │  │ Card 2   │  │ Card 3   │                   │
│  │ [Video]  │  │ [Video]  │  │ [Video]  │                   │
│  │ Title    │  │ Title    │  │ Title    │                   │
│  │ Author   │  │ Author   │  │ Author   │                   │
│  └──────────┘  └──────────┘  └──────────┘                   │
├─────────────────────────────────────────────────────────────┤
│  Additional Sections...                                     │
└─────────────────────────────────────────────────────────────┘
```

### Featured Card Styling

```tsx
<Card className="@container/card custom-card-outline">
    <CardHeader>
        <CardDescription style={{ color: '#6188C3', fontWeight: 'bold' }}>
            Based on your latest cases:
        </CardDescription>
    </CardHeader>
    <CardContent>
        {/* 3-column grid of learning cards */}
    </CardContent>
</Card>
```

---

## Content Types

### Learning Item Structure

```typescript
interface LearningItem {
    title: string;           // Course/module title
    shortDesc: string;       // Brief description for card
    fullDesc: string;        // Full description for modal
    video: string | null;    // Video source URL or null
    author: {
        name: string;        // Author full name
        experience: string;  // Experience description
        avatar: string;      // Avatar image import
    };
}
```

### Example Data

```tsx
const learnNowItems = [
    {
        title: "Cardiac Imaging Fundamentals",
        shortDesc: "Master heart ultrasound basics",
        fullDesc: "This comprehensive module covers the fundamental principles of cardiac ultrasound imaging...",
        video: VideoUsono,
        author: {
            name: "Aukje Brekelmans",
            experience: "15 years of experience in physiotherapy",
            avatar: AukjeAvatar
        }
    },
    // ...more items
]
```

### Content Categories

| Category | Description |
|----------|-------------|
| **Learn Now** | Personalized recommendations based on recent cases |
| **ProbeFix Upper Body** | Arms, neck, ribs training |
| **ProbeFix Lower Body** | Thighs, knees, calves/ankles training |
| **Ultrasound Fundamentals** | Basic imaging techniques |

---

## Author Profiles

### Current Authors

| Name | Avatar File | Experience |
|------|-------------|------------|
| Dr. Erik Eurelings | `ErikH.jpeg` | 27 years in physiotherapy |
| Aukje Brekelmans | `Aukje.jpeg` | 15 years in physiotherapy |
| Dr. Ricardo Agostino | `Ricardo.png` | 20 years in physiotherapy |

### Avatar Imports

```tsx
import ErikHAvatar from "@/assets/ErikH.jpeg"
import AukjeAvatar from "@/assets/Aukje.jpeg"
import RicardoAvatar from "@/assets/Ricardo.png"
```

### Author Card Component

```tsx
<div className="flex items-center gap-3 pt-2 border-t">
    <Avatar className="h-8 w-8">
        <AvatarImage src={item.author.avatar} alt={item.author.name} />
        <AvatarFallback>{item.author.name.charAt(0)}</AvatarFallback>
    </Avatar>
    <div className="flex-1">
        <p className="text-xs font-medium">{item.author.name}</p>
        <p className="text-xs text-muted-foreground">{item.author.experience}</p>
    </div>
</div>
```

### Adding New Authors

1. Add avatar image to `src/assets/`
2. Import in the component file
3. Reference in the author object

```tsx
import NewAuthorAvatar from "@/assets/NewAuthor.jpg"

{
    author: {
        name: "Dr. New Author",
        experience: "X years of experience in specialty",
        avatar: NewAuthorAvatar
    }
}
```

---

## Video Integration

### Video Imports

```tsx
import MusculoskeletalVideo from "@/assets/MusculoskeletalScanning.mov"
import VideoUsono from "@/assets/VideoUsono.mov"
import BonesVideo from "@/assets/BonesVideo.mov"
```

### Video Thumbnail (Card View)

```tsx
<div className="relative aspect-video bg-muted rounded-md flex items-center justify-center overflow-hidden">
    {item.video ? (
        <video 
            src={item.video} 
            className="absolute inset-0 w-full h-full object-cover"
            muted
        />
    ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
    )}
    <IconPlayerPlay className="size-8 text-muted-foreground z-10" />
</div>
```

### Video Player (Modal View)

```tsx
<div className="relative aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden mt-4">
    {selectedItem !== null && items[selectedItem].video ? (
        <video 
            src={items[selectedItem].video} 
            className="w-full h-full object-cover"
            controls
            autoPlay
        />
    ) : (
        <>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
            <IconPlayerPlay className="size-16 text-muted-foreground" />
        </>
    )}
</div>
```

### Supported Video Formats

- `.mov` - QuickTime
- `.mp4` - MPEG-4 (recommended for web)
- `.webm` - WebM (recommended for web)

> **Note:** For production, consider converting .mov files to .mp4 for better browser compatibility.

---

## Sub-pages

### ProbeFix Dynamic (`probefix-dynamic.tsx`)

**Sections:**
1. Learn Now (personalized recommendations)
2. ProbeFix Dynamic for Upper Body
3. ProbeFix Dynamic for Lower Body

**State Management:**
```tsx
const [selectedLearnNow, setSelectedLearnNow] = useState<number | null>(null)
const [selectedUpperBody, setSelectedUpperBody] = useState<number | null>(null)
const [selectedLowerBody, setSelectedLowerBody] = useState<number | null>(null)
```

### Ultrasound Knowledge (`ultrasound-knowledge.tsx`)

Similar structure to ProbeFix Dynamic, focused on ultrasound imaging techniques.

### Learning Community (`learning-community-page.tsx`)

Community-driven learning features and peer discussions.

### Workshops (`workshops.tsx`)

Upcoming workshop listings and registration links.

---

## Modal System

### Opening a Modal

```tsx
<div onClick={() => setSelectedLearnNow(index)}>
    {/* Card content */}
</div>
```

### Modal Content

```tsx
<Dialog open={selectedLearnNow !== null} onOpenChange={() => setSelectedLearnNow(null)}>
    <DialogContent className="max-w-3xl">
        <DialogHeader>
            <DialogTitle>{selectedLearnNow !== null && items[selectedLearnNow].title}</DialogTitle>
            <DialogDescription>
                {selectedLearnNow !== null && items[selectedLearnNow].fullDesc}
            </DialogDescription>
        </DialogHeader>
        
        {/* Video Player */}
        
        {/* About the Author */}
        {selectedLearnNow !== null && (
            <div className="mt-6 pt-6 border-t">
                <h3 className="text-sm font-semibold mb-3">About the author:</h3>
                <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                        <AvatarImage src={items[selectedLearnNow].author.avatar} />
                        <AvatarFallback>{items[selectedLearnNow].author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-medium">{items[selectedLearnNow].author.name}</p>
                        <p className="text-sm text-muted-foreground">{items[selectedLearnNow].author.experience}</p>
                    </div>
                </div>
            </div>
        )}
    </DialogContent>
</Dialog>
```

---

## Adding New Content

### Step 1: Prepare Assets

1. Add author avatar to `src/assets/`
2. Add video file to `src/assets/`

### Step 2: Import Assets

```tsx
import NewVideo from "@/assets/NewVideo.mp4"
import NewAuthorAvatar from "@/assets/NewAuthor.jpg"
```

### Step 3: Add to Data Array

```tsx
const learnNowItems = [
    // ...existing items
    {
        title: "New Course Title",
        shortDesc: "Brief description",
        fullDesc: "Full course description...",
        video: NewVideo,  // or null if no video
        author: {
            name: "Author Name",
            experience: "X years of experience",
            avatar: NewAuthorAvatar
        }
    }
]
```

---

## Future Enhancements

- [ ] Progress tracking per user
- [ ] Completion certificates
- [ ] Quiz/assessment integration
- [ ] Bookmarking/favorites
- [ ] Course search and filtering
- [ ] Video streaming instead of local files
- [ ] Multi-language support
- [ ] User ratings and reviews
