import { PropsWithChildren } from 'react'
import { useSelectBoxContext } from './SelectBoxMain'

interface SelectBoxTitleProps {
  className?: string
}

function SelectBoxTitle({
  children,
  className,
}: PropsWithChildren<SelectBoxTitleProps>) {
  const { id } = useSelectBoxContext()

  return (
    <div aria-labelledby={`${id}-selectbox`} className={className}>
      {children}
    </div>
  )
}

export default SelectBoxTitle
