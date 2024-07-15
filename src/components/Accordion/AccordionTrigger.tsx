import { PropsWithChildren } from 'react'
import { useAccordionContext } from './AccordionMain'
import { useAccordionItemContext } from './AccordionItem'

interface AccordionTriggerProps {
  className?: string
}

function AccordionTrigger({
  children,
  className,
}: PropsWithChildren<AccordionTriggerProps>) {
  const { id, onClick, onFocus, onBlur } = useAccordionContext()
  const { index, isOpen } = useAccordionItemContext()

  const onMouseDown = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    onClick(index)
  }

  return (
    <button
      role="heading"
      id={`${id}-accordion-button-${index}`}
      aria-expanded={isOpen}
      aria-controls={`${id}-accordion-region-${index}`}
      onFocus={() => onFocus(index)}
      onBlur={() => onBlur(index)}
      onMouseDown={onMouseDown}
      className={className}
    >
      {children}
    </button>
  )
}

export default AccordionTrigger
