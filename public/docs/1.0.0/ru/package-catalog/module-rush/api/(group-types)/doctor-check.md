# DoctorCheck

Represents one integration-health check returned by doctor.

## Definition

```ts
type DoctorCheck = {
  key: string;
  status: DoctorCheckStatus;
  message: string;
  details?: string;
};
```

## Fields

- `key`: Stable check identifier.
- `status`: [`DoctorCheckStatus`](./doctor-check-status.md).
- `message`: Main result message.
- `details`: Optional secondary detail text.

## Notes

- Checks are aggregated by [`DoctorResult`](./doctor-result.md).

## See also

- [`DoctorCheckStatus`](./doctor-check-status.md)
- [`DoctorResult`](./doctor-result.md)
- [`doctorProject`](../functions/doctor-project.md)
