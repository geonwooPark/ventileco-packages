import { PropsWithChildren } from 'react'
import { useSliderContext } from './SliderMain'

interface SliderNextButtonProps {
  className: string
}

function SliderNextButton({
  children,
  className,
}: PropsWithChildren<SliderNextButtonProps>) {
  const { onNextClick, loopEnabled, page, totalPage } = useSliderContext()

  const isDisabled = !loopEnabled && page >= totalPage

  return (
    <button
      className={className}
      onClick={() => onNextClick()}
      onMouseDown={(e) => e.stopPropagation()}
      onMouseMove={(e) => e.stopPropagation()}
      onMouseUp={(e) => e.stopPropagation()}
      aria-label="Next Slide"
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}

export default SliderNextButton
