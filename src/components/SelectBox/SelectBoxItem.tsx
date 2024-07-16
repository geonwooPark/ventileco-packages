import { useMemo } from 'react'
import { useSelectBoxContext } from './SelectBoxMain'

interface SelectItemProps {
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

function SelectBoxItem({ children, item }: SelectItemProps) {
  const { id, value, focusedItem, onSelect } = useSelectBoxContext()
  const isSelected = value === item.value
  const isDisabled = item.disabled ? true : false
  const isFocused = focusedItem === item.value

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
      id={`${id}-selectbox-option-${focusedItem}`}
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
