# ConfigProvider

React component, который публикует config в context.

## Назначение

[`ConfigProvider`](./config-provider.md) используется как React entry point для передачи config в компонентное дерево.

## Signature

```ts
const ConfigProvider: <TConfig>(
  props: ConfigProviderProps<TConfig>
) => JSX.Element;
```

## Props

- `config: TConfig`
- `children?: ReactNode`

## Usage Notes

- Если переданный `config` поддерживает `$subscribe`, hook [`useConfig`](../hooks/use-config.md) будет получать обновления через `useSyncExternalStore`.

## Example

```tsx
<ConfigProvider config={config}>
  <App />
</ConfigProvider>
```

## See also

- [`ConfigProviderProps`](../types/config-provider-props.md)
- [`useConfig`](../hooks/use-config.md)
