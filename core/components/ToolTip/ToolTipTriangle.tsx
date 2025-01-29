import React, { CSSProperties, useMemo } from 'react'
import { TOOLTIP_TRIANGLE_DIRECTION } from '../../constants'
import { useToolTipContext } from './ToolTipMain'

interface ToolTipTriangleProps {
  className?: string
}

export default function ToolTipTriangle({ className }: ToolTipTriangleProps) {
  const { direction } = useToolTipContext()

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
