import { PropsWithChildren, useContext } from 'react'
import { AccordionItemContext } from './AccordionItem'
import { AccordionContext } from './Accordion'

function AccordionContent({ children }: PropsWithChildren) {
  const { id } = useContext(AccordionContext)
  const { isOpen, index } = useContext(AccordionItemContext)

  return isOpen ? (
    <div
      id={`${id}-content-${index}`}
      role="tabpanel"
      aria-labelledby={`${id}-tab-${index}`}
      hidden={!isOpen}
    >
      {children}
    </div>
  ) : null
}
export default AccordionContent
