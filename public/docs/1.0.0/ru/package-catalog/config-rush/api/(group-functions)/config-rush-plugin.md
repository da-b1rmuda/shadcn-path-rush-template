# configRushPlugin

Создаёт Vite plugin, который публикует client config через virtual module.

## Назначение

[`configRushPlugin`](./config-rush-plugin.md) загружает client-safe config, создаёт virtual module [`CONFIG_RUSH_CLIENT_MODULE_ID`](../constants/config-rush-client-module-id.md), следит за source watch files и в dev шлёт targeted updates через [`CONFIG_RUSH_UPDATE_EVENT`](../constants/config-rush-update-event.md).

## Signature

```ts
const configRushPlugin: <TDefinition extends ConfigDefinition>(
  options: ConfigRushPluginOptions<TDefinition>
) => Plugin;
```

## Parameters

### `options`

- Type: [`ConfigRushPluginOptions`](../types/config-rush-plugin-options.md)
- Required: yes

## Returns

- `Plugin` from `vite`

## Usage Notes

- `loadOptions.target` здесь не передаётся: plugin всегда работает с client target.
- В virtual module есть `$subscribe` и stable path proxy cache.
- Подтверждён только Vite integration.

## Example

```ts
export default defineConfig(({ mode }) => ({
  plugins: [
    configRushPlugin({
      definition,
      loadOptions: {
        mode,
        sources: [createEnvSource({ mode })]
      }
    })
  ]
}));
```

## See also

- [`ConfigRushPluginOptions`](../types/config-rush-plugin-options.md)
- [`CONFIG_RUSH_CLIENT_MODULE_ID`](../constants/config-rush-client-module-id.md)
- [`CONFIG_RUSH_UPDATE_EVENT`](../constants/config-rush-update-event.md)
