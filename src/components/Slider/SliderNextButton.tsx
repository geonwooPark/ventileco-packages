import { PropsWithChildren } from 'react'
import { useSliderContext } from './SliderMain'

interface SliderNextButtonProps {
  className: string
}

function SliderNextButton({
  children,
  className,
}: PropsWithChildren<SliderNextButtonProps>) {
  const { onNextButtonClick } = useSliderContext()

  return (
    <button
      onClick={onNextButtonClick}
      className={className}
      aria-label="Next Slide"
    >
      {children}
    </button>
  )
}

export default SliderNextButton
