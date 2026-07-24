# TASK-014 - Unused NAMESPACES export

- **Type:** Issue
- **State:** [x] Done
- **Area:** frontend
- **Severity:** 🟡 Clean Code
- **Description:** `NAMESPACES` is exported from `src/i18n/i18n.js` but never imported or used anywhere else in the codebase.
- **Specs:** Either inline the array directly into the `ns:` config option (dropping the export), or, if it's meant for future reuse (e.g. a key-parity test), leave a one-line comment explaining why it's exported.
- **Related:** TASK-001, TASK-003
- **Files:**
  - `src/i18n/i18n.js*` — inline `NAMESPACES` or document its intended reuse
- **Acceptance:**
  - [x] `NAMESPACES` is no longer exported — inlined directly into the `ns:` config option.
  - [x] No behavior change (manual verification: `ns` array still lists all 6 namespaces) — not build-verified, see work-summary.md.
  - [x] No new lint errors introduced (not build-verified — node_modules incomplete).
