# Client Specification: Profile (View)

## Overview
The Client Profile screen displays the user's personal details, biometrics, uploaded assessment documents (InBody scans), and specific remarks left by their assigned coach.

## Key Features & UI Components
- **Header Section**: Client Name, Avatar, Cover Photo, Email, and an "Edit Details" button.
- **Metrics Grid**: Displays Birthday, Auto-calculated Age, Weight, Height, and Fitness Goal.
- **InBody Assessments**: A list of uploaded PDF/Image scan files (e.g., InBody results) with "View Result" buttons.
- **Coach Remarks**: A specialized block displaying the latest feedback/notes left by their coach, including the coach's name and the date updated.
- **Security Settings**: A quick shortcut to trigger a password change process.

## Data Requirements (API)
- `GET /api/client/profile` - Fetch client details and metrics.
- `GET /api/client/assessments` - Fetch list of InBody scan files.
- `GET /api/client/coach-remarks` - Fetch latest remarks from the assigned coach.
