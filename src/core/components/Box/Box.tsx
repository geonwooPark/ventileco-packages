import React, {
  ComponentPropsWithRef,
  ElementType,
  ReactNode,
  forwardRef,
} from 'react'
import { PolymorphicRef } from '../../types'

type BoxProps<T extends React.ElementType> = {
  as?: T
  children?: ReactNode
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children'>

type PolymorphicComponent = <T extends ElementType>(
  props: BoxProps<T> & {
    ref?: ComponentPropsWithRef<T>['ref']
  },
) => ReactNode | null

const Box: PolymorphicComponent = forwardRef(function Box<
  T extends ElementType,
>(props: BoxProps<T>, ref: PolymorphicRef<T>) {
  const { as, children, ...rest } = props
  const Element = as || 'div'

  return (
    <Element ref={ref} {...rest}>
      {children}
    </Element>
  )
})

export default Box
