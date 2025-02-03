import React, { CSSProperties, memo, useId, useCallback } from 'react'

export interface CheckBoxItemProps {
  children: (props: { checked: boolean }) => React.ReactNode
  value: number | string
  checked?: boolean
  onClick?: () => void
}

function CheckBoxItem({
  children,
  value,
  checked,
  onClick,
}: CheckBoxItemProps) {
  const id = useId()

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLLabelElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        onClick!()
      }
    },
    [onClick],
  )

  const checkBoxItemStyle: CSSProperties = { display: 'none' }

  return (
    <label
      htmlFor={`${id}-checkbox-item`}
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <input
        id={`${id}-checkbox-item`}
        type="checkbox"
        aria-hidden="true"
        value={value}
        onClick={onClick!}
        style={checkBoxItemStyle}
      />
      {children({ checked: !!checked })}
    </label>
  )
}

export default memo(CheckBoxItem, (prev, next) => prev.checked === next.checked)
