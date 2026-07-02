# ADR-001: Routing

Status: Accepted

---

## Decision

React Router will be used.

Three layouts will exist.

RootLayout

AuthLayout

AppLayout

Routes

/

Splash

Welcome

Authentication

Home

Timeline

Calendar

Profile

Settings

---

## Reason

Separating layouts improves maintainability and allows authenticated and
unauthenticated pages to evolve independently.