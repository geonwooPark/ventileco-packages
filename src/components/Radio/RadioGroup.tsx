import React, {
  PropsWithChildren,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react'
import RadioGroupTitle from './RadioGroupTitle'
import RadioButton from './RadioButton'
import RadioList from './RadioList'

interface RadioGroupProps {
  setValue?: React.Dispatch<
    React.SetStateAction<string | number | readonly string[] | undefined>
  >
  defaultValue?: string | number | readonly string[] | undefined
  name?: string
  register?: any
}

type RadioContextProp = {
  onClick: (value: string | number | readonly string[] | undefined) => void
  selectedValue: string | number | readonly string[] | undefined
  name: string | undefined
  register: any
}

export const RadioContext = createContext<RadioContextProp>({
  onClick: () => null,
  selectedValue: undefined,
  name: undefined,
  register: null,
})

function RadioGroup({
  children,
  setValue,
  defaultValue,
  name,
  register,
}: PropsWithChildren<RadioGroupProps>) {
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
      selectedValue,
      name,
      register,
      onClick,
    }),
    [selectedValue, name, register, onClick],
  )

  return (
    <RadioContext.Provider value={providerValue}>
      <fieldset role="radiogroup">{children}</fieldset>
    </RadioContext.Provider>
  )
}

RadioGroup.Title = RadioGroupTitle
RadioGroup.List = RadioList
RadioGroup.Item = RadioButton

export default RadioGroup
