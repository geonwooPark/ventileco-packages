import { PropsWithChildren } from 'react'
import { useComboBoxContext } from './ComboBoxMain'

interface ComboBoxTitleProps {
  className?: string
}

function ComboBoxTitle({
  children,
  className,
}: PropsWithChildren<ComboBoxTitleProps>) {
  const { id, Title } = useComboBoxContext()

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
