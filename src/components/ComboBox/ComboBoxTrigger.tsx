import { PropsWithChildren, useMemo } from 'react'
import { useComboBoxContext } from './ComboBoxMain'

interface ComboBoxTriggerProps {
  className?: string
}

function ComboBoxTrigger({
  children,
  className,
}: PropsWithChildren<ComboBoxTriggerProps>) {
  const { id, isOpen, triggerRef, onTrigger, onKeyboardTrigger } =
    useComboBoxContext()

  const comboBoxTriggerStyle = useMemo(
    () => ({ position: 'relative', cursor: 'pointer' }) as React.CSSProperties,
    [],
  )

  return (
    <div
      aria-labelledby={`${id}-combobox`}
      ref={triggerRef}
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      aria-controls={`${id}-combobox-list`}
      onClick={onTrigger}
      onKeyDown={onKeyboardTrigger}
      style={comboBoxTriggerStyle}
      className={className}
    >
      {children}
    </div>
  )
}

export default ComboBoxTrigger
