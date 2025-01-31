import React, { forwardRef } from 'react'
import RadioItem from './RadioItem'

interface RadioMainProps {
  children?: React.ReactNode
  className?: string
}

const RadioMain = forwardRef<HTMLDivElement, RadioMainProps>(function RadioMain(
  { children, className },
  ref,
) {
  return (
    <div role="radiogroup" ref={ref} className={className}>
      {children}
    </div>
  )
})

const Radio = Object.assign(RadioMain, {
  Item: RadioItem,
})

export default Radio
