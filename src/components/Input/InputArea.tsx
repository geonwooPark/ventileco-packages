import React, { useContext, useMemo } from 'react'
import { InputContext } from './Input'
import { twMerge } from 'tailwind-merge'

interface InputAreaProps {
  className?: string
}

function InputArea({ className }: InputAreaProps) {
  const { register, disabled, ...props } = useContext(InputContext)

  const newClassName = useMemo(
    () => twMerge('w-full bg-inherit outline-none', className),
    [className],
  )

  return (
    <input
      role="input"
      {...props}
      disabled={disabled}
      data-disabled={disabled}
      className={newClassName}
      {...register}
    />
  )
}

export default InputArea
