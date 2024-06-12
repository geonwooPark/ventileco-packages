import { PropsWithChildren } from 'react'
import { useAccordionContext } from './AccordionMain'
import { useAccordionItemContext } from './AccordionItem'

function AccordionTrigger({ children }: PropsWithChildren) {
  const { id, onClick, onFocus, onBlur } = useAccordionContext()
  const { index, isOpen } = useAccordionItemContext()

  const onMouseDown = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    onClick(index)
  }

  return (
    <button
      id={`${id}-accordion-button-${index}`}
      aria-expanded={isOpen}
      aria-controls={`${id}-accordion-region-${index}`}
      onFocus={() => onFocus(index)}
      onBlur={() => onBlur(index)}
      onMouseDown={onMouseDown}
    >
      {children}
    </button>
  )
}

export default AccordionTrigger
