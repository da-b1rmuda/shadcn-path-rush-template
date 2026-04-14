---
title: Plugin API
order: 1
searchable: true
tags:
  - plugins
---

# Plugin API

`ctx.api` предоставляет методы:

- `getRoutes()`
- `updateRoute(id, patch)`
- `addRoute(route)`
- `removeRoute(id)`
- `setRoutes(routes)`
- `setNotFound(route)`

## RouteDefinition

```ts
interface RouteDefinition {
  id: string
  filePath: string
  segments: RouteSegment[]
  layouts: string[]
  meta?: PageMetadata
  special?: {
    loading?: string
    error?: string
    notFound?: string
    loader?: string
  }
}
```

## RouteSegment

```ts
type RouteSegment =
  | { type: 'static'; value: string }
  | { type: 'param'; name: string }
  | { type: 'optional'; name: string }
  | { type: 'catchAll'; name: string }
  | { type: 'group'; value: string }
  | { type: 'ignored'; value: string }
```

`group` и `ignored` не попадают в итоговый URL.
