import React, { useMemo } from 'react'
import { useRadioContext } from './RadioMain'

interface RadioItemProps {
  children: (props: { isSelected: boolean }) => React.ReactNode
  value: string | number | readonly string[] | undefined
}

function RadioItem({ children, value }: RadioItemProps) {
  const { id, selectedValue, name, register, onClick } = useRadioContext()
  const isSelected = selectedValue === value

  const onKeyDown = (e: React.KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick(value)
    }
  }

  const radioButtonStyle = useMemo(() => ({ display: 'none' }), [])

  return (
    <label
      role="radio"
      htmlFor={`${id}-radio-button-${value}`}
      tabIndex={0}
      aria-checked={isSelected}
      onKeyDown={onKeyDown}
    >
      <input
        id={`${id}-radio-button-${value}`}
        type="radio"
        aria-hidden="true"
        name={name}
        value={value}
        onClick={() => onClick(value)}
        defaultChecked={isSelected}
        style={radioButtonStyle}
        {...register}
      />
      {children({ isSelected })}
    </label>
  )
}

export default RadioItem
