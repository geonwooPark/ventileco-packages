import React, { PropsWithChildren, useContext } from 'react'
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
    <button onClick={onNextButtonClick} className={className}>
      {children}
    </button>
  )
}

export default SliderNextButton
