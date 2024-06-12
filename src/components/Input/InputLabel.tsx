import { PropsWithChildren } from 'react'
import { useInputContext } from './InputMain'

interface InputLabelProps {
  className?: string
}

function InputLabel({
  children,
  className,
}: PropsWithChildren<InputLabelProps>) {
  const { id } = useInputContext()

  return (
    <label htmlFor={id} className={className}>
      {children}
    </label>
  )
}

export default InputLabel
