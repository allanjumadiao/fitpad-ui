# Client Specification: Dashboard

## Overview
The Client Dashboard serves as the main landing page after a client logs in. It provides an immediate snapshot of their training progress, upcoming schedule, and assigned coach.

## Key Features & UI Components
- **Coach Info Widget**: Displays the assigned coach's name, profile picture, and a quick link to view their full profile.
- **Session Balance Widget**: Shows the number of sessions remaining out of the total package (e.g., 5 of 24 sessions used). Includes a **Validation Period** section that displays the remaining days of validity (based on the session package duration, e.g., 1 month for 12 sessions). The validation countdown starts from the client's 1st session.
- **Next Schedule Widget**: Highlights the date and time of the next upcoming session.
- **Navigation**: Responsive navigation (Desktop Sidebar and Mobile Bottom Navigation).

## Data Requirements (API)
- `GET /api/client/dashboard` - Fetches aggregated dashboard data including active session count, validation period details (total duration, days remaining), assigned coach summary, and next scheduled session timestamp.
