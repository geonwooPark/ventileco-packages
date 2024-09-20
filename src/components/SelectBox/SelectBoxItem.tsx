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

  const selectBoxItemStyle = useMemo(
    () =>
      ({
        cursor: isDisabled ? 'not-allowed' : 'pointer',
      }) as React.CSSProperties,
    [isDisabled],
  )

  return (
    <li
      role="option"
      id={`${id}-selectbox-option-${item.value}`}
      aria-selected={isSelected}
      aria-disabled={isDisabled}
      data-value={item.value}
      data-label={item.label}
      data-disabled={item.disabled}
      tabIndex={0}
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
