import { PropsWithChildren } from 'react'

interface CheckBoxTitleProps {
  className: string
}

function CheckBoxTitle({
  children,
  className,
}: PropsWithChildren<CheckBoxTitleProps>) {
  return <legend className={className}>{children}</legend>
}

export default CheckBoxTitle
