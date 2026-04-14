# DoctorCheckStatus

Represents the status of one doctor check.

## Definition

```ts
type DoctorCheckStatus = 'pass' | 'warn' | 'fail';
```

## Values

- `'pass'`: the check succeeded.
- `'warn'`: the check found a non-fatal issue.
- `'fail'`: the check found a blocking issue.

## Notes

- Status is stored on [`DoctorCheck`](./doctor-check.md).

## See also

- [`DoctorCheck`](./doctor-check.md)
- [`DoctorResult`](./doctor-result.md)
