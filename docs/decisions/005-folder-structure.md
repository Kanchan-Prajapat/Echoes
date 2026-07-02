# ADR-005: Folder Structure

Status: Accepted

Date: 2026-07-02

---

## Context

Echoes is expected to grow into a large application.

A flat folder structure becomes difficult to maintain as features increase.

---

## Decision

The frontend will follow a feature-oriented architecture.

Example

src/

components/

features/

layouts/

hooks/

services/

store/

utils/

Each feature owns its own components,
hooks and API logic whenever possible.

---

## Consequences

Advantages

• Easy scalability

• Easier onboarding

• Better separation of concerns

Disadvantages

• More folders initially

Accepted.