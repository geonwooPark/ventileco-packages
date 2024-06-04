import { PropsWithChildren, useContext } from 'react'
import { SliderContext } from './Slider'

interface SliderContentProps {
  className: string
}

function SliderContent({
  children,
  className,
}: PropsWithChildren<SliderContentProps>) {
  const { slideContainer, gap, onDragStart, onThrottleDragMove, onDragEnd } =
    useContext(SliderContext)

  return (
    <div
      role="slider"
      ref={slideContainer}
      onMouseDown={onDragStart}
      onMouseUp={onDragEnd}
      onMouseMove={onThrottleDragMove}
      onMouseLeave={onDragEnd}
      style={{ gap: `${gap}px` }}
      className={className}
    >
      {children}
    </div>
  )
}

export default SliderContent
