import React, {
  CSSProperties,
  memo,
  PropsWithChildren,
  useId,
  useMemo,
} from 'react'

interface RadioItemProps {
  checked: boolean
  onChange: () => void
}

function RadioItem({
  children,
  checked,
  onChange,
}: PropsWithChildren<RadioItemProps>) {
  const id = useId()

  const onKeyDown = (e: React.KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onChange()
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
      onClick={onChange}
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
