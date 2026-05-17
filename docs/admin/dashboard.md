# Admin Specification: Dashboard

## Overview
The Admin Dashboard provides a high-level system overview, highlighting key performance metrics and offering immediate access to the most common administrative actions.

## Key Features
- **System Metrics**: Live tracking of total active coaches, total active clients, and sessions pending approval.
- **Attention Required Alerts**: Highlights urgent tasks, such as completed sessions waiting for admin audit/approval.
- **Quick Actions**: Prominent shortcuts to register a new coach or client directly from the dashboard.

## UI Components
- **Header**: Shows current System Admin details (Name, ID).
- **Key Metrics Grid**:
  - Total Active Coaches widget.
  - Total Active Clients widget.
  - Pending Approvals widget (with pulse animation for attention).
- **Quick Actions Section**:
  - "Register New Coach" card/button.
  - "Register New Client" card/button.

## Data Requirements (API)
- `GET /api/admin/dashboard/metrics` - Fetch aggregated totals for coaches, clients, and pending sessions.
