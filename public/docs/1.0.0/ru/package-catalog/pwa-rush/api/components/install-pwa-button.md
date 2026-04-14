# InstallPWAButton

Готовая кнопка для install prompt flow.

## Назначение

[InstallPWAButton](./install-pwa-button.md) использует [useInstallPrompt](../hooks/use-install-prompt.md), автоматически блокирует кнопку, когда установка недоступна, и вызывает `promptInstall()` по клику.

## Signature

```ts
function InstallPWAButton(props: InstallPWAButtonProps): JSX.Element
```

## Props

| Prop | Тип | Обязательность | По умолчанию | Описание |
| --- | --- | --- | --- | --- |
| `label` | `string` | необязательный | `'Install app'` | Текст кнопки, когда установка доступна. |
| `installedLabel` | `string` | необязательный | `'Installed'` | Текст кнопки после установки. |
| `unavailableLabel` | `string` | необязательный | `'Install unavailable'` | Текст кнопки, когда установка недоступна. |
| `children` | `ReactNode` | необязательный | не указан | Если передан, заменяет вычисляемый label. |
| `...buttonProps` | `ButtonHTMLAttributes<HTMLButtonElement>` | необязательный | не указан | Стандартные HTML button props, включая `className`, `style`, `type`, `onClick` и другие. |

## Returns

Возвращает `JSX.Element` с корневым тегом `button`.

## Throws

При рендере вне [PWAProvider](./pwa-provider.md) компонент аварийно завершится через зависимый [usePWA](../hooks/use-pwa.md).

## Usage Notes

- Встроенный обработчик сначала вызывает пользовательский `onClick`, а затем прекращает install flow, если событие было отменено через `event.preventDefault()`.
- Кнопка становится disabled, если `disabled = true`, `canInstall = false` или `isInstalled = true`.
- Для собственного UI без встроенной кнопки используйте [useInstallPrompt](../hooks/use-install-prompt.md).

## Example

```tsx
import { InstallPWAButton } from '@da_b1rmuda/pwa-rush'

export function InstallCard() {
  return <InstallPWAButton label="Установить приложение" installedLabel="Уже установлено" />
}
```

## See also

- [InstallPWAButtonProps](../types/install-pwa-button-props.md)
- [useInstallPrompt](../hooks/use-install-prompt.md)
- [examples/basic-example.md](../../examples/basic-example.md)
