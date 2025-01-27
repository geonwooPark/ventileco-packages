import { useComboBoxContext } from './ComboBoxMain'
import InputBox, { InputBoxProps } from '../InputBox/InputBox'
import React from 'react'

interface ComboBoxInputProps extends InputBoxProps {
  placeholder?: string
  clearIcon?: React.ReactNode
}

function ComboBoxInput({
  placeholder,
  clearIcon,
  ...otherProps
}: ComboBoxInputProps) {
  const {
    id,
    value,
    isOpen,
    keyword,
    onTrigger,
    onKeyboardTrigger,
    onTextChange,
    onClear,
    onBlur,
  } = useComboBoxContext()

  return (
    <InputBox
      type="text"
      role="combobox"
      placeholder={placeholder}
      value={keyword}
      onChange={onTextChange}
      onClick={onTrigger}
      onKeyDown={onKeyboardTrigger}
      endIcon={
        clearIcon ? (
          <span onClick={onClear} style={{ cursor: 'pointer' }}>
            {clearIcon}
          </span>
        ) : null
      }
      aria-autocomplete="list"
      aria-activedescendant={
        value ? `${id}-combobox-option-${value}` : undefined
      }
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      aria-controls={`${id}-combobox-list`}
      onBlur={onBlur}
      {...otherProps}
    />
  )
}

export default ComboBoxInput
