# Coach Specification: Client List & Scheduling

## Overview
The central hub for a coach to view all assigned trainees, track their session balances, and manage week-by-week session schedules.

## Key Features & UI Components
- **Filters & Search**: Search by Name/ID. Filter by Session Balance (Zero, Low, Active) and Schedule Status (Upcoming, None).
- **Incoming Sessions for Today**: Lists scheduled sessions for the current day with client info, time, and session goal.
   - Actions: **No Show** (marks client as absent, deducting balance), **Cancel Session** (cancels scheduled workout), and **Accept Cancellation** (accepts client's cancellation request).
  - Confirmation Modal: Triggered by No Show / Cancel Session (requires coach remarks/reason) or Accept Cancellation (displays client reason for confirmation).
- **Data Grid**:
  - Columns: Client Detail (Name, Recent Activity), PT ID, Status Summary (T/U/R counts styled as badges), Account Status, Validity Period, Actions.
  - **Validity Period Rules**:
    - Displays plan validity (e.g. `1 Month; 28 Days Left`).
    - The deduction of validity days starts only when the client schedules/attends their first session.
    - If the account status is `Freezed` or `Pending`, the validity days are paused (no days are deducted).
- **Actions**: "View Details" (Goes to Client Details) and "View Schedule" (Opens Schedule Modal).
- **Client Schedule Modal**:
  - Week navigator (Previous, Current, Next).
  - Displays a grid for the week showing Completed sessions (clickable to view notes) and Upcoming sessions.
  - "Add New" and "Copy Last Week" actions.
- **Workout History Modal**: A sub-modal opened by clicking a completed session to read or update the workout notes.

## Data Requirements (API)
- `GET /api/coach/clients` - List assigned clients with aggregate stats.
- `GET /api/coach/clients/{id}/schedule?week={date}` - Fetch schedule data for a specific week.
- `POST /api/coach/clients/{id}/schedule` - Add a new session to the calendar.
- `POST /api/coach/clients/{id}/schedule/copy` - Copy previous week's schedule to current.
- `PUT /api/coach/session/notes` - Update workout history notes.
- `POST /api/coach/session/no-show` - Log a client no-show for today's session. Requires `session_id` and `remarks`.
- `POST /api/coach/session/cancel` - Cancel a scheduled session today. Requires `session_id` and `reason`.
- `POST /api/coach/session/cancel/accept` - Approve a client's cancellation request. Requires `session_id`.
