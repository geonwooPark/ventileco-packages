import {
  ForwardedRef,
  InputHTMLAttributes,
  PropsWithChildren,
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
  inputRef: React.RefObject<HTMLInputElement> | null
}

export const InputContext = createContext<InputContextState>({
  id: '',
  register: null,
  disabled: false,
  inputRef: null,
})

function InputMain(
  {
    children,
    className,
    register,
    disabled,
    ...props
  }: PropsWithChildren<InputProps>,
  forwardRef: ForwardedRef<HTMLInputElement>,
) {
  const id = useId()

  const inputRef = useRef<HTMLInputElement>(null)

  const providerValue = useMemo(
    () => ({
      id,
      register,
      disabled,
      inputRef,
      ...props,
    }),
    [id, register, disabled, inputRef, props],
  )

  const inputStyle = useMemo(
    () => ({
      opacity: disabled ? '0.5' : '1',
      cursor: disabled ? 'not-allowed' : '',
    }),
    [disabled],
  )

  return (
    <InputContext.Provider value={providerValue}>
      <div
        ref={forwardRef}
        data-disabled={disabled}
        style={inputStyle}
        className={className}
      >
        {children}
      </div>
    </InputContext.Provider>
  )
}

const Input = Object.assign(forwardRef(InputMain), {
  Label: InputLabel,
  InputBox: InputBox,
  InputArea: InputArea,
})

export default Input
