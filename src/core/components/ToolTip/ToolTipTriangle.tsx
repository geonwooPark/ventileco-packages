import React, { useMemo } from 'react'
import { TOOLTIP_TRIANGLE_DIRECTION } from '../../constants'
import { useToolTipContext } from './ToolTipMain'

interface ToolTipTriangleProps {
  className?: string
}

export default function ToolTipTriangle({ className }: ToolTipTriangleProps) {
  const { direction } = useToolTipContext()

  const triangleStyle = useMemo(
    () =>
      ({
        position: 'absolute',
        zIndex: '-1',
        ...TOOLTIP_TRIANGLE_DIRECTION[direction],
      }) as React.CSSProperties,
    [direction],
  )

  return <div style={triangleStyle} className={className} />
}
