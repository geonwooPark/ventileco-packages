import { PropsWithChildren } from 'react'
import { useRadioContext } from './RadioMain'

interface RadioTitleProps {
  className?: string
}

function RadioTitle({
  children,
  className,
}: PropsWithChildren<RadioTitleProps>) {
  const { id, Title } = useRadioContext()

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
