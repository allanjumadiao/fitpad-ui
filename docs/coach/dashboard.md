# Coach Specification: Dashboard

## Overview
The main landing page for a coach, providing a snapshot of their day, active client statistics, and full calendar management capabilities.

## Key Features & UI Components
- **Top Stats**: Displays Active Clients count with a trend indicator (e.g., +3 since last month).
- **Quick Action**: "Register New Client" button to quickly jump to client creation.
- **Daily Schedule List**: A chronological, easy-to-read list of today's sessions, showing Time, Client Name, Goal, Session Type, and Status (Confirmed, Pending, Manual Log).
- **Full Calendar Modal**: 
  - A weekly grid view (Monday-Sunday, time slots from 07:00 AM to 10:00 PM).
  - Highlights assigned client slots and available slots.
  - Clicking any slot opens the "Modify Slot" modal.
- **Modify Slot Modal**: Assign or remove a client from a specific day/time slot.

## Data Requirements (API)
- `GET /api/coach/dashboard` - Fetch stats and the immediate daily schedule list.
- `GET /api/coach/calendar?week={date}` - Fetch the full weekly calendar grid data.
- `POST /api/coach/calendar/slot` - Assign or modify a client in a specific time slot.
