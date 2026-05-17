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

## Data Requirements (API)
- `GET /api/coach/clients/{id}` - Fetch client details, biometrics, and session balance.
- `GET /api/coach/clients/{id}/assessments` - Fetch uploaded InBody files.
- `POST /api/coach/clients/{id}/assessments` - Upload a new assessment.
- `PUT /api/coach/clients/{id}/remarks` - Save coach notes.
