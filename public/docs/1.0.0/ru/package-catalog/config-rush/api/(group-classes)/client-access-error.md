# ClientAccessError

Публичный класс ошибки доступа к server-only config path из client target.

## Назначение

[`ClientAccessError`](./client-access-error.md) возникает не во время вызова [`loadConfig`](../functions/load-config.md), а при последующем чтении blocked path на client target в dev-режиме.

## Constructor

```ts
new ClientAccessError(path: string)
```

## Usage Notes

- Ошибка подтверждена только для dev client guard.
- В non-dev server data удаляется из client view, а не защищается исключением.

## See also

- [`loadConfig`](../functions/load-config.md)
- [`ConfigTarget`](../types/config-target.md)
