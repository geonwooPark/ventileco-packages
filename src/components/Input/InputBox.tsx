import { PropsWithChildren } from 'react'

export interface InputBoxProps {
  className?: string
}

function InputBox({ children, className }: PropsWithChildren<InputBoxProps>) {
  return <div className={className}>{children}</div>
}

export default InputBox
