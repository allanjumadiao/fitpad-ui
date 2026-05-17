# Coach Specification: Client List & Scheduling

## Overview
The central hub for a coach to view all assigned trainees, track their session balances, and manage week-by-week session schedules.

## Key Features & UI Components
- **Filters & Search**: Search by Name/ID. Filter by Session Balance (Zero, Low, Active) and Schedule Status (Upcoming, None).
- **Data Grid**:
  - Columns: Client Detail (Name, Recent Activity), PT ID, Sessions (Total/Used/Remaining), Status Summary (Completed vs Ongoing counts), Actions.
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
- `PUT /api/coach/sessions/{id}/notes` - Update workout history notes.
