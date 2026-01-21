# Future Roadmap

This document outlines planned features, placeholders in the current codebase, and the development roadmap for the Dynamic Imaging Platform.

## Table of Contents

- [Current Placeholders](#current-placeholders)
- [Short-term Roadmap](#short-term-roadmap)
- [Medium-term Roadmap](#medium-term-roadmap)
- [Long-term Vision](#long-term-vision)
- [Technical Debt](#technical-debt)

---

## Current Placeholders

These are UI elements that exist but are not yet functional:

### Patient Management

| Feature | Location | Status | Notes |
|---------|----------|--------|-------|
| "Add more" groups button | Patients page nav | 🟡 UI Only | Clicking does nothing |
| PSV Eindhoven section | Patients page | 🟡 Placeholder | Shows "Coming soon..." |
| Search patients | Left panel | 🟡 UI Only | Input exists, no logic |
| Filter patients | Left panel | 🟡 UI Only | Button exists, no modal |
| New athlete button | Left panel | 🟡 UI Only | No creation form |
| Notes textarea | Right panel | 🟡 UI Only | Not persisted |

### Overview Page

| Feature | Location | Status | Notes |
|---------|----------|--------|-------|
| Contextual menu (3 dots) | "Did you know" card | 🟡 UI Only | No dropdown menu |
| Contextual menu (3 dots) | News card | 🟡 UI Only | No dropdown menu |
| "See trending cases" badge | Case of the month | 🟡 UI Only | Not clickable |

### Learning Center

| Feature | Location | Status | Notes |
|---------|----------|--------|-------|
| Video playback | Learning cards | 🟢 Functional | Videos play in modals |
| Course progress | All courses | 🔴 Not started | No tracking system |
| Bookmarks/Favorites | All courses | 🔴 Not started | Not implemented |

### Global Features

| Feature | Status | Notes |
|---------|--------|-------|
| User authentication | 🔴 Not started | No login system |
| Data persistence | 🔴 Not started | All data is mock/static |
| Real-time updates | 🔴 Not started | No WebSocket/polling |
| Offline support | 🟡 PWA ready | Service worker configured |

**Legend:**
- 🟢 Functional
- 🟡 Partial/UI Only
- 🔴 Not started

---

## Short-term Roadmap

### Phase 1: Core Functionality (Q1 2026)

#### 1.1 Patient Search & Filter
- [ ] Implement search logic for patient names
- [ ] Add filter modal with options:
  - Status filter
  - Injury filter
  - Date range filter
- [ ] Add clear filters button

#### 1.2 Patient Group Management
- [ ] Enable PSV Eindhoven with its own patient list
- [ ] Implement "Add more" group functionality:
  - Add group modal
  - Group naming
  - Group deletion
- [ ] Group switching with state persistence

#### 1.3 Notes Persistence
- [ ] Local storage for notes
- [ ] Auto-save functionality
- [ ] Notes history/versioning (optional)

#### 1.4 Contextual Menus
- [ ] Dropdown menu for card actions:
  - Share
  - Save/Bookmark
  - Report issue
  - Hide from feed

---

## Medium-term Roadmap

### Phase 2: Data Layer (Q2 2026)

#### 2.1 Backend Integration
- [ ] Design RESTful API endpoints
- [ ] Set up database schema
- [ ] Implement API client in frontend
- [ ] Add loading states and error handling

#### 2.2 User Authentication
- [ ] Login/logout flow
- [ ] User registration
- [ ] Password recovery
- [ ] Session management
- [ ] Role-based access control

#### 2.3 Real Patient Data
- [ ] Patient CRUD operations
- [ ] Evaluation data management
- [ ] File upload for patient images
- [ ] Data validation and sanitization

### Phase 3: Enhanced Features (Q3 2026)

#### 3.1 Learning Progress Tracking
- [ ] Track course completion
- [ ] Resume from last position
- [ ] Completion certificates
- [ ] Learning analytics

#### 3.2 Annotation Tools
- [ ] Full annotation page implementation
- [ ] Drawing tools (line, circle, polygon)
- [ ] Measurement tools
- [ ] Annotation saving and sharing

#### 3.3 Communication Features
- [ ] Implement mailbox functionality
- [ ] In-app notifications
- [ ] Team messaging
- [ ] Comment threads on cases

---

## Long-term Vision

### Phase 4: Advanced Features (Q4 2026+)

#### 4.1 AI-Assisted Analysis
- [ ] Automated muscle fiber detection
- [ ] Injury progression tracking
- [ ] Treatment recommendations
- [ ] Anomaly detection in scans

#### 4.2 Integration Ecosystem
- [ ] ProbeFix Dynamic device sync
- [ ] DICOM import/export
- [ ] EMR/EHR integration
- [ ] Third-party app marketplace

#### 4.3 Global Community
- [ ] Public case sharing
- [ ] Expert consultations
- [ ] Research collaboration tools
- [ ] Conference integration

#### 4.4 Mobile Application
- [ ] React Native mobile app
- [ ] Offline-first architecture
- [ ] Push notifications
- [ ] Camera integration for quick uploads

---

## Technical Debt

### Code Quality

| Issue | Priority | Effort |
|-------|----------|--------|
| Move inline styles to CSS modules | Medium | Medium |
| Extract repeated patterns to hooks | Low | Low |
| Add TypeScript strict mode | High | High |
| Component unit tests | High | High |
| E2E tests with Playwright | Medium | Medium |

### Performance

| Issue | Priority | Effort |
|-------|----------|--------|
| Lazy load learning videos | High | Low |
| Image optimization | Medium | Low |
| Code splitting per route | Medium | Medium |
| Virtual scrolling for patient list | Low | Medium |

### Accessibility

| Issue | Priority | Effort |
|-------|----------|--------|
| Add ARIA labels | High | Medium |
| Keyboard navigation audit | High | Medium |
| Screen reader testing | High | Medium |
| Color contrast review | Medium | Low |

---

## Feature Requests Backlog

These are potential features gathered from user feedback:

### High Priority
1. Export patient data to PDF
2. Bulk patient import from CSV
3. Calendar view for evaluations
4. Multi-language support (Dutch, German, English)

### Medium Priority
1. Dark mode refinements
2. Customizable dashboard widgets
3. Patient comparison view
4. Evaluation templates

### Low Priority
1. Gamification for learning
2. Video calling integration
3. Voice notes for patients
4. Custom badge colors

---

## Release Notes Template

### Version X.X.X (Date)

**New Features:**
- Feature 1
- Feature 2

**Improvements:**
- Improvement 1
- Improvement 2

**Bug Fixes:**
- Fix 1
- Fix 2

**Known Issues:**
- Issue 1

---

## Contributing to Roadmap

To propose a new feature:

1. Check if it's already in this roadmap
2. Create an issue with the `feature-request` label
3. Include:
   - Problem statement
   - Proposed solution
   - Expected impact
   - Mockups (if applicable)

Features are prioritized based on:
- User impact
- Technical feasibility
- Strategic alignment
- Development effort
