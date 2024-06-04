import React, {
  PropsWithChildren,
  createContext,
  useCallback,
  useState,
} from 'react'
import CheckBoxTitle from './CheckBoxTitle'
import CheckBoxList from './CheckBoxList'
import CheckBoxItem from './CheckBoxItem'

interface CheckBoxGroupProps {
  defaultValues?: (string | number)[]
  setValues?: React.Dispatch<React.SetStateAction<(string | number)[]>>
}

type CheckBoxContextState = {
  activeItems: Set<string | number>
  onClick: (selectedItem: string | number) => void
}

export const CheckBoxContext = createContext<CheckBoxContextState>({
  activeItems: new Set(),
  onClick: () => null,
})

function CheckBoxGroup({
  children,
  defaultValues,
  setValues,
}: PropsWithChildren<CheckBoxGroupProps>) {
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

  const providerValue = { activeItems, onClick }

  return (
    <CheckBoxContext.Provider value={providerValue}>
      <fieldset role="group">{children}</fieldset>
    </CheckBoxContext.Provider>
  )
}

CheckBoxGroup.Title = CheckBoxTitle
CheckBoxGroup.List = CheckBoxList
CheckBoxGroup.Item = CheckBoxItem

export default CheckBoxGroup
