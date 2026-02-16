# Specification

## Summary
**Goal:** Update Gen 4 and Gen 5 Mgp licence validation and UI text to require the exact `Mgp-` prefix followed by alphanumeric characters.

**Planned changes:**
- Update `frontend/src/lib/mgp.ts` validation to accept only `Mgp-` + one or more letters/numbers, and update the corresponding error message text.
- Update `frontend/src/pages/Gen4ElcOptions.tsx` to use “Mgp licence” wording and show `Mgp-` format in title/description/label/placeholder/error.
- Update `frontend/src/pages/Gen5Options.tsx` to use “Mgp licence” wording and show `Mgp-` format in title/description/label/placeholder/error.

**User-visible outcome:** Users entering an Mgp licence in Gen 4 or Gen 5 will be prompted to use the `Mgp-` prefix and can enter a licence containing letters and/or numbers; invalid formats are rejected with an updated, accurate error message.
