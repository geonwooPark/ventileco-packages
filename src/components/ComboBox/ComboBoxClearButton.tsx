import { PropsWithChildren, useContext } from 'react'
import { ComboBoxContext } from './ComboBoxMain'

function ComboBoxClearButton({ children }: PropsWithChildren) {
  const { value, onClear } = useContext(ComboBoxContext)

  return value ? (
    <button aria-label="Clear Button" onClick={onClear}>
      {children}
    </button>
  ) : null
}

export default ComboBoxClearButton
