# ImpactHub Wireframe Prototype

IS2102 Final Assessment - Volunteer Management Platform for Heartfelt Hands

## Overview

This is a Next.js 14 wireframe prototype for "ImpactHub" - a volunteer management platform designed for the non-profit organization "Heartfelt Hands". The prototype demonstrates 5 complete process flows with interactive screens.

## Features

### Process Flows

1. **Process 1: Volunteer Registration & First Event Sign-up** (11 screens)
   - Complete volunteer onboarding flow
   - Skills and interests selection
   - Availability preferences
   - Event discovery and sign-up

2. **Process 2: Coordinator Creates Recurring Event** (7 screens)
   - Event creation wizard
   - Recurrence pattern configuration
   - Shift management
   - Settings and preview

3. **Process 3: Admin Generates Year-End Report** (7 screens)
   - Report type selection
   - Configuration and metrics selection
   - Report preview
   - Export options (PDF, Excel, PowerPoint)

4. **Process 4: Hour Logging & Approval Workflow** (10 screens with tabs)
   - Volunteer view: Log hours, submit for approval
   - Coordinator view: Review and approve/reject submissions

5. **Process 5: QR Check-in & Auto Hour Logging** (7 screens with tabs)
   - Coordinator setup: Generate QR codes, monitor attendance
   - Volunteer check-in: QR scanning, location verification, auto hour logging

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Path-yang/is2102-final-assessment.git
cd is2102-final-assessment
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/app
  /page.tsx                    # Landing page with 5 process cards
  /process-1                   # Volunteer Registration flow
  /process-2                   # Coordinator Event Creation flow
  /process-3                   # Admin Report Generation flow
  /process-4                   # Hour Logging & Approval flow
  /process-5                   # QR Check-in flow
/components
  /ui                          # shadcn/ui components
  /shared                      # Reusable components
  /modals                      # Error modal components
/lib
  /mock-data.ts                # Mock data for demo
  /utils.ts                    # Utility functions
/types
  /index.ts                    # TypeScript type definitions
```

## Design Specifications

- **Primary Color**: Blue (#3B82F6)
- **Success Color**: Green (#10B981)
- **Warning Color**: Orange (#F59E0B)
- **Background**: Light gray (#F9FAFB)

## Features Implemented

- ✅ Interactive multi-step forms
- ✅ Progress indicators
- ✅ Tabbed interfaces for dual perspectives
- ✅ Error modal components
- ✅ Responsive design
- ✅ Mock data integration
- ✅ Navigation between screens
- ✅ Form validation states
- ✅ Loading states
- ✅ Success/confirmation screens

## Deployment

This project is ready for deployment on Vercel:

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

## License

ISC

## Author

IS2102 Final Assessment Submission
