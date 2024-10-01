import React, {
  ComponentPropsWithRef,
  ElementType,
  forwardRef,
  useCallback,
  useId,
  useMemo,
  useState,
} from 'react'
import RadioList from './RadioList'
import RadioItem from './RadioItem'
import { _createContext } from '../../utils/_createContext'
import { PolymorphicRef, TitleElement } from '../../types'

type RadioMainProps<T extends ElementType> = {
  as?: T extends 'div' | 'fieldset' ? T : never
  children?: React.ReactNode
  defaultValue?: string | number | readonly string[] | undefined
  setValue?: React.Dispatch<
    React.SetStateAction<string | number | readonly string[] | undefined>
  >
  name?: string
  register?: any
} & Omit<
  React.ComponentPropsWithoutRef<T>,
  'as' | 'children' | 'defaultValue' | 'setValue' | 'name' | 'register'
>

type RadioMainComponent = <T extends ElementType>(
  props: RadioMainProps<T> & {
    ref?: ComponentPropsWithRef<T>['ref']
  },
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
  ref: PolymorphicRef<T>,
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
    [],
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
    [id, selectedValue, name, register, Title],
  )

  return (
    <RadioProvider value={providerValue}>
      <Element role="radiogroup" ref={ref}>
        {children}
      </Element>
    </RadioProvider>
  )
})

const Radio = Object.assign(RadioMain, {
  List: RadioList,
  Item: RadioItem,
})

export default Radio
