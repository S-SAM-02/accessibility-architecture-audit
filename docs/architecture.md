# Architecture

## Boundaries
- **client/** owns presentation, browser interaction, accessible semantics, and client-side request state.
- **server/** owns HTTP transport, validation, business/service lookup, and future persistence/integration boundaries.
- **tests/** documents cross-layer coverage.
- **docs/** contains audit evidence and architecture decisions.

## First vertical slice
`Search form → GET /api/services → validation/filter → JSON → accessible result list`.

The client does not know how services are stored. The server does not render UI. This keeps replacement of the in-memory catalogue with a database or upstream integration localized to the server.

## Accessibility decisions
The sample UI uses a skip link, semantic landmarks, explicit labels, visible keyboard focus, an `aria-live` status region, an alert for errors, and responsive layout. These are implementation safeguards inspired by the audit findings; they are not claims about the target website.

## Local setup
Requires Node.js 20+. From repository root: `npm install`, then `npm run dev`. Run `npm test` for smoke tests.

## Next production steps
1. Add Playwright end-to-end tests.
2. Replace demo service data with a repository/data-access layer.
3. Add schema validation and structured API errors.
4. Add CI with build, unit, E2E and accessibility checks.
5. Add authentication only when a protected workflow requires it.
