import React, {
  CSSProperties,
  PropsWithChildren,
  useEffect,
  useMemo,
  useRef,
} from 'react'
import { createPortal } from 'react-dom'
import { useIsOpenContext, useRestContext } from './ToolTipMain'

function ToolTipContent({ children }: PropsWithChildren) {
  const isOpen = useIsOpenContext()

  const { tooltipRef, onMouseOver, onMouseOut } = useRestContext()

  const portalRootRef = useRef<HTMLElement | null>(null)

  const tooltipStyle = useMemo<CSSProperties>(
    () => ({ position: 'fixed', zIndex: 3000 }),
    [],
  )

  useEffect(() => {
    let tooltipDiv = document.getElementById(
      'tool-tip-ventileco',
    ) as HTMLDivElement

    if (!tooltipDiv) {
      tooltipDiv = document.createElement('div')
      tooltipDiv.id = 'tool-tip-ventileco'
      tooltipDiv.role = 'tooltip'
      document.body.appendChild(tooltipDiv)
    }

    portalRootRef.current = tooltipDiv

    return () => {
      if (tooltipDiv && tooltipDiv.parentNode) {
        document.body.removeChild(tooltipDiv)
      }
    }
  }, [])

  if (!isOpen) return

  return createPortal(
    <div
      style={tooltipStyle}
      ref={tooltipRef}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOut}
    >
      {children}
    </div>,
    portalRootRef.current as HTMLElement,
  )
}

export default ToolTipContent
