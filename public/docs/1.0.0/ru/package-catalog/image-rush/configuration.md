# Configuration

## Конфигурация плагина

Основная конфигурация задаётся через [ImgxPluginOptions](./api/types/imgx-plugin-options.md), которую принимает [ImageRushPlugin](./api/functions/image-rush-plugin.md).

| Опция | Тип | Значение по умолчанию | Подтверждённое поведение |
| --- | --- | --- | --- |
| `outputDir` | [`string`](./api/types/normalized-plugin-options.md) | `path.resolve(process.cwd(), 'public/assets')` | Каталог записи сгенерированных файлов |
| `publicBase` | [`string`](./api/types/normalized-plugin-options.md) | `'/assets'` | Используется как префикс URL; в [SharpImageProcessor](./api/classes/sharp-image-processor.md) к нему добавляется `/${fileName}` без дополнительной нормализации |
| `presets` | [PresetMap](./api/types/preset-map.md) | встроенные [defaultPresets](./api/constants/default-presets.md) | Пользовательские presets мерджатся поверх встроенных |
| `defaultPreset` | [`string`](./api/types/normalized-plugin-options.md) | `'card'` | Используется, если в query отсутствует `preset` |
| `allowQueryOverrides` | [`boolean`](./api/types/normalized-plugin-options.md) | `false` | Влияет только на `widths`, `formats`, `placeholder`, `sizes` |
| `processor` | [ImageProcessor](./api/types/image-processor.md) | `undefined` | При отсутствии создаётся [SharpImageProcessor](./api/classes/sharp-image-processor.md) |
| `cache.enabled` | [`boolean`](./api/types/normalized-plugin-options.md) | `true` | Включает использование [ImageCacheManifestStore](./api/classes/image-cache-manifest-store.md) |
| `cache.manifestPath` | [`string`](./api/types/normalized-plugin-options.md) | `path.resolve(process.cwd(), '.imgr-cache', 'manifest.json')` | Путь к файлу manifest-кэша |
| `sharp.concurrency` | [`number`](./api/types/sharp-processor-options.md) | `0` на уровне options | Значение `> 0` передаётся в [SharpImageProcessor](./api/classes/sharp-image-processor.md); иначе используется авто-режим |
| `diagnostics.verbose` | [`boolean`](./api/types/imgx-plugin-options.md) | `false` | Скрывает debug-события в логгере плагина, но не запрещает `onEvent` |
| `diagnostics.onEvent` | [`(event) => void`](./api/types/imgx-plugin-options.md) | `undefined` | Получает события [ImgxPluginDiagnosticEvent](./api/types/imgx-plugin-diagnostic-event.md) |
| `types.autoGenerate` | [`boolean`](./api/types/imgx-plugin-options.md) | `true` | Создаёт или обновляет `image-rush.auto.d.ts` через [ImgxTypeDeclarationWriter](./api/classes/imgx-type-declaration-writer.md) |
| `types.filePath` | [`string`](./api/types/imgx-plugin-options.md) | `<cwd>/src/image-rush.auto.d.ts` | Используется только при `types.autoGenerate: true` |

## Встроенные presets

Встроенные presets экспортируются как [defaultPresets](./api/constants/default-presets.md):

- `avatar`
- `card`
- `hero`

Подробные значения описаны на странице [defaultPresets](./api/constants/default-presets.md).

## Import query

Плагин распознаёт импорт только при наличии `imgx`. Поддерживаемые параметры задаются в [ImgxQuery](./api/types/imgx-query.md):

- `imgx`
- `preset=<name>`
- `widths=320;640;960` или `widths=320,640,960`
- `formats=avif;webp;jpeg` или `formats=avif,webp,jpeg`
- `placeholder=blur|color|none`
- `sizes=<css sizes string>`

### Важное правило

Параметры `widths`, `formats`, `placeholder` и `sizes` становятся эффективными только при `allowQueryOverrides: true`. Параметр `preset` читается всегда.

## Типизация импортов

Пакет содержит subpath `@da_b1rmuda/image-rush/types`, который объявляет модуль `*?imgx*`. Дополнительно [ImgxTypeDeclarationWriter](./api/classes/imgx-type-declaration-writer.md) умеет записывать более конкретные декларации в файл `image-rush.auto.d.ts`.

### Встроенные типы пакета

```json
{
  "compilerOptions": {
    "types": ["vite/client", "@da_b1rmuda/image-rush/types"]
  }
}
```

### Автогенерация

```ts
ImageRushPlugin({
  types: {
    autoGenerate: true,
    filePath: 'src/image-rush.auto.d.ts',
  },
});
```
