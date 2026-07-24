# Files

One row per unique file touched across all tasks in this plan. Status:
`+` new, `*` modified, `-` deleted.

| Path | Status | Task IDs | Notes |
|---|---|---|---|
| `package.json` | * | 001 | new i18n dependencies |
| `src/main.jsx` | * | 001 | import i18n config |
| `src/i18n/i18n.js` | + | 001, 014 | i18next init/config; 014 will inline/document `NAMESPACES` |
| `src/App.jsx` | * | 002, 004, 013 | route restructure, render toggle in header; 013 will extract shared path helper |
| `public/_redirects` | * | 002 | verify SPA fallback covers prefixed paths |
| `src/locales/en/common.json` | + | 003, 004, 005 | |
| `src/locales/fr/common.json` | + | 003, 004, 005 | |
| `src/locales/en/home.json` | + | 003, 006 | |
| `src/locales/fr/home.json` | + | 003, 006 | |
| `src/locales/en/exhibitions.json` | + | 003, 007, 008 | listing + 8 detail-page keys |
| `src/locales/fr/exhibitions.json` | + | 003, 007, 008 | listing + 8 detail-page keys |
| `src/locales/en/contact.json` | + | 003, 009 | |
| `src/locales/fr/contact.json` | + | 003, 009 | |
| `src/locales/en/visit.json` | + | 003, 010 | |
| `src/locales/fr/visit.json` | + | 003, 010 | |
| `src/locales/en/forms.json` | + | 003, 011, 012 | Booking + Jardin Secret form |
| `src/locales/fr/forms.json` | + | 003, 011, 012 | Booking + Jardin Secret form |
| `src/LanguageToggle/LanguageToggle.jsx` | + | 004, 013 | 013 will use shared path helper |
| `src/i18n/paths.js` | + | 013 | shared `stripLangPrefix` helper |
| `src/LanguageToggle/LanguageToggle.css` | + | 004 | |
| `src/Menu/Menu.jsx` | * | 005 | Link + translated labels |
| `src/Home/Home.jsx` | * | 006 | |
| `src/Exhibitions/Exhibitions.jsx` | * | 007 | listing page |
| `src/Exhibitions/Purgatory.jsx` | * | 008 (008.1) | |
| `src/Exhibitions/Doggy.jsx` | * | 008 (008.2) | |
| `src/Exhibitions/Depanneur.jsx` | * | 008 (008.3) | |
| `src/Exhibitions/Goblet.jsx` | * | 008 (008.4) | |
| `src/Exhibitions/Blueprints.jsx` | * | 008 (008.5) | |
| `src/Exhibitions/JardinSecret.jsx` | * | 008 (008.6) | exhibition content, not the form |
| `src/Exhibitions/Canicule.jsx` | * | 008 (008.7) | |
| `src/Exhibitions/PrincesseCowboy.jsx` | * | 008 (008.8) | |
| `src/Contact/Contact.jsx` | * | 009 | |
| `src/Visit/Visit.jsx` | * | 010 | |
| `src/Visit/Booking.jsx` | * | 011 | trigger button + dialog title |
| `src/Exhibitions/JardinSecret-form.jsx` | * | 012 | translation + user-facing error state |

## Out of scope (not in this table)

- `src/Shop/Shop.jsx`, `src/Shop/Item.jsx`, `src/Shop/AuctionItems.jsx` — route
  currently commented out in `App.jsx`, not a live page.
