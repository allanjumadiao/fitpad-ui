# Client Specification: Account Verification

## Overview
The landing page a user hits when they click the email verification link sent to their inbox.

## Key Features & UI Components
This screen dynamically renders one of two states based on the token validity:

**State 1: Successful Verification**
- Animated Checkmark icon.
- "Account Verified!" messaging indicating the account is active.
- "Log In to Your Account" primary button.

**State 2: Expired / Invalid Link**
- Animated Error (Alert) icon.
- "Link Expired" messaging.
- "Resend Verification Link" primary button.

## Data Requirements (API)
- `GET /api/verify/{token}` - Validate the token in the URL.
- `POST /api/register/resend-verification` - Resend the email (if token expired).
