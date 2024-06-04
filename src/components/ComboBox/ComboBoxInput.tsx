import { useContext } from 'react'
import { ComboBoxContext } from './ComboBox'

interface ComboBoxInputProps {
  placeholder: string
}

function ComboBoxInput({ placeholder }: ComboBoxInputProps) {
  const { inputRef, keyword, onTextChange } = useContext(ComboBoxContext)

  return (
    <input
      role="input"
      ref={inputRef}
      value={keyword}
      onChange={onTextChange}
      placeholder={placeholder}
      className="w-full outline-none"
    />
  )
}

export default ComboBoxInput
