import React, {
  forwardRef,
  ReactNode,
  isValidElement,
  cloneElement,
} from 'react'
import RadioItem, { RadioItemProps } from './RadioItem'

interface RadioMainProps {
  children?: ReactNode
  defaultValue: any
  onChange: (value: any) => void
  className?: string
}

const RadioMain = forwardRef<HTMLDivElement, RadioMainProps>(function RadioMain(
  { children, defaultValue, onChange, className },
  ref,
) {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (isValidElement<RadioItemProps>(child)) {
      return cloneElement(child, {
        checked: child.props.value === defaultValue,
        onChange,
      })
    }
    return child
  })

  return (
    <div role="radiogroup" ref={ref} className={className}>
      {childrenWithProps}
    </div>
  )
})

const Radio = Object.assign(RadioMain, {
  Item: RadioItem,
})

export default Radio
