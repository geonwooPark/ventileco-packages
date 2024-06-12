import React, {
  ElementType,
  forwardRef,
  useCallback,
  useId,
  useMemo,
  useState,
} from 'react'
import RadioList from './RadioList'
import RadioTitle from './RadioTitle'
import RadioItem from './RadioItem'
import { _createContext } from '../../utils/_createContext'

type TitleElement = 'legend' | 'label'

type RadioMainRef<T extends ElementType> = React.ComponentPropsWithRef<T>['ref']

type RadioMainProps<T extends ElementType> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T extends 'div' | 'fieldset' ? T : never
    children?: React.ReactNode
    ref?: RadioMainRef<T>
    setValue?: React.Dispatch<
      React.SetStateAction<string | number | readonly string[] | undefined>
    >
    defaultValue?: string | number | readonly string[] | undefined
    name?: string
    register?: any
  }

type RadioMainComponent = <T extends ElementType>(
  props: RadioMainProps<T>,
) => React.ReactNode

type RadioContextProp = {
  id: string
  onClick: (value: string | number | readonly string[] | undefined) => void
  selectedValue: string | number | readonly string[] | undefined
  name: string | undefined
  register: any
  Title: TitleElement
}

export const [useRadioContext, RadioProvider] =
  _createContext<RadioContextProp>()

const RadioMain: RadioMainComponent = forwardRef(function RadioMain<
  T extends ElementType,
>(
  { as, children, setValue, defaultValue, name, register }: RadioMainProps<T>,
  ref: RadioMainRef<T>,
) {
  const Element = as || 'div'
  const Title: TitleElement = Element === 'fieldset' ? 'legend' : 'label'

  const id = useId()

  const [selectedValue, setSelectedValue] = useState(defaultValue)

  const onClick = useCallback(
    (value: string | number | readonly string[] | undefined) => {
      if (setValue) {
        setValue(value)
      }
      setSelectedValue(value)
    },
    [setValue],
  )

  const providerValue = useMemo(
    () => ({
      id,
      selectedValue,
      name,
      register,
      Title,
      onClick,
    }),
    [id, selectedValue, name, register, Title, onClick],
  )

  return (
    <RadioProvider value={providerValue}>
      <Element id={`${id}-radio`} role="radiogroup" ref={ref}>
        {children}
      </Element>
    </RadioProvider>
  )
})

const Radio = Object.assign(RadioMain, {
  Title: RadioTitle,
  List: RadioList,
  Item: RadioItem,
})

export default Radio
