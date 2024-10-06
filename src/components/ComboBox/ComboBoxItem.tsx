import { useMemo } from 'react'
import { useComboBoxContext } from './ComboBoxMain'

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
  const { id, value, focusedItem, onSelect } = useComboBoxContext()

  const isSelected =
    value !== undefined && value.toString() === item.value.toString()
  const isDisabled = item.disabled ? true : false
  const isFocused = focusedItem === item.value.toString()

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  const onClick = () => {
    onSelect({
      value: item.value,
      label: item.label,
      disabled: item.disabled,
    })
  }

  const comboBoxItemStyle = useMemo<React.CSSProperties>(
    () => ({
      cursor: isDisabled ? 'not-allowed' : 'pointer',
    }),
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
      onMouseDown={onMouseDown}
      onClick={onClick}
      style={comboBoxItemStyle}
    >
      {children({ isSelected, isDisabled, isFocused })}
    </li>
  )
}

export default ComboBoxItem
