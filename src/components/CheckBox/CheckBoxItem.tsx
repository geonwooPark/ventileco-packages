import React, { useMemo } from 'react'
import { useCheckBoxContext } from './CheckBoxMain'

interface CheckBoxItemProps {
  children: (props: { isSelected: boolean }) => React.ReactNode
  value: string | number
}

function CheckBoxItem({ children, value }: CheckBoxItemProps) {
  const { id, value: values, onClick } = useCheckBoxContext()
  const isSelected = values.includes(value)

  const onKeyDown = (e: React.KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick(value)
    }
  }

  const checkBoxItemStyle = useMemo(() => ({ display: 'none' }), [])

  return (
    <label
      htmlFor={`${id}-checkbox-item-${value}`}
      role="checkbox"
      aria-checked={isSelected}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <input
        id={`${id}-checkbox-item-${value}`}
        type="checkbox"
        aria-hidden="true"
        value={value}
        onClick={() => onClick(value)}
        style={checkBoxItemStyle}
      />
      {children({ isSelected })}
    </label>
  )
}

export default CheckBoxItem
