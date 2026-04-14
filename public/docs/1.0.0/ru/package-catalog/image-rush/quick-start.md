# Quick Start

## 1. Подключите плагин

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ImageRushPlugin } from '@da_b1rmuda/image-rush/vite';

export default defineConfig({
  plugins: [
    react(),
    ImageRushPlugin({
      outputDir: 'public/assets',
      publicBase: '/assets',
      defaultPreset: 'card',
    }),
  ],
});
```

Это минимальная подтверждённая конфигурация [ImageRushPlugin](./api/functions/image-rush-plugin.md) из текстовых материалов и демо.

## 2. Импортируйте изображение через `?imgx`

```ts
import heroAsset from './assets/hero.jpg?imgx&preset=hero';
```

Импорт возвращает [ImageAsset](./api/types/image-asset.md).

## 3. Отрендерите изображение

```tsx
import { ImageRush } from '@da_b1rmuda/image-rush/react';
import heroAsset from './assets/hero.jpg?imgx&preset=hero';

export function Hero() {
  return <ImageRush image={heroAsset} alt="Hero" sizes="100vw" fetchPriority="high" />;
}
```

Компонент [ImageRush](./api/components/image-rush.md) использует `image.sources`, `image.fallback` и `image.placeholder`.

## 4. Проверьте результат

После Vite build в `outputDir` должны появиться сгенерированные файлы, а импортированный объект должен содержать `fallback`, `sources` и `metadata`. Дополнительные детали — в [guides/basic-usage.md](./guides/basic-usage.md).
