import { PropsWithChildren, useContext, useMemo } from 'react'
import { SliderContext } from './SliderMain'

interface SliderContentProps {
  className: string
}

function SliderContent({
  children,
  className,
}: PropsWithChildren<SliderContentProps>) {
  const { slideContainer, gap, onDragStart, onThrottleDragMove, onDragEnd } =
    useContext(SliderContext)

  const sliderStyle = useMemo(() => ({ gap: `${gap}px` }), [gap])

  return (
    <div
      role="slider"
      ref={slideContainer}
      onMouseDown={onDragStart}
      onMouseUp={onDragEnd}
      onMouseMove={onThrottleDragMove}
      onMouseLeave={onDragEnd}
      style={sliderStyle}
      className={className}
      aria-live="polite"
    >
      {children}
    </div>
  )
}

export default SliderContent
