# Client Specification: Session List

## Overview
The Session List screen displays a client's complete training history, focusing primarily on completed sessions and the associated workout notes left by their coach.

## Key Features & UI Components
- **Data Table / List**:
  - Columns: Session Number/Icon, Date & Time, Status (e.g., Completed), and Action button.
- **"View Workout" Action**: Opens a detailed modal for a specific session.
- **View Workout Modal**:
  - Displays Coach who logged it.
  - **Warm Up**: List of warmup exercises.
  - **Main Set**: Cards detailing exercises (e.g., Goblet Squats, RDLs) with Sets, Reps, and coach notes per exercise.
  - **Coach Remarks**: A dedicated block for overall feedback/encouragement for that session.

## Data Requirements (API)
- `GET /api/client/sessions` - Fetch the paginated history of client sessions.
- `GET /api/client/sessions/{id}/workout` - Fetch detailed workout data and coach remarks to populate the modal.
