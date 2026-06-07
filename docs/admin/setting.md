# Admin Specification: Settings

## Overview
The Settings & Security screen handles global platform configurations, categorized into five main tabs: Session Plans, Exercises, Admin Management, Surveys, and Security Logs.

## Key Features & UI Components

### 1. Session Plans Tab
- **Register New Plan Form**: Inputs for Total Sessions and Plan Name/Label.
- **Active Session Plans List**: Data table showing Plan Name, Session Count, and Delete action.

### 2. Exercises Tab
- **Register Exercise Form**: 
  - Inputs for Exercise Name, Category (Strength, Cardio, Core, Mobility, Plyometrics).
  - Drag-and-drop/File upload for Visual Preview (GIF/Image up to 5MB).
- **Exercise Master List**: 
  - Search and Category filter bar.
  - Data table showing Preview Image, Name, Category, and Delete action.
- **Exercise Preview Modal**: Full-screen view of the exercise GIF/Image.

### 3. Admin Management Tab
- **Add New Admin Modal**: Fields for First Name, Last Name, Email, Role (Standard/Super), Temp Password.
- **Admin Directory Table**: Columns for Admin ID, Name, Email, Role, Status, and Actions (Reset Password, Deactivate). Note: Super Admin (FITPAD-001) cannot be deactivated.

### 4. Surveys Tab
- **Add Survey Action**: Button redirecting to `add-survey.html` (Dynamic Google Forms style question builder).
- **Dynamic Question Builder (`add-survey.html`)**:
  - Drag/Reorder, add, and delete questions dynamically.
  - Supported question types: Short Answer, Paragraph, Multiple Choice, Checkboxes, Dropdown.
  - Setting targeting rules to specify which client screen(s) show the survey (Dashboard, Session List, Session, Profile).
- **Active Surveys List**: Table showing Title, Display Locations, Status (Active toggle), and Actions:
  - **View Survey**: Dynamic popup rendering a preview of questions and inputs.
  - **Edit Survey**: Redirects to dynamic builder page loaded with selected survey data.
  - **Delete Survey**: Interactive delete with confirmation prompt.

### 5. Security Audit Logs Tab
- **Read-Only Activity Tracker**: A table displaying Timestamp, Actor ID, Action Performed (e.g., Session Approved, Password Reset), and IP/Details.

## State Management & Transition Guide
> [!IMPORTANT]
> - **Prototype Implementation**: In this prototype, data is managed on the client side using `localStorage` (via keys `fitpad_surveys`, `fitpad_completed_surveys_<id>`, `fitpad_dismissed_surveys_<id>`).
> - **Production Implementation**: Once transitioning to the real application, developers MUST replace all `localStorage` state operations with **Vue 3 state management (Pinia)**. Pinia should manage the central store of active surveys, current trainee responses, and completion flags, persisting responses securely via API calls rather than local browser storage.

## Data Requirements (API)
- `GET /api/admin/plans`, `POST /api/admin/plans`, `DELETE /api/admin/plans/{id}`
- `GET /api/admin/exercises`, `POST /api/admin/exercises` (multipart/form-data for media), `DELETE /api/admin/exercises/{id}`
- `GET /api/admin/users`, `POST /api/admin/users` (Admin creation)
- `GET /api/admin/surveys`, `POST /api/admin/surveys`, `PUT /api/admin/surveys/{id}`, `DELETE /api/admin/surveys/{id}`
- `POST /api/surveys/{id}/respond` (Client response submission)
- `GET /api/admin/audit-logs`

