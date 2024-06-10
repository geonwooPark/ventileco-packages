import { PropsWithChildren, useContext } from 'react'
import { InputContext } from './InputMain'

interface InputLabelProps {
  className?: string
}

function InputLabel({
  children,
  className,
}: PropsWithChildren<InputLabelProps>) {
  const { id } = useContext(InputContext)

  return (
    <label htmlFor={`${id}-input`} className={className}>
      {children}
    </label>
  )
}

export default InputLabel
