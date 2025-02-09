import React, { CSSProperties, useMemo } from 'react'
import { useSwitchContext } from './SwitchMain'

interface SwitchBallProps {
  className?: string
}

export default function SwitchBall({ className }: SwitchBallProps) {
  const { duration, marginInline } = useSwitchContext()

  const ballStyle = useMemo<CSSProperties>(
    () => ({
      position: 'absolute',
      top: '50%',
      left: marginInline,
      transform: 'translateY(-50%)',
      transition: `transform ${duration}ms ease`,
    }),
    [marginInline, duration],
  )

  return (
    <div
      style={ballStyle}
      aria-hidden="true"
      tabIndex={-1}
      className={className}
    />
  )
}
