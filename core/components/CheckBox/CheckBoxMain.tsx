import React, {
  ReactNode,
  cloneElement,
  forwardRef,
  isValidElement,
  useCallback,
  useMemo,
  useRef,
} from 'react'
import CheckBoxItem, { CheckBoxItemProps } from './CheckBoxItem'

interface CheckBoxMainProps<T extends string | number> {
  children: ReactNode
  values: T[]
  onChange: (newValues: T[]) => void
  className?: string
}

function CheckBoxMain<T extends string | number>(
  { children, values, onChange, className }: CheckBoxMainProps<T>,
  ref: React.Ref<HTMLDivElement>,
) {
  const valuesRef = useRef(values)
  valuesRef.current = values

  const handleClick = useCallback(
    (value: T) => {
      const updatedValues = valuesRef.current.includes(value)
        ? valuesRef.current.filter((v) => v !== value)
        : [...valuesRef.current, value]

      onChange(updatedValues)
    },
    [onChange],
  )

  const childrenWithProps = useMemo(
    () =>
      React.Children.map(children, (child) => {
        if (isValidElement<CheckBoxItemProps>(child)) {
          return cloneElement(child, {
            checked: valuesRef.current.includes(child.props.value as T),
            onClick: () => handleClick(child.props.value as T),
          })
        }
        return child
      }),
    [handleClick, children],
  )

  return (
    <div role="group" ref={ref} className={className}>
      {childrenWithProps}
    </div>
  )
}

const ForwardedCheckBoxMain = forwardRef(CheckBoxMain) as <
  T extends string | number,
>(
  props: CheckBoxMainProps<T> & { ref?: React.Ref<HTMLDivElement> },
) => JSX.Element

const CheckBox = Object.assign(ForwardedCheckBoxMain, {
  Item: CheckBoxItem,
})

export default CheckBox
