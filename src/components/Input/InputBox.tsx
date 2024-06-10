import { PropsWithChildren } from 'react'

interface InputBoxProps {
  className?: string
}

function InputBox({ children, className }: PropsWithChildren<InputBoxProps>) {
  return <div className={className}>{children}</div>
}

export default InputBox
