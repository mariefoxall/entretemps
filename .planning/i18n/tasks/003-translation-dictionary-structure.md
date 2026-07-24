# TASK-003: Translation Dictionary Structure

- **Type:** Task
- **State:** [*] Completed (not build-verified — node_modules incomplete, see work-summary.md)
- **Area:** Frontend / i18n Infrastructure

## Description

Establish the `locales` folder and namespace convention that every content
translation task ([[006-home-page-translation]] through
[[012-jardin-secret-form-translation]]) will populate.

## Specs

- One JSON file per namespace per language: `src/locales/en/<namespace>.json`,
  `src/locales/fr/<namespace>.json`.
- Namespaces: `common` (nav/menu/toggle/shared strings), `home`,
  `exhibitions` (listing + all 8 detail pages, keyed by exhibition slug, e.g.
  `purgatory.title`), `contact`, `visit`, `forms` (Booking dialog + Jardin
  Secret submission form).
- Nested key convention by page section, e.g. `home.hero.title`.
- A lint/test step asserts the EN and FR files for a namespace have identical
  key sets, so a translation can never silently go missing on one side.

## Files

| Path | Status | Notes |
|---|---|---|
| `src/locales/en/common.json` | + | |
| `src/locales/fr/common.json` | + | |
| `src/locales/en/home.json` | + | |
| `src/locales/fr/home.json` | + | |
| `src/locales/en/exhibitions.json` | + | listing + 8 detail pages |
| `src/locales/fr/exhibitions.json` | + | listing + 8 detail pages |
| `src/locales/en/contact.json` | + | |
| `src/locales/fr/contact.json` | + | |
| `src/locales/en/visit.json` | + | |
| `src/locales/fr/visit.json` | + | |
| `src/locales/en/forms.json` | + | Booking + Jardin Secret form |
| `src/locales/fr/forms.json` | + | Booking + Jardin Secret form |
| `src/i18n/i18n.js` | * | wired all 12 files as static resource bundles, `ns`/`defaultNS` config |

## Acceptance

- [ ] Manual verification: EN/FR files for each namespace have identical
      key sets (spot-check, no automated parity check)
- [ ] i18n: this task establishes the dictionaries themselves — N/A further
- [ ] WCAG 2.1 AA: N/A (data files only)
- [ ] Explicit error handling/logging: N/A
