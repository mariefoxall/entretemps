# TASK-012: Jardin Secret Submission Form Translation

- **Type:** Task
- **State:** [*] Completed (not build-verified — node_modules incomplete, see work-summary.md)
- **Area:** Frontend / Forms

## Description

Translate `JardinSecret-form.jsx`'s label, placeholder, submit button,
success message, and disclaimer text (currently stacked FR/EN). Add a
user-facing error message for the submit failure path, which today only
logs to console (`console.warn`) with no feedback shown to the visitor.

## Specs

- Extract label, `placeholder`, submit button, success message, and
  `extra-details` disclaimer text into the `forms` namespace.
- Add a translated, user-visible error state (e.g. rendered alongside the
  existing `success` state) shown when `addSecretToDB` rejects, replacing
  the current silent `console.warn("oops")`-only failure path.
- `maxLength={500}` / "Maximum 500 characters" copy translated but the
  numeric limit itself unchanged.

## Files

| Path | Status | Notes |
|---|---|---|
| `src/Exhibitions/JardinSecret-form.jsx` | * | translation + error-state UI |
| `src/locales/en/forms.json` | * | |
| `src/locales/fr/forms.json` | * | |

## Acceptance

- [ ] Manual verification: form renders correct language strings; submit
      failure shows a translated user-facing error message (not just a
      console log)
- [ ] i18n: full coverage, no hardcoded text remaining
- [ ] WCAG 2.1 AA: error message associated with the form via
      `aria-live`/`aria-describedby` so it's announced to screen readers;
      existing `aria-describedby` on the form preserved
- [ ] Explicit error handling/logging: submit failure surfaces a
      translated user-facing message in addition to the existing dev
      console log
