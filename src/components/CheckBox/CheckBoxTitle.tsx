import { PropsWithChildren } from 'react'
import { useCheckBoxContext } from './CheckBoxMain'

interface CheckBoxTitleProps {
  className?: string
}

function CheckBoxTitle({
  children,
  className,
}: PropsWithChildren<CheckBoxTitleProps>) {
  const { id, Title } = useCheckBoxContext()

  return (
    <Title
      htmlFor={`${id}-checkbox`}
      aria-labelledby={`${id}-checkbox`}
      className={className}
    >
      {children}
    </Title>
  )
}

export default CheckBoxTitle
