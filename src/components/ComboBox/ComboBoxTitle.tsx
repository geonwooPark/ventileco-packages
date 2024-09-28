import { PropsWithChildren } from 'react'
import { useComboBoxContext } from './ComboBoxMain'

interface ComboBoxTitleProps {
  className?: string
}

function ComboBoxTitle({
  children,
  className,
}: PropsWithChildren<ComboBoxTitleProps>) {
  const { id } = useComboBoxContext()

  return (
    <label
      htmlFor={`${id}-combobox`}
      aria-labelledby={`${id}-combobox`}
      className={className}
    >
      {children}
    </label>
  )
}

export default ComboBoxTitle
