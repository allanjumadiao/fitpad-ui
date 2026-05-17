# Coach Specification: Edit Client

## Overview
Allows the coach to edit a client's fundamental details, biometrics, active schedule, and append complimentary sessions.

## Key Features & UI Components
- **Personal Details Form**: PT ID (Read-only), First Name, Last Name, Gender, Birthday (Age auto-computes).
- **Schedule Overview Grid**: A visual representation of the week (Mon-Sun).
  - Coaches can click on a day to open an "Update Time" modal (Start Time, End Time).
  - Certain days can be marked as "Rest" (e.g., Friday).
- **Fitness Profile**: Height, Age (Read-only), Fitness Goal.
- **Session Management**: Displays total availed sessions and includes an "Add Free Session" button/modal to append complimentary sessions.
- **Modals**:
  - Add Free Session Modal: Input number of extra sessions.
  - Update Time Modal: Time picker for Start/End times on a specific day.

## Data Requirements (API)
- `GET /api/coach/clients/{id}/edit` - Fetch current data.
- `PUT /api/coach/clients/{id}` - Save basic profile changes.
- `PUT /api/coach/clients/{id}/schedule` - Update schedule slots.
- `POST /api/coach/clients/{id}/free-sessions` - Append complimentary sessions to the total.
