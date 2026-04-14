---
title: Loader система
order: 0
searchable: true
tags:
  - loader
---

# Loader система

`loader.ts` — это модуль с функцией `loader`, которая выполняется до рендера и интегрируется с Suspense.

## Расположение

```
src/pages/blog/[slug]/loader.ts
```

## Сигнатура

```ts
export async function loader({ params }) {
  return fetchPost(params.slug)
}
```

- `params` содержит параметры маршрута
- Можно возвращать любые данные

## Поток рендера

1. Маршрут совпадает
2. Выполняется loader
3. Если данные ещё не готовы — показывается `loading.tsx`
4. Результат кэшируется и доступен через `useLoaderData()`

## Обработка ошибок

Ошибка в loader приведёт к отображению `error.tsx` для данного маршрута (если он есть).
