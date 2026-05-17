# Coach Specification: Edit Profile

## Overview
Allows the coach to update their public-facing persona, structural details, and professional background.

## Key Features & UI Components
- **Media Management**: Update Avatar and Cover photo.
- **Basic Details**: Coach ID (Read-only), First Name, Last Name, Role (Junior, Senior, Master), Years of Experience, and Specializations.
- **Professional Credentials (Dynamic List)**:
  - Add/Remove capability.
  - Fields per item: Certification Name, Issue Year, Valid Until (or Details body).
- **Coach Achievements (Dynamic List)**:
  - Add/Remove capability.
  - Fields per item: Year, Title, Description (e.g., "Coach of the Month").
- **Actions**: Save Profile Changes, Cancel.

## Data Requirements (API)
- `GET /api/coach/profile/edit` - Load current profile payload including dynamic arrays.
- `PUT /api/coach/profile` - Save all changes. Requires handling arrays for credentials and achievements.
- `POST /api/coach/profile/avatar` - Handle image uploads for avatar/cover.
