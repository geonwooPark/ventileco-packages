import { useMemo } from 'react'
import { useSelectBoxContext } from './SelectBoxMain'

interface SelectItemProps {
  children: (props: {
    isSelected: boolean
    isDisabled: boolean
    isFocused: boolean
  }) => React.ReactNode

  item: {
    value: any
    label: string
    disabled?: boolean
  }
}

function SelectBoxItem({ children, item }: SelectItemProps) {
  const { id, value, focusedItem, onSelect } = useSelectBoxContext()

  const isSelected =
    value !== undefined && value.toString() === item.value.toString()
  const isDisabled = item.disabled ? true : false
  const isFocused = focusedItem === item.value.toString()

  const selectBoxItemStyle = useMemo<React.CSSProperties>(
    () => ({
      cursor: isDisabled ? 'not-allowed' : 'pointer',
    }),
    [isDisabled],
  )

  return (
    <li
      id={`${id}-selectbox-option-${item.value}`}
      role="option"
      aria-selected={isSelected}
      aria-disabled={isDisabled}
      data-value={item.value}
      data-label={item.label}
      data-disabled={item.disabled}
      onClick={() =>
        onSelect({
          value: item.value,
          disabled: item.disabled,
        })
      }
      style={selectBoxItemStyle}
    >
      {children({ isSelected, isDisabled, isFocused })}
    </li>
  )
}

export default SelectBoxItem
