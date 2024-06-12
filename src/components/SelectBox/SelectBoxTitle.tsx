import { PropsWithChildren } from 'react'
import { useSelectBoxContext } from './SelectBoxMain'

interface SelectBoxTitleProps {
  className?: string
}

function SelectBoxTitle({
  children,
  className,
}: PropsWithChildren<SelectBoxTitleProps>) {
  const { id, Title } = useSelectBoxContext()

  return (
    <Title
      htmlFor={`${id}-selectbox`}
      aria-labelledby={`${id}-selectbox`}
      className={className}
    >
      {children}
    </Title>
  )
}

export default SelectBoxTitle
