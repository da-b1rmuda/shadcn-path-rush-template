---
title: Примеры
order: 3
searchable: true
tags:
  - plugins
---

# Примеры

## Добавить виртуальный маршрут

```ts
export const addHealth = () =>
  createRoutePlugin({
    name: 'add-health',
    transform(ctx) {
      ctx.api.addRoute({
        id: 'health',
        filePath: 'virtual/health',
        segments: [{ type: 'static', value: 'health' }],
        layouts: [],
      })
    },
  })
```
