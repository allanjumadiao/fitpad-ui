# Authentication Specifications

## Overview
The Fitpad platform has three distinct login portals for the Admin, Coach, and Client roles. All portals share a similar centered card layout with role-specific branding and identifiers.

## Key Features & UI Components
- **Role Identification**: Distinct headers and badges to identify which portal is being accessed (e.g., "Administration Coaching System", "Coach Portal", "Trainee Access").
- **Form Fields**:
  - **Admin Login**: Admin ID (e.g. ADM-001) & Password.
  - **Coach Login**: Coach ID & Password.
  - **Client Login**: Email Address & Password.
- **Interactions**:
  - Toggle Password Visibility (Eye icon).
  - Forgot Password links.
  - Client-side validation (minimum 8 character password).
  
## Data Requirements (API)
- `POST /api/auth/admin/login` - Authenticate admin credentials.
- `POST /api/auth/coach/login` - Authenticate coach credentials.
- `POST /api/auth/client/login` - Authenticate client credentials.
- `POST /api/auth/forgot-password` - Trigger reset password email flow.
