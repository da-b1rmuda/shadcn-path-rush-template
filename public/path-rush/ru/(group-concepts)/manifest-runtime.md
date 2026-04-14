---
title: Манифест и runtime
order: 7
searchable: true
tags:
  - manifest
---

# Манифест и runtime

Vite плагин генерирует `virtual:routes` и отдаёт манифест для runtime.

```ts
import { basePath, routes, notFound } from 'virtual:routes'
```

## RuntimeRoute

```ts
type RuntimeRoute = {
  id: string
  filePath: string
  segments: RouteSegment[]
  page: RuntimeChunk
  layouts: RuntimeChunk[]
  loading?: RuntimeChunk
  error?: RuntimeChunk
  notFound?: RuntimeChunk
  loader?: LoaderChunk
}
```

Каждый chunk загружается лениво. Runtime использует манифест для матчинга и рендера без доступа к файловой системе.
