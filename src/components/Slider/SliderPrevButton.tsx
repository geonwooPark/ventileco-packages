import { PropsWithChildren } from 'react'
import { useSliderContext } from './SliderMain'

interface SliderPrevButtonProps {
  className: string
}

function SliderPrevButton({
  children,
  className,
}: PropsWithChildren<SliderPrevButtonProps>) {
  const { onPrevButtonClick } = useSliderContext()

  return (
    <button
      onClick={onPrevButtonClick}
      className={className}
      aria-label="Previous Slide"
    >
      {children}
    </button>
  )
}

export default SliderPrevButton
