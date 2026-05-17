# Coach Specification: Change Password

## Overview
Allows the coach to update their account password for security purposes.

## Key Features & UI Components
- **Form Fields**: 
  - Current Password.
  - New Password.
  - Confirm New Password.
- **Visibility Toggle**: Eye icon to toggle between text and password types for all fields.
- **Requirements Box**: Highlights password rules (8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special character).
- **Actions**: Update Password, Cancel.

## Data Requirements (API)
- `POST /api/coach/password` - Validate current password and set the new one.
