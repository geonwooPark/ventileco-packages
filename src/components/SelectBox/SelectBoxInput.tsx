import { useMemo } from 'react'
import { useSelectBoxContext } from './SelectBoxMain'

interface ComboBoxInputProps {
  className?: string
  placeholder: string
}

function SelectBoxInput({ className, placeholder }: ComboBoxInputProps) {
  const { id, value, optionList } = useSelectBoxContext()

  const selectedItem = useMemo(
    () => optionList.find((r) => r.value === value),
    [optionList, value],
  )

  const selectedLabel = selectedItem?.label

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
        value ? `${id}-selectbox-option-${value}` : undefined
      }
      value={selectedLabel || ''}
      placeholder={placeholder}
      className={className}
      style={selectBoxInputStyle}
      readOnly
    />
  )
}

export default SelectBoxInput
