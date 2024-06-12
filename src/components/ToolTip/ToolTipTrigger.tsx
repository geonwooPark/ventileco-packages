import { PropsWithChildren } from 'react'
import { useToolTipContext } from './ToolTipMain'

function ToolTipTrigger({ children }: PropsWithChildren) {
  const { triggerRef } = useToolTipContext()

  return (
    <div ref={triggerRef} aria-describedby="tooltip">
      {children}
    </div>
  )
}

export default ToolTipTrigger
