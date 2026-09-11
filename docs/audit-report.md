# Accessibility Baseline & Architecture Audit

**Target:** National Portal of India — https://www.india.gov.in/
**Audit date:** 11 September 2026
**Target type:** Public-facing government information/service portal

## Scope and method
The target was reviewed as a public service portal using current publicly accessible page content and a keyboard/accessibility-oriented inspection plan. The site explicitly provides accessibility tools such as contrast adjustment, text-size controls, text spacing, line height, hidden images, a large cursor and screen-reader support on its Help page. The portal states it is developed and maintained by NIC under MeitY. [Sources: official India Portal home and Help pages.]

**Important evidence boundary:** this report does not invent Lighthouse scores. A local Chrome Lighthouse run should be attached as `docs/screenshots/lighthouse.png` and its numeric scores copied into the table below. Likewise, keyboard-pass screenshots should be captured locally. Web-observable findings below are factual observations from the published page structure/content and are separated from browser-only measurements.

## Five findings

### A1 — Large, highly dynamic home page increases navigation burden
**Priority: P1**

The home page exposes many content areas: online services, information categories, schemes, news/press releases, spotlight, directories and Explore India. The page also contains dynamically loaded sections and a large amount of repeated navigation/content. For keyboard and screen-reader users, a long interactive surface can create substantial traversal cost unless headings, landmarks and skip mechanisms are consistently exposed.

**Remediation:** provide a strong skip-to-content link, a clear landmark hierarchy, consistent heading order, and ensure dynamically inserted content does not unexpectedly move focus.

### A2 — Search is a critical interaction and should have explicit accessible status/error behavior
**Priority: P1**

The home page presents a prominent search control and multiple service discovery paths. Search is central to reaching government services. Search results/loading/error changes should be announced without forcing users to infer that the page changed.

**Remediation:** explicit label, programmatic association, accessible loading/result status, useful empty/error messages, and keyboard-operable controls.

### A3 — Multiple interactive discovery patterns increase consistency risk
**Priority: P1**

The portal combines search, category browsing, service cards, trending searches, scheme discovery and directory links. Each pattern needs consistent focus treatment, accessible names, target sizing and predictable keyboard behavior.

**Remediation:** establish reusable accessible components and test them with keyboard navigation and automated accessibility checks.

### A4 — Image-heavy editorial areas require disciplined alternative-text review
**Priority: P2**

The home page contains multiple editorial/promotional image areas and cards. The page exposes image content such as Explore India and spotlight material. Decorative versus informative imagery must be distinguished so screen-reader users receive equivalent information without redundant announcements.

**Remediation:** audit every image: meaningful `alt` for informative images, empty `alt` for decorative images, and avoid embedding essential text only inside images.

### A5 — Accessibility features are distributed across the experience and need regression testing
**Priority: P2**

The official Help page documents controls for contrast, text size, spacing, line height, hiding images, a large cursor and screen-reader support. Because these controls affect presentation and interaction, they should be regression-tested across key pages and states rather than treated as isolated utilities.

**Remediation:** automate a small matrix of core pages and settings; manually verify keyboard focus, zoom/reflow and screen-reader announcements after major releases.

## Lighthouse evidence

Run in Chrome DevTools → Lighthouse → Accessibility on the target home page. Record the result here:

| Metric | Value |
|---|---|
| Accessibility | **Fill from local Lighthouse run** |
| Best Practices | **Fill from local Lighthouse run** |
| Performance | **Fill from local Lighthouse run** |
| SEO | **Fill from local Lighthouse run** |

Required artifact: `docs/screenshots/lighthouse.png`.

## Keyboard-only evidence

Perform the following with the mouse/trackpad unused:
1. Start at the page top and press Tab repeatedly.
2. Confirm focus is always visible.
3. Identify whether a skip-to-content mechanism appears.
4. Operate search and major navigation controls with Enter/Space.
5. Verify no keyboard trap occurs.
6. Verify focus moves predictably after dynamic updates.

Required artifacts: `docs/screenshots/keyboard-navigation-01.png` through `keyboard-navigation-03.png`.

## Remediation order
P1 items should be addressed first because they affect discovery and completion of public services. P2 items should follow as component-level accessibility hardening and regression coverage.

## Official references
- India Portal home: https://www.india.gov.in/
- India Portal Help/accessibility tools: https://www.india.gov.in/help
- National Government Services Portal: https://services.india.gov.in/service/listing
