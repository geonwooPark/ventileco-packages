import { PropsWithChildren } from 'react'

interface ComboBoxTitleProps {
  className?: string
}

function ComboBoxTitle({
  children,
  className,
}: PropsWithChildren<ComboBoxTitleProps>) {
  return <legend className={className}>{children}</legend>
}

export default ComboBoxTitle
