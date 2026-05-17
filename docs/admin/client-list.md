# Admin Specification: Client List

## Overview
The Client List screen under Directory Management provides the administrator with a comprehensive view of all clients registered in the Fitpad system.

## Key Features
- **Search & Filter**: Search clients by Name, PT ID, or Email. Filter by Status (Pending, Active, Inactive).
- **Client Registration**: A robust modal to manually register a client, select a session plan package, define their preferred schedule, and instantly match/assign them to an available coach.
- **Client Management**: Quick actions to view a client's profile, trigger a password reset email, or activate/deactivate an account.

## UI Components
- **Top Actions**: "Register Client" Button.
- **Filter Bar**: Search input and Status dropdown.
- **Data Table**:
  - Columns: PT ID, Client Name, Assigned Coach (Name & ID), Remaining Sessions (Used/Total), Status, Actions.
- **Direct Client Registration Modal**:
  - Step 1: Client Details (First Name, Last Name, Email, Temp Password).
  - Step 2: Session Plan selection (12, 24, 30, 50 sessions).
  - Step 3: Preferred Schedule (Add slots with Date, Start Time; End time is auto-calculated).
  - Step 4: Assign Coach (Finds available coaches based on schedule).

## Data Requirements (API)
- `GET /api/admin/clients` - Fetch list of clients with search/filter queries.
- `POST /api/admin/clients` - Register a new client.
- `GET /api/admin/coaches/available` - Find available coaches based on schedule parameters.
- `POST /api/admin/clients/{id}/password-reset` - Trigger password reset.
- `PUT /api/admin/clients/{id}/status` - Toggle active/inactive status.
