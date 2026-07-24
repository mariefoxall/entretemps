# TASK-009: Contact Page Translation

- **Type:** Task
- **State:** [*] Completed (not build-verified — node_modules incomplete, see work-summary.md)
- **Area:** Frontend / Content - Contact

## Description

Translate `Contact.jsx`'s static text (headings + mailto prompt). Note: this
page has no form or EmailJS integration in code — EmailJS env vars/templates
in `.env` are only referenced from `Shop.jsx` (out of scope, route
currently commented out), so there is no EmailJS-facing string to translate
here.

## Specs

- Extract heading text ("Dites bonjour/hi", "Avez-vous des questions?",
  "Voulez-vous soumettre votre dossier pour considération?", etc.) into the
  `contact` namespace as separate FR/EN keys.
- `mailto:` link and email address stay identical across languages; only the
  surrounding prompt text is translated.

## Files

| Path | Status | Notes |
|---|---|---|
| `src/Contact/Contact.jsx` | * | |
| `src/locales/en/contact.json` | * | |
| `src/locales/fr/contact.json` | * | |

## Acceptance

- [ ] Manual verification: page renders correct language strings; mailto
      link unaffected by language switch
- [ ] i18n: full coverage, no hardcoded text remaining
- [ ] WCAG 2.1 AA: heading structure unchanged; image `alt` text
      preserved/updated per language
- [ ] Explicit error handling/logging: N/A (static content)
