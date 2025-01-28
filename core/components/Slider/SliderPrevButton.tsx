import React, { PropsWithChildren } from 'react'
import { useSliderContext } from './SliderMain'

interface SliderPrevButtonProps {
  className: string
}

function SliderPrevButton({
  children,
  className,
}: PropsWithChildren<SliderPrevButtonProps>) {
  const { onPrevClick, loopEnabled, page } = useSliderContext()

  const isDisabled = !loopEnabled && page <= 1

  return (
    <button
      className={className}
      onClick={onPrevClick}
      onMouseDown={(e) => e.stopPropagation()}
      onMouseMove={(e) => e.stopPropagation()}
      onMouseUp={(e) => e.stopPropagation()}
      aria-label="Previous Slide"
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}

export default SliderPrevButton
