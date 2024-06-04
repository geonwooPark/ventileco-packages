import { PropsWithChildren } from 'react'

interface CheckBoxListProps {
  className?: string
}

function CheckBoxList({
  children,
  className,
}: PropsWithChildren<CheckBoxListProps>) {
  return <div className={className}>{children}</div>
}

export default CheckBoxList
