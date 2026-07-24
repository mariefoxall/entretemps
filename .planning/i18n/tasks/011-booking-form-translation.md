# TASK-011: Booking Dialog Translation

- **Type:** Task
- **State:** [*] Completed (not build-verified — node_modules incomplete, see work-summary.md)
- **Area:** Frontend / Forms

## Description

Translate `Visit/Booking.jsx`'s MUI `Dialog` — trigger button text and
dialog title. The dialog body is a third-party Setmore `<iframe>` whose
internal language is outside this codebase's control (out of scope).

## Specs

- Extract trigger button text ("Faites un RDV pour... / Book an
  appointment...") and `DialogTitle` text into the `forms` namespace.
- `aria-labelledby`/`aria-describedby` wiring unaffected — same `id`s, just
  translated visible text.

## Files

| Path | Status | Notes |
|---|---|---|
| `src/Visit/Booking.jsx` | * | |
| `src/locales/en/forms.json` | * | |
| `src/locales/fr/forms.json` | * | |

## Acceptance

- [ ] Manual verification: trigger button and dialog title render correct
      language strings
- [ ] i18n: full coverage of in-app text; iframe content explicitly noted
      as out of scope
- [ ] WCAG 2.1 AA: dialog focus trap and `aria-labelledby`/`aria-describedby`
      behavior unaffected by translation
- [ ] Explicit error handling/logging: N/A (no form submission logic in
      this component)
