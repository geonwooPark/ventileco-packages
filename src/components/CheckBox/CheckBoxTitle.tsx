import { PropsWithChildren, useContext } from 'react'
import { CheckBoxContext } from './CheckBoxMain'

interface CheckBoxTitleProps {
  className?: string
}

function CheckBoxTitle({
  children,
  className,
}: PropsWithChildren<CheckBoxTitleProps>) {
  const { id, Title } = useContext(CheckBoxContext)

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
