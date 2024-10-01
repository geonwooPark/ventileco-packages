import React, {
  forwardRef,
  HTMLAttributes,
  useCallback,
  useId,
  useMemo,
  useState,
} from 'react'
import RadioList from './RadioList'
import RadioItem from './RadioItem'
import { _createContext } from '../../utils/_createContext'

interface RadioMainProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  defaultValue?: string | number | readonly string[] | undefined
  setValue?: React.Dispatch<
    React.SetStateAction<string | number | readonly string[] | undefined>
  >
  name?: string
}

type RadioContextProp = {
  id: string
  onClick: (value: string | number | readonly string[] | undefined) => void
  selectedValue: string | number | readonly string[] | undefined
  name: string | undefined
}

export const [useRadioContext, RadioProvider] =
  _createContext<RadioContextProp>()

const RadioMain = forwardRef<HTMLDivElement, RadioMainProps>(function RadioMain(
  { children, setValue, defaultValue, name, ...otherProps },
  ref,
) {
  const id = useId()

  const [selectedValue, setSelectedValue] = useState(defaultValue)

  const onClick = useCallback(
    (value: string | number | readonly string[] | undefined) => {
      if (setValue) {
        setValue(value)
      }
      setSelectedValue(value)
    },
    [],
  )

  const providerValue = useMemo(
    () => ({
      id,
      selectedValue,
      name,
      onClick,
    }),
    [id, selectedValue, name],
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
