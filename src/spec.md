# Specification

## Summary
**Goal:** Update the ThemeToggleBar by removing the cat icon, keeping a theme-colored circle indicator, and adding a Green option to the color scheme switcher.

**Planned changes:**
- Remove rendering of the cat image from ThemeToggleBar while retaining a circular indicator next to the color scheme toggle.
- Bind the circle indicator’s fill color to the active theme/color-scheme CSS variables so it updates immediately when the scheme changes and stays visible in light/dark modes.
- Extend the color scheme switcher to support Blue, Purple, and Green: update state management, localStorage persistence, UI/aria labeling, `data-color-scheme` updates, and add green CSS variable overrides for both light and dark modes in `frontend/src/index.css`.

**User-visible outcome:** The ThemeToggleBar no longer shows the cat icon; a circle next to the color scheme toggle reflects the currently selected scheme color, and the user can cycle through Blue, Purple, and Green with the selection persisting.
