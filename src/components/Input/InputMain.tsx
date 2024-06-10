import {
  InputHTMLAttributes,
  PropsWithChildren,
  Ref,
  createContext,
  forwardRef,
  useId,
  useMemo,
  useRef,
} from 'react'
import InputArea from './InputArea'
import InputLabel from './InputLabel'
import InputBox from './InputBox'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: any
  className?: string
}

type InputContextState = {
  id: string
  register: any
  disabled?: boolean
  forwardRef: Ref<HTMLInputElement>
}

export const InputContext = createContext<InputContextState>({
  id: '',
  register: null,
  disabled: false,
  forwardRef: null,
})

const InputMain = forwardRef(function InputMain(
  {
    children,
    className,
    register,
    disabled,
    ...props
  }: PropsWithChildren<InputProps>,
  forwardRef: Ref<HTMLInputElement>,
) {
  const id = useId()

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
      id,
      register,
      disabled,
      forwardRef,
      ...props,
    }),
    [id, register, disabled, forwardRef, props],
  )

  const inputStyle = useMemo(
    () => ({
      opacity: disabled ? '0.5' : '1',
      cursor: disabled ? 'not-allowed' : 'text',
    }),
    [disabled],
  )

  return (
    <InputContext.Provider value={providerValue}>
      <div
        ref={containerRef}
        onClick={onClick}
        data-disabled={disabled}
        style={inputStyle}
        className={className}
      >
        {children}
      </div>
    </InputContext.Provider>
  )
})

const Input = Object.assign(InputMain, {
  Label: InputLabel,
  InputBox: InputBox,
  InputArea: InputArea,
})

export default Input
