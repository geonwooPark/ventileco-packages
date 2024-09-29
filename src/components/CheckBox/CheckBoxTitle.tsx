import { PropsWithChildren } from 'react'
import { useCheckBoxContext } from './CheckBoxMain'

interface CheckBoxTitleProps {
  className?: string
}

function CheckBoxTitle({
  children,
  className,
}: PropsWithChildren<CheckBoxTitleProps>) {
  const { id } = useCheckBoxContext()

  return (
    <label
      htmlFor={`${id}-checkbox`}
      aria-labelledby={`${id}-checkbox`}
      className={className}
    >
      {children}
    </label>
  )
}

export default CheckBoxTitle
