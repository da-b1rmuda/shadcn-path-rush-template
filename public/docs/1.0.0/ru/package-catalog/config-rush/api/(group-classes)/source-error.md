# SourceError

Публичный класс ошибки source loading.

## Назначение

[`SourceError`](./source-error.md) создаётся, если source падает при загрузке или возвращает недопустимый payload.

## Constructor

```ts
new SourceError(sourceName: string, reason: unknown)
```

## Properties

- `sourceName: string`

## Usage Notes

- Если исходная причина является `Error` со stack trace, stack переносится в `SourceError`.

## See also

- [`loadConfig`](../functions/load-config.md)
- [`ConfigSource`](../types/config-source.md)
