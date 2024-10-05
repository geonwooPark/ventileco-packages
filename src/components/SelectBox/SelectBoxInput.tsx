import { useMemo } from 'react'
import { useSelectBoxContext } from './SelectBoxMain'
import InputBox, { InputBoxProps } from '../InputBox/InputBox'

interface SelectBoxInputProps extends InputBoxProps {
  placeholder?: string
}

function SelectBoxInput({ placeholder, ...otherProps }: SelectBoxInputProps) {
  const {
    id,
    value,
    inputRef,
    optionList,
    isOpen,
    setIsOpen,
    onKeyboardTrigger,
  } = useSelectBoxContext()

  const selectedItem = useMemo(
    () => optionList.find((r) => r.value === value),
    [optionList, value],
  )

  const selectedLabel = selectedItem?.label

  return (
    <InputBox
      ref={inputRef}
      type="text"
      role="combobox"
      value={selectedLabel || ''}
      onClick={() => setIsOpen((prev) => !prev)}
      onKeyDown={onKeyboardTrigger}
      placeholder={placeholder}
      readOnly
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      aria-controls={`${id}-select-list`}
      aria-autocomplete="list"
      aria-activedescendant={
        value ? `${id}-selectbox-option-${value}` : undefined
      }
      {...otherProps}
    />
  )
}

export default SelectBoxInput
