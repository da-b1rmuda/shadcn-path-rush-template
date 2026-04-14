# DependencyRuleSelector

Selects which modules a global dependency rule applies to.

## Definition

```ts
type DependencyRuleSelector = {
  module?: string;
  domain?: string;
  tag?: string;
};
```

## Fields

- `module`: Optional module-name selector.
- `domain`: Optional domain-name selector.
- `tag`: Optional module-tag selector.

## Notes

- A rule matches when all provided selector fields match the source module.
- This type is used by [`DependencyRule`](./dependency-rule.md).

## See also

- [`DependencyRule`](./dependency-rule.md)
- [`ModuleManifest`](./module-manifest.md)
