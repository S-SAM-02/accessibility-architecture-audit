Accessibility Baseline & Repository Architecture Audit

A setup-ready full-stack foundation produced from an audit of the public National Portal of India (`india.gov.in`). The repository separates client, server, documentation, and tests and includes a small first vertical slice: a government-service search request flowing from the client to the server API.

Repository tree

```text
client/       Browser UI and client tests
server/       API and server tests
tests/        Cross-layer test notes
docs/         Audit, architecture, evidence and screenshots
```

Requirements
Node.js 20+ and npm 10+.

Local setup

```bash
npm install
npm run dev
```

Client: http://localhost:5173
API health: http://localhost:3001/health

Run tests:

```bash
npm test
```

Build:

```bash
npm run build
```

First vertical feature slice
The sample feature is **Find a government service**. The client accepts a keyword, sends `GET /api/services?query=...`, and renders accessible results or an error state. The server owns validation and service data access. This boundary can later be replaced with a database or upstream government-services integration without coupling the UI to persistence.

Audit
See [`docs/audit-report.md`](docs/audit-report.md) and [`docs/architecture.md`](docs/architecture.md).

Evidence note
The report distinguishes web-observable evidence from checks that require a real browser run. Lighthouse scores and keyboard-pass screenshots must be generated locally in Chrome DevTools against the live target and placed in `docs/screenshots/`; no synthetic scores are claimed.
