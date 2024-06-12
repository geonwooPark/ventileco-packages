import { ElementType, forwardRef } from 'react'

type PolymorphicRef<T extends ElementType> =
  React.ComponentPropsWithRef<T>['ref']

type BoxProps<T extends React.ElementType> = {
  as?: T
  ref?: PolymorphicRef<T>
  children?: React.ReactNode
} & React.ComponentPropsWithoutRef<T>

type PolymorphicComponent = <T extends ElementType>(
  props: BoxProps<T>,
) => React.ReactNode | null

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
