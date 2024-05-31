import React, { PropsWithChildren, useContext } from 'react'
import { SliderContext } from './Slider'

function SliderContent({ children }: PropsWithChildren) {
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
      className={`flex cursor-grab overflow-x-scroll scroll-smooth scrollbar-hide [&>*]:shrink-0`}
    >
      {children}
    </div>
  )
}

export default SliderContent
