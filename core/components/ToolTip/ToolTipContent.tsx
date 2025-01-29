import React, {
  CSSProperties,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import { useToolTipContext } from './ToolTipMain'

function ToolTipContent({ children }: PropsWithChildren) {
  const { isOpen, disabled, tooltipRef, leaveTimer, setIsOpen } =
    useToolTipContext()

  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null)

  const onMouseOver = () => {
    clearTimeout(leaveTimer.current)
    setIsOpen(true)
  }

  const onMouseLeave = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    const tooltipDiv = document.createElement('div')
    tooltipDiv.id = 'tool-tip-ventileco'
    document.body.appendChild(tooltipDiv)
    setPortalRoot(tooltipDiv)

    return () => {
      if (tooltipDiv) {
        document.body.removeChild(tooltipDiv)
      }
    }
  }, [])

  const tooltipStyle = useMemo<CSSProperties>(() => ({ position: 'fixed' }), [])

  if (!portalRoot || disabled || !isOpen) return

  return createPortal(
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
  )
}

export default ToolTipContent
