# Client Specification: Session List

## Overview
The Session List screen displays a client's complete training history (focusing primarily on completed sessions and the associated workout notes left by their coach), followed by their active session requests.

## Key Features & UI Components
- **Search & Filter Bar**:
  - Text input for searching sessions.
  - Date picker filter to quickly find sessions by a specific date.
- **Training History List**:
  - Columns: Session Number/Icon, Date & Time, Status (e.g., Completed), and Action button.
- **"View Workout" Action**: Opens a detailed modal for a specific session.
- **View Workout Modal**:
  - Displays Coach who logged it.
  - **Warm Up**: List of warmup exercises.
  - **Main Set**: Cards detailing exercises (e.g., Goblet Squats, RDLs) with Sets, Reps, and coach notes per exercise.
  - **Coach Remarks**: A dedicated block for overall feedback/encouragement for that session.

## Session Requests (Active Requests)
Located below the Training History list, this section allows clients to view and manage their pending session bookings and reschedule requests.
- **Request List**: Formatted as a list (matching the Training History UI) displaying all active requests.
- **Status Indicators**: 
  - `Pending`: Waiting for coach approval.
  - `Accepted`: Coach approved and added to schedule.
  - `Declined`: Coach declined the request.
  - `Rescheduled`: A previously scheduled session that has been requested to be moved.
- **Reschedule Modal**: Clicking "Request Reschedule" opens an in-page modal allowing the client to directly select a new Date, Start Time, and End Time to submit a modification without navigating away.

## Data Requirements (API)
- `GET /api/client/sessions` - Fetch the paginated history of client sessions.
- `GET /api/client/sessions/{id}/workout` - Fetch detailed workout data and coach remarks to populate the modal.
- `POST /api/client/requests/reschedule` - Submit a modification for an active request via the Reschedule Modal.
