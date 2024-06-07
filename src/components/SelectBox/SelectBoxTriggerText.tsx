import { PropsWithChildren, useContext } from 'react'
import { SelectContext } from './SelectBox'

interface SelectBoxTriggerTextProps {
  className?: string
}

function SelectBoxTriggerText({
  children,
  className,
}: PropsWithChildren<SelectBoxTriggerTextProps>) {
  const { focusedLabel } = useContext(SelectContext)

  return <p className={className}>{focusedLabel || children}</p>
}

export default SelectBoxTriggerText
