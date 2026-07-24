# TASK-006: Home Page Translation

- **Type:** Task
- **State:** [*] Completed (not build-verified — node_modules incomplete, see work-summary.md)
- **Area:** Frontend / Content - Home

## Description

Translate `Home.jsx`, replacing the current stacked bilingual text (e.g.
"atelier / galerie", "studio / gallery") with real per-language strings
pulled from the `home` namespace.

## Specs

- Extract all hardcoded text into `home` namespace keys, consumed via
  `useTranslation('home')`.
- Image `alt` text translated where descriptive (not purely decorative).

## Files

| Path | Status | Notes |
|---|---|---|
| `src/Home/Home.jsx` | * | |
| `src/locales/en/home.json` | * | |
| `src/locales/fr/home.json` | * | |

## Acceptance

- [ ] Manual verification: page renders French strings when
      `i18n.language === 'fr'` and English strings when `'en'`
- [ ] i18n: full coverage, no hardcoded text remaining in the component
- [ ] WCAG 2.1 AA: translated `alt` text preserved/updated per language;
      heading structure unchanged
- [ ] Explicit error handling/logging: N/A (static content)
