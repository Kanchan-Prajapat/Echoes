# ADR-006: State Management

Status: Accepted

---

## Decision

Global state will be managed using Zustand.

Instead of a single large store,
Echoes will use feature-based stores.

authStore

themeStore

storyStore

memoryStore

settingsStore

searchStore

---

## Reason

Small stores are easier to debug,
maintain and extend.