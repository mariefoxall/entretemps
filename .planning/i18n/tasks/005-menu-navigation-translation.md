# TASK-005: Menu & Navigation Translation

- **Type:** Task
- **State:** [*] Completed (not build-verified — node_modules incomplete, see work-summary.md)
- **Area:** Frontend / Navigation

## Description

Translate `Menu.jsx`'s nav links and convert them from plain `<a>` tags to
locale-aware React Router `Link`s, replacing the current stacked
"expositions/exhibitions" style text with real per-language strings.

## Specs

- Replace `<a href="/exhibitions">`, `<a href="/contact">`,
  `<a href="/visit">` with `<Link to={`/${lang}/...`}>` using the active
  language from `i18n.language`/route param.
- Move nav label strings into the `common` namespace as separate FR/EN keys
  (e.g. `common.nav.exhibitions`) rather than one hardcoded slash-joined
  string.
- External shop link (`http://wastedeffort.myshopify.com`) is unaffected —
  stays a plain external `<a>`, out of scope per [[../plan.md]] (Shop route
  is currently commented out / not live).

## Files

| Path | Status | Notes |
|---|---|---|
| `src/Menu/Menu.jsx` | * | Link + translated labels |
| `src/locales/en/common.json` | * | nav labels |
| `src/locales/fr/common.json` | * | nav labels |
| `src/App.jsx` | * | header logo alt + home link label also translated (`common` namespace) |

## Acceptance

- [ ] Manual verification: nav renders correct label and `to` path for
      both languages; existing `aria-*` behavior (menu open/close,
      `aria-expanded`, `aria-hidden`, `inert`) is unaffected
- [ ] i18n: full coverage of all nav labels, no hardcoded FR/EN string left
      in the component
- [ ] WCAG 2.1 AA: keyboard/screen-reader behavior of the menu unchanged;
      links remain distinguishable and operable
- [ ] Explicit error handling/logging: N/A
