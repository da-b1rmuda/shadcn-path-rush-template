# ModulePublicApiMap

Describes which module sections are public.

## Definition

```ts
type ModulePublicApiMap = {
  components?: boolean;
  forms?: boolean;
  hooks?: boolean;
  model?: boolean;
  routes?: boolean;
  types?: boolean;
  api?: boolean;
  lib?: boolean;
  [key: string]: boolean | undefined;
};
```

## Fields

- `components`: Whether `components/` is public.
- `forms`: Whether `forms/` is public.
- `hooks`: Whether `hooks/` is public.
- `model`: Whether `model/` is public.
- `routes`: Whether `routes/` is public.
- `types`: Whether `types/` is public.
- `api`: Whether `api/` is public.
- `lib`: Whether `lib/` is public.

## Notes

- Extra boolean keys are allowed by the index signature.
- The built-in `public-api-validity` rule only understands the standard section names above.

## See also

- [`ModuleManifest`](./module-manifest.md)
- [`NormalizedModuleManifest`](./normalized-module-manifest.md)
