# Client Specification: Coach View Profile

## Overview
This screen allows a client to view the detailed professional profile of a coach (typically their assigned coach), including credentials, experience, and achievements.

## Key Features & UI Components
- **Header Section**: Coach Name, ID, Title (e.g., Senior Coach), Profile Picture, and Cover Photo.
- **Coach Stats**: Key metrics such as Active Clients and Years of Experience.
- **Professional Credentials**: A list of certifications (e.g., NASM, Precision Nutrition, First Aid).
- **Coach Achievements**: Milestones and awards (e.g., Coach of the Month, 1,000+ Sessions Completed).

## Data Requirements (API)
- `GET /api/client/coaches/{id}` - Fetch coach details, credentials, and achievements.
