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

// 클릭하면 포커스가 넘어가버림 (엔터는 안넘어감)
function SelectBoxItem({ children, item }: SelectItemProps) {
  const { id, value, focusedItem, onSelect } = useSelectBoxContext()

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
      disabled: item.disabled,
    })
  }

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
      onMouseDown={onMouseDown}
      onClick={onClick}
      style={selectBoxItemStyle}
    >
      {children({ isSelected, isDisabled, isFocused })}
    </li>
  )
}

export default SelectBoxItem
