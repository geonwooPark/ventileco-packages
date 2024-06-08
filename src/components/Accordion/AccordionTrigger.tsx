import { PropsWithChildren, useContext } from 'react'
import { AccordionContext } from './Accordion'
import { AccordionItemContext } from './AccordionItem'

function AccordionTrigger({ children }: PropsWithChildren) {
  const { id, onClick, onFocus, onBlur } = useContext(AccordionContext)
  const { index, isOpen } = useContext(AccordionItemContext)

  const onMouseDown = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    onClick(index)
  }

  return (
    <button
      id={`${id}-accordion-button-${index}`}
      tabIndex={0}
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
