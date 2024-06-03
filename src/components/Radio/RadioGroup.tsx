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
  onChange: (value: string | number | readonly string[] | undefined) => void
  selectedValue: string | number | readonly string[] | undefined
  name: string | undefined
  register: any
}

export const RadioContext = createContext<RadioContextProp>({
  onChange: () => null,
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

  const onChange = useCallback(
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
      onChange,
    }),
    [selectedValue, name, register, onChange],
  )

  return (
    <RadioContext.Provider value={providerValue}>
      <fieldset role="radiogroup">{children}</fieldset>
    </RadioContext.Provider>
  )
}

RadioGroup.Title = RadioGroupTitle
RadioGroup.RadioList = RadioList
RadioGroup.RadioButton = RadioButton

export default RadioGroup
