import React, { useContext, useMemo } from 'react'
import { InputContext } from './Input'
import { twMerge } from 'tailwind-merge'

interface InputAreaProps {
  className?: string
}

function InputArea({ className }: InputAreaProps) {
  const { ...props } = useContext(InputContext)

  const newClassName = useMemo(
    () => twMerge('w-full bg-inherit outline-none', className),
    [className],
  )

  return (
    <input
      role="input"
      {...props}
      // eslint-disable-next-line react/prop-types
      data-disabled={props.disabled}
      className={newClassName}
    />
  )
}

export default InputArea
