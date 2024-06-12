import { PropsWithChildren, useMemo } from 'react'
import { useComboBoxContext } from './ComboBoxMain'

function ComboBoxTrigger({ children }: PropsWithChildren) {
  const { id, isOpen, triggerRef, onTrigger, onKeyboardTrigger } =
    useComboBoxContext()

  const comboBoxTriggerStyle = useMemo(
    () => ({ position: 'relative', cursor: 'pointer' }) as React.CSSProperties,
    [],
  )

  return (
    <div
      ref={triggerRef}
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      aria-controls={`${id}-combobox-list`}
      onClick={onTrigger}
      onKeyDown={onKeyboardTrigger}
      style={comboBoxTriggerStyle}
    >
      {children}
    </div>
  )
}

export default ComboBoxTrigger
