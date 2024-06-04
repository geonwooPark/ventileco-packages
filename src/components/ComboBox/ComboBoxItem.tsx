import { useContext } from 'react'
import { ComboBoxContext } from './ComboBox'

interface ComboBoxItemProps {
  children: (props: {
    isSelected: boolean
    isDisabled: boolean
  }) => React.ReactNode
  item: {
    value: string
    label: string
    disabled?: boolean
  }
}

function ComboBoxItem({ children, item }: ComboBoxItemProps) {
  const { value, onSelect, onKeyboardSelect } = useContext(ComboBoxContext)
  const isSelected = value === item.value
  const isDisabled = item.disabled ? true : false

  return (
    <li
      role="listitem"
      tabIndex={0}
      data-value={item.value}
      data-label={item.label}
      data-disabled={item.disabled}
      onKeyDown={onKeyboardSelect}
      onClick={() =>
        onSelect({
          value: item.value,
          label: item.label,
          disabled: item.disabled,
        })
      }
    >
      {children({ isSelected, isDisabled })}
    </li>
  )
}

export default ComboBoxItem
