import React, { PropsWithChildren, useContext, useMemo, useRef } from 'react'
import { InputContext } from './Input'
import { twMerge } from 'tailwind-merge'

interface InputContainerProps {
  className: string
}

function InputContainer({
  children,
  className,
}: PropsWithChildren<InputContainerProps>) {
  const { ...props } = useContext(InputContext)

  const containerRef = useRef<HTMLDivElement>(null)

  const onClick = () => {
    if (!containerRef.current) return

    const inputNodes = containerRef.current.querySelector(
      'input',
    ) as HTMLElement
    inputNodes.focus()
  }

  const newClassName = useMemo(
    () => twMerge('flex items-center justify-between cursor-text', className),
    [className],
  )

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      // eslint-disable-next-line react/prop-types
      data-disabled={props.disabled}
      className={newClassName}
    >
      {children}
    </div>
  )
}

export default InputContainer
