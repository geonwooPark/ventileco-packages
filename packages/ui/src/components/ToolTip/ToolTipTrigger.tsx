import React, { CSSProperties, memo, PropsWithChildren, useMemo } from 'react'
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
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOut}
      style={triggerStyle}
    >
      {children}
    </div>
  )
}

export default memo(ToolTipTrigger)
