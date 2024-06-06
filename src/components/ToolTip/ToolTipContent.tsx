import { PropsWithChildren, useContext, useMemo } from 'react'
import { createPortal } from 'react-dom'
import { ToolTipContext } from './ToolTip'
import { TOOLTIP_TRIANGLE_DIRECTION } from '../../constants'

const tooltipDiv = document.createElement('div')
tooltipDiv.id = 'tool-tip-ventileco'
document.body.appendChild(tooltipDiv)
const portalRoot = document.getElementById('tool-tip-ventileco') as HTMLElement

function ToolTipContent({ children }: PropsWithChildren) {
  const { isOpen, disabled, direction, tooltipRef, leaveTimer, setIsOpen } =
    useContext(ToolTipContext)

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

  const triangleStyle = useMemo(
    () =>
      ({
        position: 'absolute',
        zIndex: '-1',
        width: '10px',
        height: '10px',
        ...TOOLTIP_TRIANGLE_DIRECTION[direction],
      }) as React.CSSProperties,
    [direction],
  )

  return (
    <>
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
              <div>{children}</div>
              <div style={triangleStyle} />
            </div>,
            portalRoot,
          ))}
    </>
  )
}

export default ToolTipContent
