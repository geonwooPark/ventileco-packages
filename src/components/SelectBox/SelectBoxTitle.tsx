import { PropsWithChildren, useContext } from 'react'
import { SelectContext } from './SelectBoxMain'

interface SelectBoxTitleProps {
  className?: string
}

function SelectBoxTitle({
  children,
  className,
}: PropsWithChildren<SelectBoxTitleProps>) {
  const { id, Title } = useContext(SelectContext)

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
