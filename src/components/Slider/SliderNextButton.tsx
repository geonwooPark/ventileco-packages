import { PropsWithChildren, useContext } from 'react'
import { SliderContext } from './Slider'

interface SliderNextButtonProps {
  className: string
}

function SliderNextButton({
  children,
  className,
}: PropsWithChildren<SliderNextButtonProps>) {
  const { onNextButtonClick } = useContext(SliderContext)

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
