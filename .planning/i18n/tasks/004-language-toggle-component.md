# TASK-004: Language Toggle Component

- **Type:** Task
- **State:** [*] Completed (not build-verified — node_modules incomplete, see work-summary.md)
- **Area:** Frontend / Navigation

## Description

Build the FR/EN toggle control that appears at the top of every page,
per the feature request ("a toggle at the top of every page").

## Specs

- New `LanguageToggle` component rendered in `src/App.jsx`'s shared `<header>`
  alongside the logo and `Menu`, so it is visible independent of the
  mobile burger-menu's open/closed state.
- On activation: calls `i18n.changeLanguage()` (which persists to
  `localStorage` via the detector's cache configured in
  [[001-i18n-infrastructure-setup]]) and navigates to the equivalent
  `/:lang/...` path for the current route (swap the prefix, preserve the
  rest of the path) per [[002-locale-prefixed-routing]].
- Rendered as real `<button>` element(s), not links — this is a state
  change, not navigation to a new resource.
- Accessible name makes the target language explicit (not bare "FR"/"EN"
  glyphs alone), current language exposed via `aria-current="true"` (or
  equivalent) on the active option.

## Files

| Path | Status | Notes |
|---|---|---|
| `src/LanguageToggle/LanguageToggle.jsx` | + | |
| `src/LanguageToggle/LanguageToggle.css` | + | |
| `src/App.jsx` | * | render toggle in header |
| `src/locales/en/common.json` | * | toggle labels |
| `src/locales/fr/common.json` | * | toggle labels |

## Acceptance

- [ ] Manual verification: activating the EN option while on `/fr/visit`
      changes `i18n.language` to `en` and navigates to `/en/visit`; the
      toggle reflects the currently active language
- [ ] i18n: toggle's own labels sourced from the `common` namespace
- [ ] WCAG 2.1 AA: keyboard operable, visible focus indicator, accessible
      name announces language and current-state
- [ ] Explicit error handling/logging: N/A
