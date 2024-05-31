import React, {
  InputHTMLAttributes,
  PropsWithChildren,
  createContext,
} from 'react'
import InputLabel from './InputLabel'
import InputArea from './InputArea'
import InputIcon from './InputIcon'
import InputContainer from './InputContainer'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: any
  ref?: React.RefObject<HTMLInputElement>
}

export const InputContext = createContext<InputProps | undefined>(undefined)

function Input({ children, ...props }: PropsWithChildren<InputProps>) {
  const providerValue = { ...props }

  return (
    <InputContext.Provider value={providerValue}>
      <div>{children}</div>
    </InputContext.Provider>
  )
}

Input.Label = InputLabel
Input.Container = InputContainer
Input.InputArea = InputArea
Input.Icon = InputIcon

export default Input
