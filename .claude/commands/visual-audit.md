---
description: Adversarial visual audit of a running site using Playwright MCP. Finds rendering, layout, responsive, and console defects that code review misses.
argument-hint: "[url] (defaults to http://localhost:3000)"
allowed-tools: mcp__playwright__browser_navigate, mcp__playwright__browser_snapshot, mcp__playwright__browser_take_screenshot, mcp__playwright__browser_resize, mcp__playwright__browser_console_messages, mcp__playwright__browser_evaluate, mcp__playwright__browser_click, Read, Edit, Bash
---

# Visual Audit

Target: ${ARGUMENTS:-http://localhost:3000}

You are a senior QA engineer doing a BLACK-BOX visual audit. Your job is to find what is broken, not to confirm it works. Assume every page has at least one defect and prove it. Do NOT read source code during the audit phase. You are judging the rendered page like a real user, not the developer's intent.

## Phase 1 - Audit (browser only, no source)

For each route below (and any obvious primary routes you discover from the nav):
- /
- /docks  (FoxStays) or /catalog (Seatop) - skip if it does not exist
- one detail/product page
- /contact or any form page

For EACH route, do all of the following before moving on:

1. Navigate to the route.
2. Capture console messages. Log every error and warning. Hydration mismatch warnings, 404s on assets, and uncaught exceptions are HIGH severity.
3. Screenshot at desktop: resize to 1440x900, full page.
4. Screenshot at mobile: resize to 390x844, full page.
5. Run this defect checklist against BOTH screenshots and write a finding for every hit:

   Layout & overflow
   - Horizontal scroll on mobile (any element wider than the viewport). This is the most common defect - check it every time.
   - Elements overlapping or clipped (text under footer, image over text, modal behind content).
   - Content touching screen edges with no padding.
   - Broken or inconsistent vertical rhythm and spacing between sections.

   Typography
   - Wrong font rendering (fallback serif/sans instead of Manrope body / Playfair Display headings). A flash or persistent fallback is a defect.
   - Text truncated, clipped, or running off its container.
   - Unreadable contrast, especially fox-orange (#F25C1E) text or buttons on light backgrounds.

   Media & assets
   - Images not loading, distorted aspect ratio, or missing alt text.
   - Icons rendering as boxes or missing.

   Interaction & state
   - Buttons or links with no visible hover/focus state.
   - Forms: inputs misaligned, labels detached, submit visually broken.

   Responsive integrity
   - Anything that looks correct at 1440 but breaks at 390 (stacked nav, collapsed grid, squished cards).

6. Pull layout-shift and width signals with browser_evaluate where useful, e.g. flag any element where scrollWidth exceeds the viewport width.

## Phase 2 - Report

Output a single defect table, ordered by severity (HIGH / MEDIUM / LOW). For each row:
- Route + viewport (e.g. /docks @ 390)
- One-line description of the visual defect
- Suspected cause (your hypothesis as a QA engineer, not yet verified in code)
- Screenshot reference

Do NOT soften findings. If a page is clean, say so explicitly and state what you checked. End with a count: "X HIGH, Y MEDIUM, Z LOW across N routes."

## Phase 3 - Fix (only after the report, and only if I say go)

Wait for my confirmation. Then, for each defect I approve:
1. Open the relevant source, form a fix, apply it.
2. Re-run the exact navigate + resize + screenshot steps for that route and viewport.
3. Show before/after and confirm the defect is gone. Do not claim a fix without a fresh screenshot proving it.

Never mark a defect resolved based on the code change alone. The screenshot is the proof.
