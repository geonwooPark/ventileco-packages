import React, { CSSProperties, PropsWithChildren, useMemo } from 'react'
import { useRestContext } from './ToolTipMain'

function ToolTipTrigger({ children }: PropsWithChildren) {
  const { triggerRef, onMouseOver, onMouseOut } = useRestContext()

  const triggerStyle = useMemo<CSSProperties>(
    () => ({
      display: 'inline-block',
    }),
    [],
  )

  return (
    <div
      ref={triggerRef}
      aria-describedby="tooltip"
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseOut}
      style={triggerStyle}
    >
      {children}
    </div>
  )
}

export default ToolTipTrigger
