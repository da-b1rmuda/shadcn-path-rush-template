# DoctorResult

Represents the aggregated result of a doctor run.

## Definition

```ts
type DoctorResult = {
  checks: DoctorCheck[];
  passCount: number;
  warnCount: number;
  failCount: number;
};
```

## Fields

- `checks`: [`DoctorCheck`](./doctor-check.md)`[]`. All checks that were executed.
- `passCount`: Number of pass checks.
- `warnCount`: Number of warn checks.
- `failCount`: Number of fail checks.

## Notes

- This is the return type of [`doctorProject`](../functions/doctor-project.md).

## See also

- [`DoctorCheck`](./doctor-check.md)
- [`doctorProject`](../functions/doctor-project.md)
