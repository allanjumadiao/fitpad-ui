# Client Specification: PT Registration

## Overview
This is a public-facing (or unauthenticated) registration flow where a new client signs up, selects a session package, chooses a coach, sets their initial schedule on an interactive availability calendar, and submits their application.

## Key Features & UI Components
- **Multi-Step Form (Single Page)**:
  1. **Account Information**: First Name, Last Name, Email, DOB, PIN Number, Confirm PIN Number (6 numeric digits, strictly numbers-only typing, with real-time matching and red outline highlights on mismatch).
  2. **Select Session Plan**: Visual cards to pick 12 (1 Month), 24 (2 Months), 30 (3 Months), or 50 (5 Months) sessions.
  3. **Choose a Coach**: List of 4 available coaches (Sarah Adams, Marcus Reed, Elena Rostova, Coach Chen) with specialty tags, ratings, and bios. Selecting a coach dynamically triggers the calendar load.
  4. **Preferred Schedule**: Interactive availability calendar for the selected coach. Shows the current and next month. Highlights available days (e.g. Sarah on Mon/Wed/Fri, Marcus on Tue/Thu/Sat). Clicking an available date shows hourly slots. Selecting a slot adds it to a sorted summary badge list. Disables past dates.
  5. **Terms & Submission**: Checkbox to agree to Terms and Conditions (opens a scrollable modal), followed by the "Complete Registration" button. Visible only after selecting a coach and at least one schedule slot.

## Data Requirements (API)
- `POST /api/register/check-email` - Real-time email uniqueness check.
- `GET /api/coaches` - Fetch coach list with profile details.
- `GET /api/coaches/{id}/availability` - Fetch selected coach availability settings for calendar rendering.
- `POST /api/register` - Submit full registration payload (Account, Plan, Schedule Slots list, Coach ID).
