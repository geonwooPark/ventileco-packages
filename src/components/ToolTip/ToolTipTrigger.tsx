import { PropsWithChildren, useContext } from 'react'
import { ToolTipContext } from './ToolTip'

function ToolTipTrigger({ children }: PropsWithChildren) {
  const { triggerRef } = useContext(ToolTipContext)

  return <div ref={triggerRef}>{children}</div>
}

export default ToolTipTrigger
