# Coach Specification: Change PIN

## Overview
Allows the coach to update their account PIN number for security purposes.

## Key Features & UI Components
- **Form Fields**: 
  - Current PIN Number.
  - New PIN Number.
  - Confirm New PIN Number.
- **Visibility Toggle**: Eye icon to toggle between text and hidden characters for all fields.
- **Requirements Box**: Highlights PIN rules (exactly 6 digits long, only numeric characters 0-9 allowed).
- **Actions**: Update PIN, Cancel (redirects back to profile).

## Data Requirements (API)
- `POST /api/coach/pin` - Validate current PIN and set the new one.
