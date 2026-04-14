---
title: Опции плагина
order: 0
searchable: true
tags:
  - options
---

# Опции плагина

```ts
createPathRush({
  pagesDir: 'src/pages',
  pagesImportBase: '/src/pages',
  basePath: '/',
  pageFileName: 'page',
  layoutFileName: 'layout',

  enableSEO: false,
  baseUrl: 'https://example.com',
  disallowPaths: ['/admin'],
  outDir: 'dist',

  generateTypes: false,

  debug: false,
  debugRoutes: false,
  debugPlugins: false,

  plugins: [],
})
```

## Справочник опций

| Опция | Тип | Значение по умолчанию | Описание |
| --- | --- | --- | --- |
| `pagesDir` | `string` | обязательно | Директория страниц. Относительно корня проекта или абсолютный путь. |
| `pagesImportBase` | `string` | обязательно | База для import в `virtual:routes`. |
| `basePath` | `string` | `'/'` | Префикс URL для всех маршрутов. Строгий режим. |
| `pageFileName` | `string` | `'page'` | Имя файлов страниц без расширения. |
| `layoutFileName` | `string` | `'layout'` | Имя файлов layout без расширения. |
| `enableSEO` | `boolean` | `false` | Генерация sitemap и robots при build. |
| `baseUrl` | `string` | `''` | Базовый URL для SEO файлов. |
| `disallowPaths` | `string[]` | `[]` | Префиксы путей, исключаемые из SEO. |
| `outDir` | `string` | `'dist'` | Папка для SEO и типов. |
| `generateTypes` | `boolean` | `false` | Генерация `path-rush.routes.d.ts`. |
| `debug` | `boolean` | `false` | Включить все debug‑логи. |
| `debugRoutes` | `boolean` | `false` | Таблица маршрутов. |
| `debugPlugins` | `boolean` | `false` | Логи изменений плагинов. |
| `plugins` | `RoutePlugin[]` | `[]` | Кастомные плагины. |

## Примечания

- `pagesDir` и `pagesImportBase` обязательны.
- `disallowPaths` влияет только на SEO.
- `generateTypes` пишет файл в `outDir`.
