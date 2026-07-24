# TASK-002: Locale-Prefixed Routing

- **Type:** Task
- **State:** [*] Completed (not build-verified — node_modules incomplete, see work-summary.md)
- **Area:** Frontend / Routing

## Description

Restructure `App.jsx` so every existing page is reachable at both `/en/...`
and `/fr/...`, with a single set of route/element definitions (no duplicated
`<Route>` entries per language) and sane redirects for bare/invalid paths.

## Specs

- Wrap all existing routes under a `/:lang/*` layout route; `lang` restricted
  to `en`/`fr`.
- Root `/` redirects to `/${resolvedLanguage}/` using the language resolved by
  [[001-i18n-infrastructure-setup]] (localStorage choice, else browser
  detection, else French).
- Any unprefixed legacy path (e.g. a bookmarked `/contact`) or an invalid
  `:lang` segment (e.g. `/de/contact`) redirects to the fallback-language
  equivalent rather than 404ing.
- Verify `public/_redirects` (`/* /index.html 200`) still covers the new
  prefixed paths under Netlify's SPA fallback — no change expected, confirm
  with a build/preview check.
- Same component instance renders for both language prefixes; the language
  itself comes from `i18n.language`, not from having two separate route
  definitions per page.

## Files

| Path | Status | Notes |
|---|---|---|
| `src/App.jsx` | * | route structure rewrite |
| `public/_redirects` | * | verify, adjust if needed |

## Acceptance

- [ ] Manual verification: `/fr/visit` and `/en/visit` both render the
      Visit page with the correct active language; invalid `:lang` segment
      redirects to fallback; `/` redirects correctly based on resolved
      language
- [ ] i18n: N/A (routing only, no strings)
- [ ] WCAG 2.1 AA: existing focus-management behavior on route change is
      unaffected by the added `:lang` layer (regression check)
- [ ] Explicit error handling/logging: unknown `:lang` segment redirects
      gracefully, never renders a blank/404 state
