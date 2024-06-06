import React, { useContext } from 'react'
import { CheckBoxContext } from './CheckBoxGroup'

interface CheckBoxItemProps {
  children: (props: { isSelected: boolean }) => React.ReactNode
  value: string | number
  register?: any
}

function CheckBoxItem({ children, value, register }: CheckBoxItemProps) {
  const { activeItems, onClick } = useContext(CheckBoxContext)
  const isSelected = activeItems.has(value)

  const onKeyDown = (e: React.KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick(value)
    }
  }

  return (
    <label
      role="checkbox"
      aria-checked={isSelected}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <input
        type="checkbox"
        value={value}
        checked={isSelected}
        onClick={() => onClick(value)}
        style={{ display: 'none' }}
        {...register}
      />
      {children({ isSelected })}
    </label>
  )
}

export default CheckBoxItem
