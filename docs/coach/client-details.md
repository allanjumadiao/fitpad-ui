# Coach Specification: Client Details

## Overview
A comprehensive dashboard for a coach to view the progress, metrics, and session balance of a specific assigned client.

## Key Features & UI Components
- **Client Header**: Name, Goal (e.g., Weight Loss), Gender, Birthday, Age, Height, and general schedule.
- **Session Balance Widget**: Displays the number of remaining sessions left in the client's package (Total - Used).
- **InBody Assessments Section**:
  - Upload Action: Upload Image/PDF scans.
  - File List: Table of previously uploaded InBody assessments with "View Result" buttons.
  - Coach Remarks: A large text area for the coach to write notes or evaluations regarding the client's latest results.
- **Actions**: "Edit Client Info" button routing to the Edit screen, "Save Assessment Data".
- **Workout History Section**:
  - Search bar to filter sessions by name, workout type, or comments in real-time.
  - Interactive table displaying session date, name, type, and remarks summary.
  - **View Workout Modal**: Shows session metadata, bulleted **Warm Up** list, **Main Set** exercises rendered as detailed cards, and formatted **Coach Remarks**.
  - **Edit Workout Modal**: Enables updating workout type, session date and time (via a native `datetime-local` picker), warm-up routines, **Main Set** exercise list (via a dynamic block editor with inputs for Exercise Name, Sets, and Details / Reps / Weight, plus Add/Trash actions), and coach remarks.

## Data Requirements (API)
- `GET /api/coach/clients/{id}` - Fetch client details, biometrics, and session balance.
- `GET /api/coach/clients/{id}/assessments` - Fetch uploaded InBody files.
- `POST /api/coach/clients/{id}/assessments` - Upload a new assessment.
- `PUT /api/coach/clients/{id}/remarks` - Save coach notes.
- `GET /api/coach/clients/{id}/workouts` - Fetch workout logs history.
- `PUT /api/coach/clients/{id}/workouts/{workoutId}` - Update session notes (Warm Up, Main Set array, Remarks, Date/Time).

