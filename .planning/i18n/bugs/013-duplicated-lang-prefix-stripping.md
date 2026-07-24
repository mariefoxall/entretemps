# TASK-013 - Duplicated lang-prefix stripping logic

- **Type:** Issue
- **State:** [x] Done
- **Area:** frontend
- **Severity:** 🟡 Clean Code
- **Description:** The "/:lang prefix" path-stripping logic (`pathname.split("/").slice(2).join("/")`) is duplicated independently in `App.jsx`'s `LanguageLayout` invalid-lang redirect and in `LanguageToggle.jsx`'s `buildPathForLanguage`.
- **Specs:** Extract a shared `stripLangPrefix(pathname)` helper (e.g. `src/i18n/paths.js`) and use it in both `src/App.jsx` (`LanguageLayout`'s invalid-lang redirect) and `src/LanguageToggle/LanguageToggle.jsx` (`buildPathForLanguage`), so the path-parsing rule has a single source of truth.
- **Related:** TASK-002, TASK-004
- **Files:**
  - `src/i18n/paths.js*` — new shared helper
  - `src/App.jsx*` — use shared helper in `LanguageLayout`
  - `src/LanguageToggle/LanguageToggle.jsx*` — use shared helper in `buildPathForLanguage`
- **Acceptance:**
  - [x] Both call sites use the same shared helper function.
  - [x] No behavior change (manual verification: invalid `:lang` redirect and toggle navigation still work identically) — not build-verified, see work-summary.md.
  - [x] No new lint errors introduced (not build-verified — node_modules incomplete).
