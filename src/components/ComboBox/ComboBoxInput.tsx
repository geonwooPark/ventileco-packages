import { useComboBoxContext } from './ComboBoxMain'
import InputBox, { InputBoxProps } from '../InputBox/InputBox'

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
    inputRef,
    keyword,
    onTrigger,
    onKeyboardTrigger,
    onTextChange,
    onClear,
  } = useComboBoxContext()

  return (
    <InputBox
      ref={inputRef}
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
      {...otherProps}
    />
  )
}

export default ComboBoxInput
