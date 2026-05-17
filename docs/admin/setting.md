# Admin Specification: Settings

## Overview
The Settings & Security screen handles global platform configurations, categorized into four main tabs: Session Plans, Exercises, Admin Management, and Security Logs.

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

### 4. Security Audit Logs Tab
- **Read-Only Activity Tracker**: A table displaying Timestamp, Actor ID, Action Performed (e.g., Session Approved, Password Reset), and IP/Details.

## Data Requirements (API)
- `GET /api/admin/plans`, `POST /api/admin/plans`, `DELETE /api/admin/plans/{id}`
- `GET /api/admin/exercises`, `POST /api/admin/exercises` (multipart/form-data for media), `DELETE /api/admin/exercises/{id}`
- `GET /api/admin/users`, `POST /api/admin/users` (Admin creation)
- `GET /api/admin/audit-logs`
