import { PropsWithChildren, useMemo } from 'react'
import { useSelectBoxContext } from './SelectBoxMain'

interface SelectBoxTriggerProps {
  className?: string
}

function SelectBoxTrigger({
  children,
  className,
}: PropsWithChildren<SelectBoxTriggerProps>) {
  const { id, isOpen, triggerRef, setIsOpen, onKeyboardTrigger } =
    useSelectBoxContext()

  const selectBoxTriggerStyle = useMemo(
    () => ({ width: '100%', cursor: 'pointer' }) as React.CSSProperties,
    [],
  )

  return (
    <div
      ref={triggerRef}
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      aria-controls={`${id}-select-list`}
      onClick={() => setIsOpen((prev) => !prev)}
      onKeyDown={onKeyboardTrigger}
      style={selectBoxTriggerStyle}
      className={className}
    >
      {children}
    </div>
  )
}

export default SelectBoxTrigger
