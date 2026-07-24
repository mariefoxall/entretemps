# TASK-010: Visit Page Translation

- **Type:** Task
- **State:** [*] Completed (not build-verified — node_modules incomplete, see work-summary.md)
- **Area:** Frontend / Content - Visit

## Description

Translate `Visit.jsx`'s static text. The embedded `Booking` dialog is tracked
separately in [[011-booking-form-translation]].

## Specs

- Extract hardcoded text into the `visit` namespace.

## Files

| Path | Status | Notes |
|---|---|---|
| `src/Visit/Visit.jsx` | * | |
| `src/locales/en/visit.json` | * | |
| `src/locales/fr/visit.json` | * | |

## Acceptance

- [ ] Manual verification: page renders correct language strings
- [ ] i18n: full coverage, no hardcoded text remaining
- [ ] WCAG 2.1 AA: heading structure and image `alt` text preserved/updated
      per language
- [ ] Explicit error handling/logging: N/A (static content)
