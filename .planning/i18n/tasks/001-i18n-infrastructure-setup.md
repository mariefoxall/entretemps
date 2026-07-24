# TASK-001: i18n Infrastructure Setup

- **Type:** Task
- **State:** [*] Completed (node_modules install pending — blocked by local network/registry access, see work-summary.md)
- **Area:** Frontend / i18n Infrastructure

## Description

Install and configure `react-i18next` with browser language detection so every
other translation task has a working `useTranslation()` / `i18n` instance to
build on.

## Specs

- Add dependencies: `i18next`, `react-i18next`, `i18next-browser-languagedetector`.
- Create `src/i18n/i18n.js`: init config with `fallbackLng: 'fr'`, detector
  order `['localStorage', 'navigator']`, `caches: ['localStorage']` (explicit
  toggle choice always overrides browser detection on return visits, per
  [[002-locale-prefixed-routing]] which reads the resolved language for
  redirects).
- Import the init module once at entry (`src/main.jsx`) so `useTranslation` is
  available app-wide without a manual `I18nextProvider` wrapper.
- Sync `document.documentElement.lang` to the active language via
  `i18n.on('languageChanged', ...)`.
- Log missing-key events in dev only (`i18next` `missingKeyHandler`); no
  console noise in production build.

## Files

| Path | Status | Notes |
|---|---|---|
| `src/i18n/i18n.js` | + | i18next init/config |
| `src/main.jsx` | * | import i18n config |
| `package.json` | * | new dependencies |

## Acceptance

- [ ] Manual verification: falls back to French when neither
      `localStorage` nor `navigator.language` match `en`/`fr`; `localStorage`
      value takes precedence over `navigator.language`
- [ ] i18n for user-facing text: N/A (infrastructure only, no strings)
- [ ] WCAG 2.1 AA: `<html lang>` reflects the active language on initial load
      and every subsequent switch
- [ ] Explicit error handling/logging: missing translation keys logged in dev
      only; production silently falls back to the key
