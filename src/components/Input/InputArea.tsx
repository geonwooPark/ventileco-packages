import { useContext } from 'react'
import { InputContext } from './Input'

interface InputAreaProps {
  className?: string
}

function InputArea({ className }: InputAreaProps) {
  const { register, disabled, ...props } = useContext(InputContext)

  return (
    <input
      role="input"
      {...props}
      disabled={disabled}
      data-disabled={disabled}
      style={{ width: '100%', backgroundColor: 'inherit', outline: 'none' }}
      className={className}
      {...register}
    />
  )
}

export default InputArea
