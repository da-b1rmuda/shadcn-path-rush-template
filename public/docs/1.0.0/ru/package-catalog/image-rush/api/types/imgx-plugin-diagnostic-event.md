# ImgxPluginDiagnosticEvent

Контракт диагностического события плагина.

## Definition

```ts
type ImgxPluginDiagnosticEvent = {
  level: 'debug' | 'info' | 'warn' | 'error';
  code: string;
  message: string;
  context?: Record<string, unknown>;
};
```

## Fields

- `level`: `'debug' | 'info' | 'warn' | 'error'`
- `code`: `string`
- `message`: `string`
- `context`: `Record<string, unknown> | undefined`

## Notes

Подтверждённые коды из реализации: `IMGR_CACHE_READY`, `IMGR_CACHE_SAVED`, `IMGR_CACHE_DISK_HIT`, `IMGR_ASSET_BUILT`, `IMGR_QUERY_OVERRIDES_IGNORED`.

## See also

- [ImgxPluginOptions](./imgx-plugin-options.md)
- [ImageRushPlugin](../functions/image-rush-plugin.md)
