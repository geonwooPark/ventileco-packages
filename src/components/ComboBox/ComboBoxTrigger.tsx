import { PropsWithChildren, useContext, useMemo } from 'react'
import { ComboBoxContext } from './ComboBox'

function ComboBoxTrigger({ children }: PropsWithChildren) {
  const { onTrigger, onKeyboardTrigger, triggerRef } =
    useContext(ComboBoxContext)

  const comboBoxTriggerStyle = useMemo(
    () => ({ position: 'relative', cursor: 'pointer' }) as React.CSSProperties,
    [],
  )

  return (
    <div
      ref={triggerRef}
      onClick={onTrigger}
      onKeyDown={onKeyboardTrigger}
      style={comboBoxTriggerStyle}
    >
      {children}
    </div>
  )
}

export default ComboBoxTrigger
