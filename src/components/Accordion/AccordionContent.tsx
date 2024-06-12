import { PropsWithChildren, useContext } from 'react'
import { AccordionItemContext } from './AccordionItem'
import { useAccordionContext } from './AccordionMain'

function AccordionContent({ children }: PropsWithChildren) {
  const { id } = useAccordionContext()
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
