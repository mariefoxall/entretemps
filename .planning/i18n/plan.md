# Plan: FR/EN Bilingual Toggle

## Feature Request

Split the website into French and English versions with a toggle at the top
of every page. All pages are duplicated with a French version and an
English version.

## Architecture Decisions

- **Routing:** URL-prefixed routes, `/en/*` and `/fr/*`, via `react-router-dom`.
  Root `/` redirects to the resolved language. Chosen for SEO and shareable
  links over a same-URL/state-only toggle.
- **Content model:** Shared components + per-locale JSON translation
  dictionaries (not literally duplicated JSX files) — a layout/structure
  change only needs to happen once. This reconciles the request's "duplicated
  pages" wording with the current codebase, which already interleaves FR/EN
  text inline on shared components rather than using separate files.
- **Library:** `react-i18next` + `i18next-browser-languagedetector`.
- **Default & persistence:** Detect browser language on first visit, fallback
  to French if neither `fr` nor `en` is detected. The user's explicit toggle
  choice is persisted (`localStorage`) and overrides detection on return
  visits.
- **Scope:** All active pages/routes — Home, Exhibitions listing + all 8
  exhibition detail pages, Contact, Visit — plus the interactive forms
  (Visit/Booking dialog, Jardin Secret submission form). Shop (`Shop.jsx`,
  currently commented out / not routed) is out of scope.
- **Accessibility:** `<html lang>` updates on every language switch; the
  toggle is a real, keyboard-operable control with an accessible name that
  states the target language.

## Tasks

- [*] [TASK-001: i18n Infrastructure Setup](tasks/001-i18n-infrastructure-setup.md) (install pending)
- [*] [TASK-002: Locale-Prefixed Routing](tasks/002-locale-prefixed-routing.md) (not build-verified)
- [*] [TASK-003: Translation Dictionary Structure](tasks/003-translation-dictionary-structure.md) (not build-verified)
- [*] [TASK-004: Language Toggle Component](tasks/004-language-toggle-component.md) (not build-verified)
- [*] [TASK-005: Menu & Navigation Translation](tasks/005-menu-navigation-translation.md) (not build-verified)
- [*] [TASK-006: Home Page Translation](tasks/006-home-page-translation.md) (not build-verified)
- [*] [TASK-007: Exhibitions Listing Page Translation](tasks/007-exhibitions-listing-translation.md) (not build-verified)
- [*] [TASK-008: Exhibition Detail Pages Translation](tasks/008-exhibition-detail-pages-translation.md) (not build-verified)
  - [*] 008.1 Purgatory (purgatory-is-a-waiting-room)
  - [*] 008.2 Doggy (yo-doggy)
  - [*] 008.3 Depanneur (mon-depanneur)
  - [*] 008.4 Goblet (calisse-de-goblet)
  - [*] 008.5 Blueprints (blueprints-of-belonging)
  - [*] 008.6 JardinSecret content (jardin-secret)
  - [*] 008.7 Canicule (canicule)
  - [*] 008.8 PrincesseCowboy (princesse-et-cowboy)
- [*] [TASK-009: Contact Page Translation](tasks/009-contact-page-translation.md) (not build-verified)
- [*] [TASK-010: Visit Page Translation](tasks/010-visit-page-translation.md) (not build-verified)
- [*] [TASK-011: Booking Dialog Translation](tasks/011-booking-form-translation.md) (not build-verified)
- [*] [TASK-012: Jardin Secret Submission Form Translation](tasks/012-jardin-secret-form-translation.md) (not build-verified)

## Issues (from code review)

- [x] [TASK-013: Duplicated lang-prefix stripping logic](bugs/013-duplicated-lang-prefix-stripping.md) 🟡
- [x] [TASK-014: Unused NAMESPACES export](bugs/014-unused-namespaces-export.md) 🟡

## Suggested Order

001 → 002 → 003 (infrastructure, blocking) → 004 (toggle) → 005–012 (content,
can proceed in parallel once 001–003 land).

## Out of Scope

- `Shop.jsx` / `/shop` route — currently commented out in `App.jsx`, not a
  live page.
- Third-party iframe content (Setmore booking widget in `Booking.jsx`) — its
  internal language is not controlled by this codebase.

## Files

See [files.md](files.md) for the full aggregated file list across all tasks.
