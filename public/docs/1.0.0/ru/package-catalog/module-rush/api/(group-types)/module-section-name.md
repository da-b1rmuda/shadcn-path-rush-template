# ModuleSectionName

Represents the fixed set of standard module sections.

## Definition

```ts
type ModuleSectionName =
  | 'components'
  | 'forms'
  | 'hooks'
  | 'model'
  | 'routes'
  | 'types'
  | 'api'
  | 'lib';
```

## Values

- `'components'`
- `'forms'`
- `'hooks'`
- `'model'`
- `'routes'`
- `'types'`
- `'api'`
- `'lib'`

## Notes

- Discovery uses this set when reporting which sections exist on a module.

## See also

- [`ModulePublicApiMap`](./module-public-api-map.md)
- [`DiscoveredModule`](./discovered-module.md)
