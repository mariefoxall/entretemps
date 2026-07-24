# TASK-008: Exhibition Detail Pages Translation

- **Type:** Task
- **State:** [*] Completed (not build-verified — node_modules incomplete, see work-summary.md)
- **Area:** Frontend / Content - Exhibitions

## Description

Translate all 8 exhibition detail pages. Each is its own subtask since
content/length varies per exhibition; all share the same `exhibitions`
namespace, keyed by slug.

## Specs

- One key sub-tree per exhibition in `exhibitions.json`, e.g.
  `purgatory.title`, `purgatory.description`, matching the route slug
  already used in `App.jsx` (e.g. `exhibitions/purgatory-is-a-waiting-room`).
- `JardinSecret.jsx` here refers to the exhibition content page only — the
  submission form in the same folder is tracked separately in
  [[012-jardin-secret-form-translation]].

## Subtasks

- [*] 008.1 `Purgatory.jsx` (purgatory-is-a-waiting-room)
- [*] 008.2 `Doggy.jsx` (yo-doggy)
- [*] 008.3 `Depanneur.jsx` (mon-depanneur)
- [*] 008.4 `Goblet.jsx` (calisse-de-goblet)
- [*] 008.5 `Blueprints.jsx` (blueprints-of-belonging)
- [*] 008.6 `JardinSecret.jsx` (jardin-secret, content only)
- [*] 008.7 `Canicule.jsx` (canicule)
- [*] 008.8 `PrincesseCowboy.jsx` (princesse-et-cowboy)

## Translation judgment calls (not previously specified)

- Exhibition titles, artist names, and artwork title/medium attribution text
  were kept identical in both languages (they're factual/attributional data
  about the artwork, not editorial copy) — only curatorial description
  paragraphs and image `alt` text were translated.
- `Goblet.jsx`'s description is intentional franglais wordplay (a stylistic
  choice) — kept byte-identical in both `en`/`fr` namespaces rather than
  "translated," since translating it would destroy the joke.
- `Canicule.jsx` previously showed both language versions stacked with two
  separate form links + "Formulaire en français"/"Form in English" button
  labels. Collapsed to one version per active language with a generic
  "Apply"/"Postuler" label and the matching-language Google Form URL per
  locale, consistent with how every other page now behaves.
- `Blueprints.jsx`'s description previously had no English version at all;
  added one. Missing image alt-text translations were authored fresh for
  pages that had never had a French (or English) version before.

## Files

| Path | Status | Notes |
|---|---|---|
| `src/Exhibitions/Purgatory.jsx` | * | 008.1 |
| `src/Exhibitions/Doggy.jsx` | * | 008.2 |
| `src/Exhibitions/Depanneur.jsx` | * | 008.3 |
| `src/Exhibitions/Goblet.jsx` | * | 008.4 |
| `src/Exhibitions/Blueprints.jsx` | * | 008.5 |
| `src/Exhibitions/JardinSecret.jsx` | * | 008.6 |
| `src/Exhibitions/Canicule.jsx` | * | 008.7 |
| `src/Exhibitions/PrincesseCowboy.jsx` | * | 008.8 |
| `src/locales/en/exhibitions.json` | * | per-slug keys |
| `src/locales/fr/exhibitions.json` | * | per-slug keys |

## Acceptance

- [ ] Manual verification, per subtask: each page renders correct
      language strings for its slug
- [ ] i18n: full coverage across all 8 pages, no hardcoded text remaining
- [ ] WCAG 2.1 AA: heading structure and image `alt` text preserved/updated
      per language for each page
- [ ] Explicit error handling/logging: N/A (static content)
