import { PropsWithChildren, useContext } from 'react'
import { RadioContext } from './RadioMain'

interface RadioTitleProps {
  className?: string
}

function RadioTitle({
  children,
  className,
}: PropsWithChildren<RadioTitleProps>) {
  const { id, Title } = useContext(RadioContext)

  return (
    <Title
      htmlFor={`${id}-radio`}
      aria-labelledby={`${id}-radio`}
      className={className}
    >
      {children}
    </Title>
  )
}

export default RadioTitle
