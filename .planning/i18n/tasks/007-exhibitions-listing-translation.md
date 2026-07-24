# TASK-007: Exhibitions Listing Page Translation

- **Type:** Task
- **State:** [*] Completed (not build-verified — node_modules incomplete, see work-summary.md)
- **Area:** Frontend / Content - Exhibitions

## Description

Translate `Exhibitions.jsx` (the listing page), including links to each
detail page which must resolve to the current active language.

## Specs

- Extract listing text (titles, dates, blurbs) into the `exhibitions`
  namespace under an `exhibitions.listing.*` key path, separate from each
  detail page's own keys (see [[008-exhibition-detail-pages-translation]]).
- Links to detail pages use the locale-aware path pattern from
  [[002-locale-prefixed-routing]].

## Files

| Path | Status | Notes |
|---|---|---|
| `src/Exhibitions/Exhibitions.jsx` | * | |
| `src/locales/en/exhibitions.json` | * | `listing` keys |
| `src/locales/fr/exhibitions.json` | * | `listing` keys |

## Acceptance

- [ ] Manual verification: listing renders correct language strings and
      correct locale-prefixed links to each exhibition
- [ ] i18n: full coverage of listing text
- [ ] WCAG 2.1 AA: heading/landmark structure unchanged; links remain
      distinguishable and operable
- [ ] Explicit error handling/logging: N/A (static content)
