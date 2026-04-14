# ConfigTarget

Target итогового config view.

## Definition

```ts
type ConfigTarget = "client" | "server";
```

## Notes

- По умолчанию используется `server`.
- `client` включает client-safe проекцию и dev guard.

## See also

- [`loadConfig`](../functions/load-config.md)
- [`ClientAccessError`](../classes/client-access-error.md)
