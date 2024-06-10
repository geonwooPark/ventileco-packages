import React, { useContext, useMemo } from 'react'
import { CheckBoxContext } from './CheckBoxMain'

interface CheckBoxItemProps {
  children: (props: { isSelected: boolean }) => React.ReactNode
  value: string | number
  register?: any
}

function CheckBoxItem({ children, value, register }: CheckBoxItemProps) {
  const { id, activeItems, onClick } = useContext(CheckBoxContext)
  const isSelected = activeItems.has(value)

  const onKeyDown = (e: React.KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick(value)
    }
  }

  const checkBoxItemStyle = useMemo(() => ({ display: 'none' }), [])

  return (
    <label
      htmlFor={`${id}-${value}`}
      role="checkbox"
      aria-checked={isSelected}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <input
        id={`${id}-${value}`}
        type="checkbox"
        aria-hidden="true"
        value={value}
        onClick={() => onClick(value)}
        style={checkBoxItemStyle}
        {...register}
      />
      {children({ isSelected })}
    </label>
  )
}

export default CheckBoxItem
