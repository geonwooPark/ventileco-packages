import React, { useMemo } from 'react'
import { useRadioContext } from './RadioMain'

interface RadioItemProps {
  children: (props: { isSelected: boolean }) => React.ReactNode
  value: string | number | readonly string[] | undefined
}

function RadioItem({ children, value }: RadioItemProps) {
  const { id, value: _value, onChange } = useRadioContext()

  const isSelected = _value === value

  const onKeyDown = (e: React.KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onChange(value)
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
        value={value}
        onClick={() => onChange(value)}
        defaultChecked={isSelected}
        style={radioButtonStyle}
      />
      {children({ isSelected })}
    </label>
  )
}

export default RadioItem
