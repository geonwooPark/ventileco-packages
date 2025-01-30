import React, { CSSProperties, useMemo } from 'react'
import { useRestContext } from './ToolTipMain'
import { TOOLTIP_TRIANGLE_DIRECTION } from './contants'

interface ToolTipTriangleProps {
  className?: string
}

export default function ToolTipTriangle({ className }: ToolTipTriangleProps) {
  const { direction } = useRestContext()

  const triangleStyle = useMemo<CSSProperties>(
    () => ({
      position: 'absolute',
      zIndex: '-1',
      ...TOOLTIP_TRIANGLE_DIRECTION[direction],
    }),
    [direction],
  )

  return <div style={triangleStyle} className={className} />
}
