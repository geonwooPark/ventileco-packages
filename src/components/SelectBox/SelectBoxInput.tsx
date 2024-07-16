import { useMemo } from 'react'
import { useSelectBoxContext } from './SelectBoxMain'

interface ComboBoxInputProps {
  className?: string
  placeholder: string
}

function SelectBoxInput({ className, placeholder }: ComboBoxInputProps) {
  const { id, focusedItem, focusedLabel } = useSelectBoxContext()

  const selectBoxInputStyle = useMemo(
    () => ({ width: '100%', outline: 'none', cursor: 'pointer' }),
    [],
  )

  return (
    <input
      type="text"
      role="combobox"
      aria-autocomplete="list"
      aria-activedescendant={
        focusedItem ? `${id}-selectbox-option-${focusedItem}` : undefined
      }
      defaultValue={focusedLabel}
      placeholder={placeholder}
      className={className}
      style={selectBoxInputStyle}
      readOnly
    />
  )
}

export default SelectBoxInput
