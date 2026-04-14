# DependencyRule

Describes a global dependency policy in the root config.

## Definition

```ts
type DependencyRule = {
  from: DependencyRuleSelector;
  allow?: string[];
  forbid?: string[];
  allowDomains?: string[];
  forbidDomains?: string[];
};
```

## Fields

- `from`: [`DependencyRuleSelector`](./dependency-rule-selector.md). Required selector for source modules.
- `allow`: Optional allowlist of dependency IDs.
- `forbid`: Optional blocklist of dependency IDs.
- `allowDomains`: Optional allowlist of target domains.
- `forbidDomains`: Optional blocklist of target domains.

## Notes

- Global dependency rules are read from [`ModuleRushConfig`](./module-rush-config.md).
- The rule engine uses them in `imports/global-dependency-rule` diagnostics.

## See also

- [`DependencyRuleSelector`](./dependency-rule-selector.md)
- [`ModuleRushConfig`](./module-rush-config.md)
- [`Diagnostic`](./diagnostic.md)
