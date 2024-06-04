import {
  InputHTMLAttributes,
  PropsWithChildren,
  createContext,
  useMemo,
  useRef,
} from 'react'
import InputArea from './InputArea'
import InputIcon from './InputIcon'

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
        style={{ cursor: 'text' }}
        className={className}
      >
        {children}
      </div>
    </InputContext.Provider>
  )
}

Input.InputArea = InputArea
Input.Icon = InputIcon

export default Input
