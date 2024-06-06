import React, { useContext } from 'react'
import { RadioContext } from './RadioGroup'

interface RadioButtonProps {
  children: (props: { isSelected: boolean }) => React.ReactNode
  value: string | number | readonly string[] | undefined
}

function RadioButton({ children, value }: RadioButtonProps) {
  const { selectedValue, name, register, onClick } = useContext(RadioContext)
  const isSelected = selectedValue === value

  const onKeyDown = (e: React.KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick(value)
    }
  }

  return (
    <label
      role="radio"
      tabIndex={0}
      aria-checked={isSelected}
      onKeyDown={onKeyDown}
    >
      <input
        type="radio"
        name={name}
        value={value}
        onClick={() => onClick(value)}
        defaultChecked={isSelected}
        style={{ display: 'none' }}
        {...register}
      />
      {children({ isSelected })}
    </label>
  )
}

export default RadioButton
