# ImageRushPlugin

Создаёт Vite plugin instance для обработки импортов `?imgx`.

## Назначение

Функция нормализует [ImgxPluginOptions](../types/imgx-plugin-options.md), инициализирует кэш и генератор type declarations, затем возвращает объект `Plugin` для Vite.

## Signature

```ts
function ImageRushPlugin(options?: ImgxPluginOptions): Plugin;
```

## Parameters

- `options`: [ImgxPluginOptions](../types/imgx-plugin-options.md), по умолчанию `{}`

## Returns

`Plugin` из Vite

## Throws

Прямо не выбрасывает ошибок в конструкторе, но ошибки могут возникать во время Vite hooks при обработке изображений, загрузке `sharp` или валидации preset.

## Usage Notes

- Плагин регистрируется с `name: 'image-rush-plugin'`
- `enforce` установлен в `'pre'`
- В `buildStart` может загрузить manifest-кэш и существующий файл деклараций
- В `load` обрабатываются только импорты, содержащие `imgx`
- В `buildEnd` manifest-кэш сохраняется на диск

## Example

```ts
import { defineConfig } from 'vite';
import { ImageRushPlugin } from '@da_b1rmuda/image-rush/vite';

export default defineConfig({
  plugins: [ImageRushPlugin()],
});
```

## See also

- [ImgxPluginOptions](../types/imgx-plugin-options.md)
- [ImgxPluginDiagnosticEvent](../types/imgx-plugin-diagnostic-event.md)
- [ImgxTypeDeclarationWriter](../classes/imgx-type-declaration-writer.md)
- [ImageCacheManifestStore](../classes/image-cache-manifest-store.md)
