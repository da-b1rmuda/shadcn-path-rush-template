# ImgxPluginOptions

Входная конфигурация [ImageRushPlugin](../functions/image-rush-plugin.md).

## Definition

```ts
type ImgxPluginOptions = {
  outputDir?: string;
  publicBase?: string;
  presets?: PresetMap;
  defaultPreset?: string;
  allowQueryOverrides?: boolean;
  processor?: ImageProcessor;
  cache?: {
    enabled?: boolean;
    manifestPath?: string;
  };
  sharp?: {
    concurrency?: number;
  };
  diagnostics?: {
    verbose?: boolean;
    onEvent?: (event: ImgxPluginDiagnosticEvent) => void;
  };
  types?: {
    autoGenerate?: boolean;
    filePath?: string;
  };
};
```

## Fields

- `outputDir`: `string | undefined`
- `publicBase`: `string | undefined`
- `presets`: [PresetMap](./preset-map.md) `| undefined`
- `defaultPreset`: `string | undefined`
- `allowQueryOverrides`: `boolean | undefined`
- `processor`: [ImageProcessor](./image-processor.md) `| undefined`
- `cache.enabled`: `boolean | undefined`
- `cache.manifestPath`: `string | undefined`
- `sharp.concurrency`: `number | undefined`
- `diagnostics.verbose`: `boolean | undefined`
- `diagnostics.onEvent`: `(event: ` [ImgxPluginDiagnosticEvent](./imgx-plugin-diagnostic-event.md) `) => void | undefined`
- `types.autoGenerate`: `boolean | undefined`
- `types.filePath`: `string | undefined`

## Notes

Нормализованная форма описана типом [NormalizedPluginOptions](./normalized-plugin-options.md).

## See also

- [ImageRushPlugin](../functions/image-rush-plugin.md)
- [ImageRushPluginOptions](./image-rush-plugin-options.md)
- [NormalizedPluginOptions](./normalized-plugin-options.md)
