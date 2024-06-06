import { PropsWithChildren, useContext } from 'react'
import { SliderContext } from './Slider'

interface SliderPrevButtonProps {
  className: string
}

function SliderPrevButton({
  children,
  className,
}: PropsWithChildren<SliderPrevButtonProps>) {
  const { onPrevButtonClick } = useContext(SliderContext)

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
