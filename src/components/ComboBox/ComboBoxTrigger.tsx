import { PropsWithChildren, useContext, useMemo } from 'react'
import { ComboBoxContext } from './ComboBox'

function ComboBoxTrigger({ children }: PropsWithChildren) {
  const { id, isOpen, triggerRef, onTrigger, onKeyboardTrigger } =
    useContext(ComboBoxContext)

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
