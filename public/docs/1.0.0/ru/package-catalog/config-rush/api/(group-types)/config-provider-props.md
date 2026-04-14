# ConfigProviderProps

Props для React component [`ConfigProvider`](../components/config-provider.md).

## Definition

```ts
interface ConfigProviderProps<TConfig> extends PropsWithChildren {
  readonly config: TConfig;
}
```

## Fields

- `config` - config object, передаваемый в React context.
- `children` - дочерние элементы.

## See also

- [`ConfigProvider`](../components/config-provider.md)
