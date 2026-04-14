---
title: Специальные файлы
order: 5
searchable: true
tags:
  - loading
  - error
  - not-found
  - loader
---

# Специальные файлы

Path Rush распознаёт несколько специальных файлов внутри `pagesDir`.

- `loading.tsx` — Suspense fallback
- `error.tsx` — UI ошибки
- `not-found.tsx` — 404
- `loader.ts` — загрузка данных

## loading.tsx

- Используется как fallback для Suspense
- Разрешается по ближайшему родителю
- Если у страницы нет своего loading, берётся ближайший сверху

## error.tsx

- Применяется только к маршрутам в той же директории
- Рендерится через Error Boundary вокруг страницы
- Не ловит ошибки в обработчиках событий и асинхронных коллбеках

Если нужен общий error‑слой, используйте Error Boundary внутри layout.

## not-found.tsx

- Глобальный 404 — `not-found.tsx` в корне `pagesDir`
- Локальный 404 — `not-found.tsx` рядом с `page.tsx`
- Выбирается ближайшая директория с `not-found`

## loader.ts

- Должен экспортировать функцию `loader`
- Вызывается до рендера и работает с Suspense
- Данные доступны через `useLoaderData()`
