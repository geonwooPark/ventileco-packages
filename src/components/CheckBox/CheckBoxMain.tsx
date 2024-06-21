import React, {
  ElementType,
  forwardRef,
  useCallback,
  useId,
  useMemo,
  useState,
} from 'react'
import CheckBoxTitle from './CheckBoxTitle'
import CheckBoxList from './CheckBoxList'
import CheckBoxItem from './CheckBoxItem'
import { _createContext } from '../../utils/_createContext'
import { PolymorphicRef, TitleElement } from '../../types'

type CheckBoxMainProps<T extends ElementType> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T extends 'div' | 'fieldset' ? T : never
    children?: React.ReactNode
    ref?: PolymorphicRef<T>
    defaultValues?: (string | number)[]
    setValues?: React.Dispatch<React.SetStateAction<(string | number)[]>>
  }

type CheckBoxMainComponent = <T extends ElementType>(
  props: CheckBoxMainProps<T>,
) => React.ReactNode

type CheckBoxContextState = {
  id: string
  activeItems: Set<string | number>
  onClick: (selectedItem: string | number) => void
  Title: TitleElement
}

export const [useCheckBoxContext, CheckBoxProvider] =
  _createContext<CheckBoxContextState>()

const CheckBoxMain: CheckBoxMainComponent = forwardRef(function CheckBoxMain<
  T extends ElementType,
>(
  { as, children, defaultValues, setValues }: CheckBoxMainProps<T>,
  ref: PolymorphicRef<T>,
): React.ReactNode {
  const Element = as || 'div'
  const Title: TitleElement = Element === 'fieldset' ? 'legend' : 'label'

  const id = useId()

  const [activeItems, setActiveItems] = useState<Set<string | number>>(
    new Set(defaultValues),
  )

  const onClick = useCallback((selectedItem: string | number) => {
    if (setValues) {
      setValues((prev) => {
        let newItem = [...prev]
        if (prev.includes(selectedItem)) {
          newItem = newItem.filter((item) => item !== selectedItem)
        } else {
          newItem.push(selectedItem)
        }

        return newItem
      })
    }
    setActiveItems((prev) => {
      const newItem = new Set(prev)
      if (prev.has(selectedItem)) {
        newItem.delete(selectedItem)
      } else {
        newItem.add(selectedItem)
      }

      return newItem
    })
  }, [])

  const providerValue = useMemo(
    () => ({ id, activeItems, Title, onClick }),
    [id, activeItems, Title],
  )

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
