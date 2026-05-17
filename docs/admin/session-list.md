# Admin Specification: Session List

## Overview
The System Sessions screen provides oversight of all training sessions happening across the platform. It is a critical screen for auditing completed sessions before clients' packages are deducted.

## Key Features
- **Extensive Filtering**: Filter sessions by Search (Coach/Client), Date Range (From/To), and Status.
- **Audit & Approval Workflow**: Completed sessions require admin approval. Admins can view coach notes before approving and officially deducting the session from the client's balance.
- **Manual Session Control**: An override tool allowing admins to retroactively log a missed session or insert a manual record.
- **Force Cancel**: Ability to forcibly cancel an upcoming session.

## UI Components
- **Top Actions**: "Manual Session Control" Button.
- **Filter Bar**: Search input, Date From, Date To, Status Dropdown (Completed/Needs Approval, Approved, Upcoming, Ongoing, Cancelled).
- **Data Table**:
  - Columns: Date & Time, Coach Name, Client Name, Status, Actions.
  - Statuses have specific UI states (e.g., Yellow/Pulse for Needs Approval).
- **Audit Session Modal**:
  - Displays session meta info (Coach, Client, Date).
  - Displays Coach's submitted workout data (Main Set/Progress) and Coach Remarks.
  - "Approve Session" action.
- **Manual Session Entry Modal (Override)**:
  - Fields: Select Client, Session Date, Start Time, Admin Reason/Note.

## Data Requirements (API)
- `GET /api/admin/sessions` - Fetch list of all sessions with extensive filtering.
- `GET /api/admin/sessions/{id}/audit` - Fetch coach notes for a completed session.
- `PUT /api/admin/sessions/{id}/approve` - Approve a completed session.
- `PUT /api/admin/sessions/{id}/cancel` - Force cancel a session.
- `POST /api/admin/sessions/manual` - Insert a manual session record.
