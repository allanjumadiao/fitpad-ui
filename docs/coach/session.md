# Coach Specification: Session Tracker

## Overview
The live, interactive screen used by the coach *during* an active training session. It manages the session state and captures all workout data in real-time.

## Key Features & UI Components
- **Context Header**:
  - Client Name & ID.
  - Session tracker (e.g., Session 5 of 24).
  - Quick Reference Alert Panel (Highlights goal and critical injury warnings to keep them top-of-mind).
- **Session Control (State Machine)**:
  - **State 1 (Pending)**: "Start Session" button is disabled. Waiting for client to enter the waiting room.
  - **State 2 (Ongoing)**: Displays a pulsing "Complete" button to signal the workout is live.
- **Dynamic Session Notes**:
  - **Warm Up**: Text area block.
  - **Main Set**: A dynamic form array allowing the coach to add/remove "Exercise Blocks". Each block captures: Exercise Name, Sets, and Details/Reps/Weight.
  - **Coach Remarks**: Text area for post-session evaluation or observations.
- **Complete Session Modal**: A confirmation prompt before permanently ending the session and sending the log to Admin Review.

## Data Requirements (API)
- `GET /api/coach/session/current` - Check real-time status of the connection (to unlock the "Start" state).
- `PUT /api/coach/session/notes` - Endpoint designed for frequent auto-saving of the complex session payload (Warm Up, dynamic Main Set array, Remarks).
- `POST /api/coach/session/complete` - Finalize the session, lock the UI, and trigger the "Admin Review" status for this session ID.
