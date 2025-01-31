import React, {
  CSSProperties,
  memo,
  PropsWithChildren,
  useId,
  useMemo,
} from 'react'

export interface RadioItemProps {
  value: any
  checked?: boolean
  onChange?: (value: any) => void
}

function RadioItem({
  children,
  value,
  checked,
  onChange,
}: PropsWithChildren<RadioItemProps>) {
  const id = useId()

  const onKeyDown = (e: React.KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onChange!(value)
    }
  }

  const radioButtonStyle = useMemo<CSSProperties>(
    () => ({ display: 'none' }),
    [],
  )

  return (
    <label
      role="radio"
      htmlFor={`radio-button-${id}`}
      tabIndex={0}
      aria-checked={checked}
      onKeyDown={onKeyDown}
      onClick={() => onChange!(value)}
    >
      <input
        id={`radio-button-${id}`}
        type="radio"
        aria-hidden="true"
        checked={checked}
        readOnly
        style={radioButtonStyle}
      />
      {children}
    </label>
  )
}

export default memo(RadioItem, (prev, next) => prev.checked === next.checked)
