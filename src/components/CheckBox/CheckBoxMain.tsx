import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
  forwardRef,
  useCallback,
  useId,
  useMemo,
} from 'react'
import CheckBoxTitle from './CheckBoxTitle'
import CheckBoxList from './CheckBoxList'
import CheckBoxItem from './CheckBoxItem'
import { _createContext } from '../../utils/_createContext'
import { PolymorphicRef } from '../../types'

type CheckBoxMainProps<T extends ElementType> = {
  as?: T
  children?: ReactNode
  value: any[]
  onChange: (value: any) => void
} & Omit<
  ComponentPropsWithoutRef<T>,
  'as' | 'children' | 'defaultValues' | 'setValues'
>

type CheckBoxMainComponent = <T extends ElementType>(
  props: CheckBoxMainProps<T> & {
    ref?: ComponentPropsWithRef<T>['ref']
  },
) => ReactNode

type CheckBoxContextState = {
  id: string
  value: any[]
  onClick: (selectedItem: any) => void
}

export const [useCheckBoxContext, CheckBoxProvider] =
  _createContext<CheckBoxContextState>()

const CheckBoxMain: CheckBoxMainComponent = forwardRef(function CheckBoxMain<
  T extends ElementType,
>(
  { as, children, value, onChange }: CheckBoxMainProps<T>,
  ref: PolymorphicRef<T>,
): ReactNode {
  const Element = as || 'div'

  const id = useId()

  const onClick = useCallback(
    (selectedItem: any) => {
      if (value.includes(selectedItem)) {
        const updatedValue = value.filter((r) => r !== selectedItem)
        onChange(updatedValue)
      } else {
        onChange([...value, selectedItem])
      }
    },
    [value],
  )

  const providerValue = useMemo(() => ({ id, value, onClick }), [id, value])

  return (
    <CheckBoxProvider value={providerValue}>
      <Element id={`${id}_checkbox`} role="group" ref={ref}>
        {children}
      </Element>
    </CheckBoxProvider>
  )
})

const CheckBox = Object.assign(CheckBoxMain, {
  Title: CheckBoxTitle,
  List: CheckBoxList,
  Item: CheckBoxItem,
})

export default CheckBox
