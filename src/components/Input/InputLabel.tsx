import { PropsWithChildren, useContext } from 'react'
import { InputContext } from './Input'

interface InputLabelProps {
  className?: string
}

function InputLabel({
  children,
  className,
}: PropsWithChildren<InputLabelProps>) {
  const { id } = useContext(InputContext)

  return (
    <label htmlFor={id} className={className}>
      {children}
    </label>
  )
}

export default InputLabel
