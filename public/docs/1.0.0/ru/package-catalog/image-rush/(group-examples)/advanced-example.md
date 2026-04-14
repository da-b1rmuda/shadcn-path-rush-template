# Advanced Example

Этот пример объединяет подтверждённые возможности: кастомный preset, диагностику и автогенерацию деклараций.

## `vite.config.ts`

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ImageRushPlugin } from '@da_b1rmuda/image-rush/vite';

export default defineConfig({
  plugins: [
    react(),
    ImageRushPlugin({
      outputDir: 'public/assets-content',
      publicBase: '/assets-content',
      defaultPreset: 'content',
      allowQueryOverrides: true,
      presets: {
        content: {
          widths: [480, 768, 1024, 1366],
          formats: ['avif', 'webp', 'jpeg'],
          quality: { avif: 46, webp: 72, jpeg: 82 },
          placeholder: 'blur',
          sizes: '(max-width: 900px) 100vw, 900px',
        },
      },
      diagnostics: {
        verbose: true,
        onEvent(event) {
          console.log(`[${event.level}] ${event.code}: ${event.message}`, event.context);
        },
      },
      types: {
        autoGenerate: true,
        filePath: 'src/image-rush.auto.d.ts',
      },
    }),
  ],
});
```

## `ContentImage.tsx`

```tsx
import { ImageRush } from '@da_b1rmuda/image-rush/react';
import contentAsset from './assets/content.jpg?imgx&preset=content&widths=480;768&formats=webp;jpeg';

export function ContentImage() {
  return (
    <ImageRush
      image={contentAsset}
      alt="Content image"
      sizes="(max-width: 900px) 100vw, 900px"
      loading="lazy"
    />
  );
}
```

## Что подтверждает пример

- [ImgxPluginOptions](../api/types/imgx-plugin-options.md) допускает пользовательский [PresetMap](../api/types/preset-map.md)
- Query-поля `widths` и `formats` входят в [ImgxQuery](../api/types/imgx-query.md)
- Диагностика описывается типом [ImgxPluginDiagnosticEvent](../api/types/imgx-plugin-diagnostic-event.md)
- Автогенерацию деклараций выполняет [ImgxTypeDeclarationWriter](../api/classes/imgx-type-declaration-writer.md)
