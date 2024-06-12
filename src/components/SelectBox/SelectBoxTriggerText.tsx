import { PropsWithChildren } from 'react'
import { useSelectBoxContext } from './SelectBoxMain'

interface SelectBoxTriggerTextProps {
  className?: string
}

function SelectBoxTriggerText({
  children,
  className,
}: PropsWithChildren<SelectBoxTriggerTextProps>) {
  const { focusedLabel } = useSelectBoxContext()

  return <p className={className}>{focusedLabel || children}</p>
}

export default SelectBoxTriggerText
