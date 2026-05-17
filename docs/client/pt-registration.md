# Client Specification: PT Registration

## Overview
This is a public-facing (or unauthenticated) registration flow where a new client signs up, selects a session package, sets their initial schedule, and is matched with an available coach.

## Key Features & UI Components
- **Multi-Step Form (Single Page)**:
  1. **Account Information**: First Name, Last Name, Email, DOB, Password, Confirm Password (with matching validation).
  2. **Select Session Plan**: Visual cards to pick 12, 24, 30, or 50 sessions.
  3. **Preferred Schedule**: Dynamic rows to add dates and start times (End time is auto-calculated +1 hr). Clicking "Find Available Coaches" triggers validation.
  4. **Available Coaches**: A dynamically revealed list of coaches matching the schedule criteria. Radio button selection. Includes error state if no coach matches.
  5. **Terms & Submission**: Checkbox to agree to Terms and Conditions (opens a scrollable modal), followed by "Complete Registration" button.

## Data Requirements (API)
- `POST /api/register/check-email` - Real-time email uniqueness check.
- `POST /api/coaches/available` - Fetch coaches matching the provided schedule slots.
- `POST /api/register` - Submit full registration payload (Account, Plan, Schedule, Coach ID).
