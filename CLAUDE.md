# Fox Insurance Claude Code Demo

## Project purpose
This is a deliberately small vanilla JavaScript application for demonstrating Claude Code delegation patterns in class.

## Business rules
- Products: Auto, Home, Travel.
- Annual premium = coverage × product rate × risk multiplier.
- Bundle discount = 10% off the calculated premium.
- Coverage must be a positive number.

## Engineering rules
- Keep the app framework-free.
- Use ES modules.
- Use Node's built-in test runner; do not add dependencies unless explicitly requested.
- Run `npm test` after code changes.
- Prefer small, focused edits.
- When multiple agents work in parallel, assign non-overlapping files whenever possible.
