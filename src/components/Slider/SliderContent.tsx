import React, { CSSProperties, PropsWithChildren, useMemo } from 'react'
import { useSliderContext } from './SliderMain'

interface SliderContentProps {
  className: string
}

function SliderContent({
  children,
  className,
}: PropsWithChildren<SliderContentProps>) {
  const { slideContainer, gap, startOffset } = useSliderContext()

  const sliderContentStyle = useMemo<CSSProperties>(
    () => ({
      gap: `${gap}px`,
      display: 'flex',
      width: '100%',
      transform: `translateX(${startOffset}px)`,
    }),
    [gap, startOffset],
  )

  return (
    <div
      role="slider"
      ref={slideContainer}
      style={sliderContentStyle}
      className={className}
      aria-live="polite"
    >
      {children}
    </div>
  )
}

export default SliderContent
