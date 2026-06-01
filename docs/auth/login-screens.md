# Authentication Specifications

## Overview
The Fitpad platform has three distinct login portals for the Admin, Coach, and Client roles. All portals share a similar centered card layout with role-specific branding and identifiers.

## Key Features & UI Components
- **Role Identification**: Distinct headers and badges to identify which portal is being accessed (e.g., "Administration Coaching System", "Coach Portal", "Client Portal").
- **Form Fields**:
  - **Admin Login**: Admin ID (e.g. FITPAD-001) & Password (minimum 8 characters).
  - **Coach Login**: Coach ID & PIN Number (exactly 6 digits, numeric only).
  - **Client Login**: PT ID & PIN Number (exactly 6 digits, numeric only).
- **Interactions**:
  - Toggle Password/PIN Visibility (Eye icon).
  - Forgot Password / Forgot PIN links (redirects to change-pin page for coach/client).
  - Client-side validation:
    - Admin Password: minimum 8 characters.
    - Coach/Client PIN: exactly 6 numeric digits (strictly numbers-only typed).
  
## Data Requirements (API)
- `POST /api/auth/admin/login` - Authenticate admin credentials.
- `POST /api/auth/coach/login` - Authenticate coach credentials.
- `POST /api/auth/client/login` - Authenticate client credentials.
- `POST /api/auth/forgot-pin` - Trigger reset PIN flow.
