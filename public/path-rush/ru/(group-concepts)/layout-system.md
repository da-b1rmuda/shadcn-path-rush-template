---
title: Система layout‑ов
order: 4
searchable: true
tags:
  - layout
---

# Система layout‑ов

`layout.tsx` применяются по иерархии директорий.

```
layout.tsx        # корневой layout
blog/layout.tsx   # layout для /blog/*
```

Требования:

- Только `default export`
- Обязательный `children`
- Имя файла можно изменить через `layoutFileName`
