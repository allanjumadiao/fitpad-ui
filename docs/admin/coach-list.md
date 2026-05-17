# Admin Specification: Coach List

## Overview
The Coach List screen under Directory Management allows administrators to view, manage, and onboard new coaches into the Fitpad system.

## Key Features
- **Search & Filter**: Search coaches by Name, Coach ID, or Email. Filter by Status (Active, Inactive).
- **Coach Registration**: A straightforward modal to manually register and invite a new coach to the platform.
- **Coach Management**: Quick actions to view a coach's full profile, trigger a manual password reset, or toggle their active status.

## UI Components
- **Top Actions**: "Register Coach" Button.
- **Filter Bar**: Search input and Status dropdown.
- **Data Table**:
  - Columns: Coach ID, Coach Name, Email Address, Clients (Active count), Status, Actions.
- **Register New Coach Modal**:
  - Fields: First Name, Last Name, Email Address, Temporary Password (minimum 8 chars).

## Data Requirements (API)
- `GET /api/admin/coaches` - Fetch list of coaches with search/filter queries.
- `POST /api/admin/coaches` - Register a new coach account.
- `POST /api/admin/coaches/{id}/password-reset` - Trigger password reset.
- `PUT /api/admin/coaches/{id}/status` - Toggle active/inactive status.
