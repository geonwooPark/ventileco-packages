import React, { PropsWithChildren, useMemo } from 'react'
import { createPortal } from 'react-dom'
import { useToolTipContext } from './ToolTipMain'

const tooltipDiv = document.createElement('div')
tooltipDiv.id = 'tool-tip-ventileco'
document.body.appendChild(tooltipDiv)
const portalRoot = document.getElementById('tool-tip-ventileco') as HTMLElement

function ToolTipContent({ children }: PropsWithChildren) {
  const { isOpen, disabled, tooltipRef, leaveTimer, setIsOpen } =
    useToolTipContext()

  const onMouseOver = () => {
    clearTimeout(leaveTimer.current)
    setIsOpen(true)
  }

  const onMouseLeave = () => {
    setIsOpen(false)
  }

  const tooltipStyle = useMemo(
    () => ({ position: 'fixed' }) as React.CSSProperties,
    [],
  )

  return (
    <React.Fragment>
      {disabled ||
        (isOpen &&
          createPortal(
            <div
              role="tooltip"
              style={tooltipStyle}
              ref={tooltipRef}
              onMouseOver={onMouseOver}
              onMouseLeave={onMouseLeave}
            >
              {children}
            </div>,
            portalRoot,
          ))}
    </React.Fragment>
  )
}

export default ToolTipContent
