import React, {
  InputHTMLAttributes,
  PropsWithChildren,
  createContext,
  useMemo,
  useRef,
} from 'react'
import InputLabel from './InputLabel'
import InputArea from './InputArea'
import InputIcon from './InputIcon'
import { twMerge } from 'tailwind-merge'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: any
  className?: string
}

type InputContextState = {
  register: any
  disabled?: boolean
}

export const InputContext = createContext<InputContextState>({
  register: null,
  disabled: false,
})

function Input({
  children,
  className,
  register,
  disabled,
  ...props
}: PropsWithChildren<InputProps>) {
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

  const providerValue = useMemo(
    () => ({
      register,
      disabled,
      ...props,
    }),
    [register, disabled, props],
  )

  return (
    <InputContext.Provider value={providerValue}>
      <div
        ref={containerRef}
        onClick={onClick}
        data-disabled={disabled}
        className={newClassName}
      >
        {children}
      </div>
    </InputContext.Provider>
  )
}

Input.Label = InputLabel
Input.InputArea = InputArea
Input.Icon = InputIcon

export default Input
