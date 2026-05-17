# Client Specification: Registration Success

## Overview
A transitional screen displayed immediately after a client successfully submits their registration form.

## Key Features & UI Components
- **Success Graphic**: An animated "Mail" icon.
- **Messaging**: "You're Almost Done!" instructing the user to check their email for an activation link.
- **Important Note**: Warns that the link expires in 24 hours and to check spam folders.
- **Actions**: 
  - "Return to Login" button.
  - "Resend Verification Link" quick action.

## Data Requirements (API)
- `POST /api/register/resend-verification` - Resend the email if the user clicks the resend action.
