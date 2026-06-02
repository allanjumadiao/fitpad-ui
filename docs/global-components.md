# Global UI Components

## Overview
This document outlines UI components and scripts that are applied globally across the entire Fitpad UI (Client, Coach, and Admin screens) to ensure a consistent, premium user experience.

## Global Alert Modal (`js/custom-alert.js`)

### Purpose
To provide a beautiful, on-brand replacement for the default browser `window.alert()` popup. This ensures that any system notification, error message, or confirmation feedback maintains the Fitpad design language.

### Implementation Details
- **Override Mechanism**: The script intercepts the native `window.alert` function.
- **Dynamic DOM Injection**: When `alert("Your message here")` is called anywhere in the app, the script dynamically injects a custom Tailwind CSS modal into the DOM (if it doesn't already exist) and displays the message.
- **Styling**:
  - `z-[9999]` index to ensure it always overlays other elements (including other modals).
  - Dark gray header (`bg-fitpad-gray`) with the brand yellow (`text-brand-yellow`) alert icon.
  - Smooth scale and opacity transitions.
  - A full-width "Got It" button matching the primary action button style.
- **Inclusion**: This script is automatically injected just before the closing `</body>` tag of every `.html` file across the project. No manual HTML modal code is required in the individual templates to trigger an alert.
