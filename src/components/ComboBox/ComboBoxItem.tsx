import { useContext } from 'react'
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
  const { value, focusedItem, onSelect } = useContext(ComboBoxContext)
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

  return (
    <li
      role="option"
      aria-selected={isSelected}
      data-value={item.value}
      data-label={item.label}
      data-disabled={item.disabled}
      onClick={onClick}
      style={{ cursor: isDisabled ? 'not-allowed' : 'pointer' }}
    >
      {children({ isSelected, isDisabled, isFocused })}
    </li>
  )
}

export default ComboBoxItem
