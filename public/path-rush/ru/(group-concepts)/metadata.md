---
title: Метаданные страниц
order: 6
searchable: true
tags:
  - metadata
  - seo
---

# Метаданные страниц

Поддерживаются два способа:

## 1) JSDoc

```tsx
/**
 * @title About
 * @description About page
 * @keywords about, docs
 * @changefreq weekly
 * @priority 0.6
 */
```

## 2) export const metadata

```tsx
export const metadata = {
  title: 'About',
  description: 'About page',
  keywords: ['about', 'docs'],
  changefreq: 'monthly',
  priority: 0.7,
}
```

Принимается только литерал объекта.
