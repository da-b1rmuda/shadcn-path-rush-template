# Basic Usage

Этот сценарий повторяет подтверждённую связку из `README` и `demo/`: Vite-конфигурация через [ImageRushPlugin](../api/functions/image-rush-plugin.md), импорт ассета с `?imgx` и рендер через [ImageRush](../api/components/image-rush.md).

## 1. Настройте плагин

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ImageRushPlugin } from '@da_b1rmuda/image-rush/vite';

export default defineConfig({
  plugins: [
    react(),
    ImageRushPlugin({
      outputDir: 'public/assets-smoke',
      publicBase: '/assets-smoke',
      defaultPreset: 'card',
      sharp: { concurrency: 1 },
      cache: { enabled: false },
      diagnostics: { verbose: true },
      types: { autoGenerate: true, filePath: 'src/image-rush.auto.d.ts' },
    }),
  ],
});
```

Эта конфигурация подтверждена `demo/vite.config.ts`.

## 2. Импортируйте оригинал и обработанные ассеты

```ts
import heroOriginal from './assets/hero.jpg';
import heroCard from './assets/hero.jpg?imgx&preset=card';
import heroWide from './assets/hero.jpg?imgx&preset=hero';
```

Оригинальный импорт остаётся обычной строкой URL. Импорты с `?imgx` возвращают [ImageAsset](../api/types/image-asset.md).

## 3. Рендерите через React

```tsx
import { ImageRush } from '@da_b1rmuda/image-rush/react';

export default function App() {
  return (
    <>
      <img src={heroOriginal} alt="Original JPG" width={343} height={363} />
      <ImageRush image={heroCard} alt="Card preset" sizes="(max-width: 900px) 100vw, 50vw" />
      <ImageRush image={heroWide} alt="Hero preset" sizes="100vw" fetchPriority="high" />
    </>
  );
}
```

## 4. Что делает runtime

- [ImageRush](../api/components/image-rush.md) строит `picture`
- Для каждого `source.format` он вызывает [buildSrcSet](../api/functions/build-src-set.md)
- Fallback-изображение берётся из `image.fallback`
- Placeholder рисуется через [PlaceholderLayer](../api/components/placeholder-layer.md) до `onLoad`

## 5. Что делает build pipeline

- [ImageRushPlugin](../api/functions/image-rush-plugin.md) вызывает [buildImageAsset](../api/functions/build-image-asset.md)
- [buildImageAsset](../api/functions/build-image-asset.md) выбирает [ImagePreset](../api/types/image-preset.md) через [resolvePreset](../api/functions/resolve-preset.md)
- При отсутствии кастомного [ImageProcessor](../api/types/image-processor.md) используется [SharpImageProcessor](../api/classes/sharp-image-processor.md)
- Результат нормализуется в [ImageAsset](../api/types/image-asset.md) через [normalizeImageAsset](../api/functions/normalize-image-asset.md)
