# Client Specification: PT Registration

## Overview
This is a public-facing (or unauthenticated) registration flow where a new client signs up, selects a session package, chooses a coach, sets their initial schedule on an interactive availability calendar, and submits their application.

## Key Features & UI Components
- **Registration Type Toggle**:
  - **New Client**: Client fills up the form from the start.
  - **Renewal Client**: Client inputs their existing PT ID (e.g. `PT-1042`) or Email Address, and clicks "Submit Lookup" to retrieve basic account details. Valid details are auto-populated into the account fields and marked read-only (disabling input/validation constraints for name, email, DOB, and pre-populating mock PINs). The renewal client then proceeds directly to choose a plan. *(Note: Upon successful submission of a renewal registration, a new PT ID will be generated and assigned to the client.)*
- **Multi-Step Form (Single Page)**:
  1. **Account Information**: First Name, Last Name, Email, DOB, PIN Number, Confirm PIN Number (6 numeric digits, strictly numbers-only typing, with real-time matching and red outline highlights on mismatch). Disabled and read-only for renewal clients who successfully retrieve their profile. For renewal clients, the PIN fields are hidden by default. A toggle link ("Update Login PIN") is provided; clicking it reveals the inputs to allow updating their login credentials, clearing defaults and making the fields required.
  2. **Select Session Plan**: Visual cards to pick 1 (Single Session), 12 (1 Month), 24 (2 Months), 30 (3 Months), or 50 (5 Months) sessions.
  3. **Choose a Coach**: List of 4 available coaches (Sarah Adams, Marcus Reed, Elena Rostova, Coach Chen) with specialty tags, ratings, and bios. Selecting a coach dynamically triggers the calendar load.
  4. **Preferred Schedule (First Week)**:
     - Interactive availability calendar for the selected coach. Shows current and next month. Highlights available days.
     - **Multi-date Selection**: Clients can click on multiple dates to build their first-week schedule.
     - **Single Slot per Day Rule**: Enforces a maximum of 1 selected time slot per day. Selecting a different slot on the same day replaces the previous one.
     - **Sequential Selection Blocking**: Clicking a date focuses it (showing the active ring and slots panel). The client must pick a time slot for this date before clicking any other date. All other dates are disabled (dimmed to 50% opacity, non-clickable) while a date is active without a slot selected.
     - **Active Date Deselection**: Clients can click the focused date button again to cancel/deselect it, clearing its focus, re-enabling all other dates, and removing its selected slots.
     - **Automatic Summary Cleanup**: Removing a slot badge from the summary card automatically deselects its corresponding calendar date.
  5. **Terms & Submission**: Checkbox to agree to Terms and Conditions (opens a scrollable modal), followed by the "Complete Registration" button. Visible only after selecting a coach and at least one schedule slot.

## Data Requirements (API)
- `POST /api/register/check-email` - Real-time email uniqueness check.
- `GET /api/coaches` - Fetch coach list with profile details.
- `GET /api/coaches/{id}/availability` - Fetch selected coach availability settings for calendar rendering.
- `GET /api/register/lookup` - Query existing client info by PT ID or Email (for Renewal clients).
- `POST /api/register` - Submit full registration/renewal payload (Account, Plan, Schedule Slots list, Coach ID, Registration Type).
