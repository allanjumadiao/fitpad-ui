# Admin Specification: Client Details

## Overview
A comprehensive administrator-facing dashboard to view a client's profile details, monitor body composition metrics through InBody scans, upload new scan reports, and audit their session workout logs history.

## Key Features & UI Components
- **Client Header & Profile**:
  - Trainee biometrics: Name, Birthday, Age, Height, Weight, Fitness Goal (Weight Loss / HIIT).
  - Assigned Coach details.
  - **Coach Transfer Modal**: Enables reassigning the client to an alternative coach (selection list of other available coaches), selecting a reason category (Scheduling Conflict, Client Preference, Coach Request, Skillset Match, Other), and adding remarks. Upon transferring, any future existing scheduled sessions will be automatically cancelled, and the client must be plotted on a new schedule.
  - **Add Free Session Modal**: Allows manual crediting of free sessions (reason + optional remarks) to update total and remaining session balances.
- **InBody Assessments Section**:
  - File List: Table of uploaded body composition scans (PDF/Image) with dates.
  - Upload Assessment Modal: Enables admins to input current metrics (Weight, Skeletal Muscle, Fat, Visceral Level, and Remarks) and upload mock file reports.
- **Workout History Section**:
  - Search bar to filter sessions by name, workout type, or comments in real-time.
  - Interactive table displaying session date, name, type, and remarks summary.
  - **View Workout Modal**: Shows session metadata, bulleted **Warm Up** list, **Main Set** exercises rendered as detailed cards, and formatted **Coach Remarks**.

## Data Requirements (API)
- `GET /api/admin/clients/{id}` - Fetch client details, biometrics, and assigned coach details.
- `POST /api/admin/clients/{id}/transfer` - Transfer a client to a new coach.
- `GET /api/admin/clients/{id}/assessments` - Fetch uploaded InBody files.
- `POST /api/admin/clients/{id}/assessments` - Upload a new assessment scan.
- `GET /api/admin/clients/{id}/workouts` - Fetch workout logs history.
