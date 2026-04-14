# Common Cases

## Использовать встроенный preset `card`

Если `defaultPreset` не переопределён, [ImageRushPlugin](../api/functions/image-rush-plugin.md) использует preset `card` из [defaultPresets](../api/constants/default-presets.md). Это удобно для карточек и повторяется в `README`.

```ts
ImageRushPlugin({
  defaultPreset: 'card',
});
```

## Явно выбрать preset в импорте

```ts
import heroWide from './assets/hero.jpg?imgx&preset=hero';
```

Параметр `preset` входит в [ImgxQuery](../api/types/imgx-query.md) и читается независимо от `allowQueryOverrides`.

## Подключить кастомный preset

```ts
ImageRushPlugin({
  defaultPreset: 'content',
  presets: {
    content: {
      widths: [480, 768, 1024, 1366],
      formats: ['avif', 'webp', 'jpeg'],
      quality: { avif: 46, webp: 72, jpeg: 82 },
      placeholder: 'blur',
      sizes: '(max-width: 900px) 100vw, 900px',
    },
  },
});
```

Форма конфигурации подтверждена [ImgxPluginOptions](../api/types/imgx-plugin-options.md), [ImagePresetConfig](../api/types/image-preset-config.md) и существующими текстовыми материалами.

## Включить диагностику

```ts
ImageRushPlugin({
  diagnostics: {
    verbose: true,
    onEvent(event) {
      console.log(`[${event.level}] ${event.code}: ${event.message}`, event.context);
    },
  },
});
```

Форма события задаётся типом [ImgxPluginDiagnosticEvent](../api/types/imgx-plugin-diagnostic-event.md).

## Подключить типизацию `?imgx` импортов

Используйте либо `@da_b1rmuda/image-rush/types`, либо `types.autoGenerate` в [ImgxPluginOptions](../api/types/imgx-plugin-options.md). Автогенерацию выполняет [ImgxTypeDeclarationWriter](../api/classes/imgx-type-declaration-writer.md).

## Разрешить query overrides

```ts
ImageRushPlugin({
  allowQueryOverrides: true,
});

import cardAsset from './hero.jpg?imgx&preset=card&widths=320;640&formats=webp;jpeg&placeholder=color';
```

При `allowQueryOverrides: false` параметры `widths`, `formats`, `placeholder` и `sizes` будут проигнорированы.
