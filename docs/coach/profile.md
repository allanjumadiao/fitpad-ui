# Coach Specification: View Profile

## Overview
A read-only display of the coach's profile. This is the view that clients might conceptually see parts of, but in this context, it serves as a summary for the coach themselves.

## Key Features & UI Components
- **Profile Header**: Avatar, Cover Photo, Full Name, Role Badge (e.g., SENIOR COACH), Coach ID.
- **Stat Summary**: Active Clients count and Years of Experience.
- **Credentials List**: A formatted, read-only list of verified certifications.
- **Achievements List**: A timeline-style list of coach milestones and awards.
- **Security Footer**: Quick status indicating account security and a link to "Change Password".

## Data Requirements (API)
- `GET /api/coach/profile` - Fetch structured profile data to populate the view.
