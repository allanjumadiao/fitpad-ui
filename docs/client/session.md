# Client Specification: Session Control Screen

## Overview
This is the live "waiting room" and active session screen. It acts as the sync point between the client and the coach for a scheduled session.

## Key Features & UI Components
- **Context Header**:
  - Assigned Coach Name.
  - Session Number (e.g., Session 5 of 24).
  - Quick Reference Panel: Reminds the client of their primary goal and specific focus areas/injuries (e.g., Avoid heavy deadlifts).
- **Interactive State Machine (Central Action Area)**:
  - **State 1: Upcoming**: Shows a "Request Session" button (intended to be clickable only ~10 mins before start time).
  - **State 2: Pending**: Triggered when client clicks Request. Shows a spinning loader ("Waiting for Coach Sarah").
  - **State 3: Ongoing**: Triggered when the Coach admits the client. Displays a pulsing "Live Workout in Progress" indicator.
  - **State 4: Completed**: Triggered when the Coach ends the session. Shows a completion graphic and directs the client back to the dashboard.

## Data Requirements (API)
- `GET /api/client/session/current` - Polling endpoint (or websocket) to determine the real-time state of the scheduled session (Upcoming, Pending, Ongoing, Completed).
- `POST /api/client/session/request` - Action to transition the session from Upcoming to Pending status.
