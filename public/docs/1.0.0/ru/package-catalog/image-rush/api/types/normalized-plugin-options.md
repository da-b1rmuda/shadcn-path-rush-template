# NormalizedPluginOptions

Внутренняя нормализованная форма конфигурации плагина, которая при этом экспортируется публично.

## Definition

```ts
type NormalizedPluginOptions = {
  outputDir: string;
  publicBase: string;
  presets: PresetMap;
  defaultPreset: string;
  allowQueryOverrides: boolean;
  processor?: ImageProcessor;
  cache: {
    enabled: boolean;
    manifestPath: string;
  };
  sharp: {
    concurrency: number;
  };
  diagnostics: {
    verbose: boolean;
    onEvent?: (event: ImgxPluginDiagnosticEvent) => void;
  };
  types: {
    autoGenerate: boolean;
    filePath: string;
  };
};
```

## Fields

- `outputDir`: `string`
- `publicBase`: `string`
- `presets`: [PresetMap](./preset-map.md)
- `defaultPreset`: `string`
- `allowQueryOverrides`: `boolean`
- `processor`: [ImageProcessor](./image-processor.md) `| undefined`
- `cache.enabled`: `boolean`
- `cache.manifestPath`: `string`
- `sharp.concurrency`: `number`
- `diagnostics.verbose`: `boolean`
- `diagnostics.onEvent`: `(event: ` [ImgxPluginDiagnosticEvent](./imgx-plugin-diagnostic-event.md) `) => void | undefined`
- `types.autoGenerate`: `boolean`
- `types.filePath`: `string`

## Notes

Тип отражает результат внутренней нормализации опций в [ImageRushPlugin](../functions/image-rush-plugin.md).

## See also

- [ImgxPluginOptions](./imgx-plugin-options.md)
- [buildImageAsset](../functions/build-image-asset.md)
