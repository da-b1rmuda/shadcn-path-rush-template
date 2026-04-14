# ConfigPluginContext

Контекст, который получает plugin в `setup(context)`.

## Definition

```ts
interface ConfigPluginContext {
  readonly context: LoadContext;
  addSource(source: ConfigSource): void;
  addWarning(warning: string): void;
  onAfterValidate(hook: ConfigAfterValidateHook): void;
  onBeforeValidate(hook: ConfigBeforeValidateHook): void;
}
```

## Fields

- `context` - текущий [`LoadContext`](./load-context.md).
- `addSource` - добавляет новый [`ConfigSource`](./config-source.md).
- `addWarning` - регистрирует warning.
- `onAfterValidate` - регистрирует after-validate hook.
- `onBeforeValidate` - регистрирует before-validate hook.

## See also

- [`ConfigPlugin`](./config-plugin.md)
- [`ConfigBeforeValidateHook`](./config-before-validate-hook.md)
- [`ConfigAfterValidateHook`](./config-after-validate-hook.md)
