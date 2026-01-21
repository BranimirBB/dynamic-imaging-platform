# Dynamic Imaging Platform

A modern web application for ultrasound imaging management, patient rehabilitation tracking, and ProbeFix Dynamic integration. Built for healthcare professionals and sports medicine practitioners.

![Platform Version](https://img.shields.io/badge/version-0.0.0-blue)
![React](https://img.shields.io/badge/React-18.3-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178c6)
![Vite](https://img.shields.io/badge/Vite-5.4-646cff)

## 🎯 Overview

The Dynamic Imaging Platform is designed to streamline ultrasound-based patient assessments, particularly for sports rehabilitation and muscle monitoring. It integrates with ProbeFix Dynamic for hands-free ultrasound probe stabilization during dynamic movements.

## ✨ Features

### 📊 Overview Dashboard
- Latest assessments at a glance
- Case of the month highlights
- News and platform updates
- Quick access to recent patient evaluations

### 👥 Patient Management
- Multi-group patient organization (e.g., Helmond Rehabilitation, PSV Eindhoven)
- Comprehensive patient profiles with:
  - Status badges (Ready for training, Post surgery, Limited training, etc.)
  - Current injury tracking
  - BMC (Bone Mineral Content) measurements
  - Ultrasound evaluation history
  - Patient file gallery
- Searchable and filterable patient lists

### 📚 Learning Center
- Educational modules on ultrasound techniques
- ProbeFix Dynamic training for upper and lower body
- Video-based learning with expert instructors
- Workshop announcements and community events

### 🔗 Connections
- Manage professional connections
- Collaborate with other healthcare practitioners

### 🌍 Global Community
- Access to worldwide ultrasound community
- Share cases and best practices

### ✏️ Annotation Tools
- Ultrasound image annotation capabilities
- Measurement tools for imaging analysis

### 📬 Mailbox
- Internal messaging system
- Communication with team members

## 🛠️ Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS with custom theming
- **UI Components:** Radix UI primitives with shadcn/ui
- **Icons:** Tabler Icons, Lucide React, and custom SVG icons
- **Routing:** React Router DOM
- **Forms:** React Hook Form with Zod validation
- **Tables:** TanStack Table
- **Charts:** Recharts
- **Drag & Drop:** dnd-kit
- **PWA Support:** Vite PWA Plugin with Workbox

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dynamic-imaging-platform
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production (TypeScript check + Vite build) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |

## 📁 Project Structure

```
src/
├── app/                    # Page components
│   ├── annotation/         # Annotation tools page
│   ├── connections/        # Connections management
│   ├── global-community/   # Global community page
│   ├── learning/           # Learning modules
│   ├── mailbox/            # Messaging system
│   ├── overview/           # Dashboard overview
│   └── patients/           # Patient management
├── assets/                 # Static assets (images, videos, icons)
├── components/             # Reusable components
│   └── ui/                 # shadcn/ui components
├── hooks/                  # Custom React hooks
└── lib/                    # Utility functions
```

## 🎨 Theming

The application supports light and dark modes with a custom color palette:

- Primary Blue: `#6188C3`
- Accent Blue: `#5589C8`
- Background Light: `#F4FAFF`, `#EFF7FF`

Theme can be toggled via the mode toggle in the sidebar.

## 📱 PWA Support

The application is configured as a Progressive Web App with:
- Offline support
- Installable on desktop and mobile
- Custom app icons (192x192, 512x512)

## � Documentation

Detailed documentation is available in the `/docs` folder:

| Document | Description |
|----------|-------------|
| [components.md](docs/components.md) | UI component library and patterns |
| [design-system.md](docs/design-system.md) | Colors, typography, spacing, icons |
| [patient-management.md](docs/patient-management.md) | Patient module deep dive |
| [learning-modules.md](docs/learning-modules.md) | Learning center structure |
| [data-models.md](docs/data-models.md) | Data structures and field definitions |
| [future-roadmap.md](docs/future-roadmap.md) | Planned features and development roadmap |

## �📄 License

This project is private and proprietary.

## 🔗 Related

- [ProbeFix Dynamic](https://usono.com) - Hands-free ultrasound probe fixation system
- [Usono](https://usono.com) - Medical device innovation

---

Built with ❤️ for healthcare professionals
