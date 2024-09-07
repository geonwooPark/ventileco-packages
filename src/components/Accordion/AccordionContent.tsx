import { PropsWithChildren } from 'react'
import { useAccordionItemContext } from './AccordionItem'
import { useAccordionContext } from './AccordionMain'

function AccordionContent({ children }: PropsWithChildren) {
  const { id } = useAccordionContext()
  const { isOpen, index } = useAccordionItemContext()

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
