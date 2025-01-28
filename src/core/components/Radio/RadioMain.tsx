import React, { forwardRef, HTMLAttributes, useId, useMemo } from 'react'
import RadioList from './RadioList'
import RadioItem from './RadioItem'
import { _createContext } from '../../utils/_createContext'

interface RadioMainProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  value: any
  onChange: (value: any) => void
}

type RadioContextProp = {
  id: string
  onChange: (value: any) => void
  value: any
}

export const [useRadioContext, RadioProvider] =
  _createContext<RadioContextProp>()

const RadioMain = forwardRef<HTMLDivElement, RadioMainProps>(function RadioMain(
  { children, onChange, value, ...otherProps },
  ref,
) {
  const id = useId()

  const providerValue = useMemo(
    () => ({
      id,
      value,
      onChange,
    }),
    [id, value],
  )

  return (
    <RadioProvider value={providerValue}>
      <div role="radiogroup" ref={ref} {...otherProps}>
        {children}
      </div>
    </RadioProvider>
  )
})

const Radio = Object.assign(RadioMain, {
  List: RadioList,
  Item: RadioItem,
})

export default Radio
