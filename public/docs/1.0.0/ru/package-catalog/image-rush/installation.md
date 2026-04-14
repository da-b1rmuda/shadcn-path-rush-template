# Installation

## Подтверждённые prerequisites

- Для entry point `@da_b1rmuda/image-rush/vite` в `peerDependencies` требуется `vite` версии `^5.0.0 || ^6.0.0`.
- Для entry point `@da_b1rmuda/image-rush/react` в `peerDependencies` требуется `react` версии `^18.0.0 || ^19.0.0`.
- Пакет зависит от `sharp` и использует его через [loadSharp](./api/functions/load-sharp.md) и [SharpImageProcessor](./api/classes/sharp-image-processor.md).

`package.json` не содержит поля `engines`. Существующие текстовые материалы упоминают Node.js 18+, но это не закреплено метаданными пакета. В коде используется `os.availableParallelism()`, поэтому требование современного Node.js подтверждается косвенно, а не через `engines`.

## Установка пакета

```bash
npm i @da_b1rmuda/image-rush
```

Если проект использует TypeScript и строгую настройку типов модульных импортов, подключите `@da_b1rmuda/image-rush/types` или включите `types.autoGenerate` в [ImgxPluginOptions](./api/types/imgx-plugin-options.md).

## Импорт

### Рекомендуемые subpath-импорты

```ts
import { ImageRushPlugin } from '@da_b1rmuda/image-rush/vite';
import { ImageRush } from '@da_b1rmuda/image-rush/react';
import type { ImageAsset } from '@da_b1rmuda/image-rush/contracts';
```

### Поддерживаемый корневой импорт

```ts
import { ImageRushPlugin, ImageRush, type ImageAsset } from '@da_b1rmuda/image-rush';
```

Корневой entry point подтверждён `exports["."]` и `plugin/index.ts`, но существующие примеры в репозитории в основном используют subpath-импорты.

## Минимальная проверка работоспособности

1. Подключите [ImageRushPlugin](./api/functions/image-rush-plugin.md) в `vite.config.ts`.
2. Импортируйте изображение через `?imgx`.
3. Используйте результат как [ImageAsset](./api/types/image-asset.md) в [ImageRush](./api/components/image-rush.md).
4. Выполните Vite build и проверьте, что в `outputDir` появились сгенерированные файлы, а импорт вернул объект с `sources` и `fallback`.

См. [quick-start.md](./quick-start.md) и [examples/basic-example.md](./examples/basic-example.md).
