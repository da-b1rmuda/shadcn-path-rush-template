# InstallPWAButtonProps

Props для [InstallPWAButton](../components/install-pwa-button.md).

## Definition

```ts
interface InstallPWAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  installedLabel?: string
  unavailableLabel?: string
}
```

## Fields

| Поле | Тип | Обязательность | По умолчанию | Описание |
| --- | --- | --- | --- | --- |
| `label` | `string` | необязательное | `'Install app'` | Текст кнопки, когда установка доступна. |
| `installedLabel` | `string` | необязательное | `'Installed'` | Текст кнопки после установки. |
| `unavailableLabel` | `string` | необязательное | `'Install unavailable'` | Текст кнопки, когда установка недоступна. |

## Notes

- Тип расширяет `ButtonHTMLAttributes<HTMLButtonElement>`, поэтому компонент принимает стандартные button props, включая `onClick`, `disabled`, `className`, `style` и `type`.
- Если передан `children`, он заменяет вычисляемый label, хотя само поле `children` приходит из унаследованных button props, а не объявляется отдельно в интерфейсе.

## See also

- [InstallPWAButton](../components/install-pwa-button.md)
- [useInstallPrompt](../hooks/use-install-prompt.md)
