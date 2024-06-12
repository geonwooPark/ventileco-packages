import { useMemo } from 'react'
import { useInputContext } from './InputMain'

interface InputAreaProps {
  className?: string
}

function InputArea({ className }: InputAreaProps) {
  const { id, register, disabled, forwardRef, ...props } = useInputContext()

  const inputAreaStyle = useMemo(
    () => ({
      width: '100%',
      backgroundColor: 'inherit',
      outline: 'none',
      cursor: disabled ? 'not-allowed' : 'text',
    }),
    [disabled],
  )

  return (
    <input
      id={id}
      ref={forwardRef}
      disabled={disabled}
      aria-disabled={disabled}
      style={inputAreaStyle}
      className={className}
      aria-label="Input field"
      {...props}
      {...register}
    />
  )
}

export default InputArea
