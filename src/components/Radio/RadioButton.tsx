import React, { useContext } from 'react'
import { RadioContext } from './RadioGroup'

interface RadioButtonProps {
  children: (props: { isSelected: boolean }) => React.ReactNode
  id: string
  value: string | number | readonly string[] | undefined
}

function RadioButton({ children, id, value }: RadioButtonProps) {
  const { selectedValue, name, register, onClick } = useContext(RadioContext)
  const isSelected = selectedValue === value

  return (
    <label role="radio" className="flex">
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        onClick={() => onClick(value)}
        defaultChecked={isSelected}
        className="hidden"
        {...register}
      />
      {children({ isSelected })}
    </label>
  )
}

export default RadioButton
