import { PropsWithChildren, useContext } from 'react'
import { ComboBoxContext } from './ComboBoxMain'

interface ComboBoxTitleProps {
  className?: string
}

function ComboBoxTitle({
  children,
  className,
}: PropsWithChildren<ComboBoxTitleProps>) {
  const { id, Title } = useContext(ComboBoxContext)

  return (
    <Title
      htmlFor={`${id}-combobox`}
      aria-labelledby={`${id}-combobox`}
      className={className}
    >
      {children}
    </Title>
  )
}

export default ComboBoxTitle
