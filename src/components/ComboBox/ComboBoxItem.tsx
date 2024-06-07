import { useContext, useMemo } from 'react'
import { ComboBoxContext } from './ComboBox'

interface ComboBoxItemProps {
  children: (props: {
    isSelected: boolean
    isDisabled: boolean
    isFocused: boolean
  }) => React.ReactNode
  item: {
    value: string
    label: string
    disabled?: boolean
  }
}

function ComboBoxItem({ children, item }: ComboBoxItemProps) {
  const { id, value, focusedItem, onSelect } = useContext(ComboBoxContext)
  const isSelected = value === item.value
  const isDisabled = item.disabled ? true : false
  const isFocused = focusedItem === item.value

  const onClick = () => {
    onSelect({
      value: item.value,
      label: item.label,
      disabled: item.disabled,
    })
  }

  const comboBoxItemStyle = useMemo(
    () =>
      ({
        cursor: isDisabled ? 'not-allowed' : 'pointer',
      }) as React.CSSProperties,
    [isDisabled],
  )

  return (
    <li
      id={`${id}-combobox-option-${item.value}`}
      role="option"
      aria-selected={isSelected}
      aria-disabled={isDisabled}
      data-value={item.value}
      data-label={item.label}
      data-disabled={item.disabled}
      onClick={onClick}
      style={comboBoxItemStyle}
    >
      {children({ isSelected, isDisabled, isFocused })}
    </li>
  )
}

export default ComboBoxItem
