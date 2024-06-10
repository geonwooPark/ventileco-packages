import { PropsWithChildren, useContext } from 'react'
import { ToolTipContext } from './ToolTipMain'

function ToolTipTrigger({ children }: PropsWithChildren) {
  const { triggerRef } = useContext(ToolTipContext)

  return (
    <div ref={triggerRef} aria-describedby="tooltip">
      {children}
    </div>
  )
}

export default ToolTipTrigger
