# Admin Specification: Client Details

## Overview
A comprehensive administrator-facing dashboard to view a client's profile details, monitor body composition metrics through InBody scans, upload new scan reports, and audit or update their session workout logs history.

## Key Features & UI Components
- **Client Header & Profile**:
  - Trainee biometrics: Name, Birthday, Age, Height, Weight, Fitness Goal (Weight Loss / HIIT).
  - Assigned Coach details.
- **InBody Assessments Section**:
  - File List: Table of uploaded body composition scans (PDF/Image) with dates.
  - Upload Assessment Modal: Enables admins to input current metrics (Weight, Skeletal Muscle, Fat, Visceral Level, and Remarks) and upload mock file reports.
- **Workout History Section**:
  - Search bar to filter sessions by name, workout type, or comments in real-time.
  - Interactive table displaying session date, name, type, and remarks summary.
  - **View Workout Modal**: Shows session metadata, bulleted **Warm Up** list, **Main Set** exercises rendered as detailed cards, and formatted **Coach Remarks**.
  - **Edit Workout Modal**: Enables updating workout type, session date and time (via a native `datetime-local` picker), warm-up routines, **Main Set** exercise list (via a dynamic block editor with inputs for Exercise Name, Sets, and Details / Reps / Weight, plus Add/Trash actions), and coach remarks.

## Data Requirements (API)
- `GET /api/admin/clients/{id}` - Fetch client details, biometrics, and assigned coach details.
- `GET /api/admin/clients/{id}/assessments` - Fetch uploaded InBody files.
- `POST /api/admin/clients/{id}/assessments` - Upload a new assessment scan.
- `GET /api/admin/clients/{id}/workouts` - Fetch workout logs history.
- `PUT /api/admin/clients/{id}/workouts/{workoutId}` - Update session notes (Warm Up, Main Set, Remarks, Date/Time).
