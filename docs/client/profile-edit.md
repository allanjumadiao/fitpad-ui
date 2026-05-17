# Client Specification: Edit Profile

## Overview
This screen allows a client to update their personal details, biometrics, and fitness goals.

## Key Features & UI Components
- **Avatar & Cover Edit**: Upload buttons to change the profile picture and cover photo.
- **Basic Details Form**: First Name, Last Name, Email Address.
- **Biometrics Form**: 
  - Date of Birth (Age auto-calculates on change).
  - Height (cm).
  - Weight (kg).
- **Fitness Goal**: Dropdown to select primary goal (Weight Loss, Muscle Gain, Endurance, Flexibility, etc.).
- **Actions**: Save Profile Changes, Cancel.

## Data Requirements (API)
- `GET /api/client/profile` - Pre-fill existing data.
- `PUT /api/client/profile` - Save updated profile details.
- `POST /api/client/profile/media` - Upload avatar/cover (multipart/form-data).
