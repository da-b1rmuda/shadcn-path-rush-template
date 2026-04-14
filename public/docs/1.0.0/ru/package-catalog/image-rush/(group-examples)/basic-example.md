# Basic Example

Ниже — компактный подтверждённый сценарий на основе `README` и `demo/`.

## `vite.config.ts`

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

## `Hero.tsx`

```tsx
import { ImageRush } from '@da_b1rmuda/image-rush/react';
import heroAsset from './assets/hero.jpg?imgx&preset=hero';

export function Hero() {
  return <ImageRush image={heroAsset} alt="Hero" sizes="100vw" fetchPriority="high" />;
}
```

## Что здесь используется

- [ImageRushPlugin](../api/functions/image-rush-plugin.md)
- [ImgxPluginOptions](../api/types/imgx-plugin-options.md)
- [ImageRush](../api/components/image-rush.md)
- [ImageAsset](../api/types/image-asset.md)
