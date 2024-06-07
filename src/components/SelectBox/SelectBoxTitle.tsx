import { PropsWithChildren } from 'react'

interface SelectBoxTitleProps {
  className?: string
}

function SelectBoxTitle({
  children,
  className,
}: PropsWithChildren<SelectBoxTitleProps>) {
  return <legend className={className}>{children}</legend>
}

export default SelectBoxTitle
