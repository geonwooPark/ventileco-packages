import { PropsWithChildren, useContext } from 'react'
import { AccordionItemContext } from './AccordionItem'
import { AccordionContext } from './Accordion'

function AccordionContent({ children }: PropsWithChildren) {
  const { id } = useContext(AccordionContext)
  const { isOpen, index } = useContext(AccordionItemContext)

  return isOpen ? (
    <div
      id={`${id}-accordion-region-${index}`}
      role="region"
      aria-labelledby={`${id}-accordion-button-${index}`}
      hidden={!isOpen}
    >
      {children}
    </div>
  ) : null
}
export default AccordionContent
