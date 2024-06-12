import { PropsWithChildren } from 'react'
import { useComboBoxContext } from './ComboBoxMain'

function ComboBoxClearButton({ children }: PropsWithChildren) {
  const { value, onClear } = useComboBoxContext()

  return value ? (
    <button aria-label="Clear Button" onClick={onClear}>
      {children}
    </button>
  ) : null
}

export default ComboBoxClearButton
