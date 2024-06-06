import { PropsWithChildren, useContext } from 'react'
import { AccordionItemContext } from './AccordionItem'
import { AccordionContext } from './Accordion'

function AccordionContent({ children }: PropsWithChildren) {
  const { id } = useContext(AccordionContext)
  const { isOpen, value } = useContext(AccordionItemContext)

  return isOpen ? (
    <div
      id={`${id}-content-${value}`}
      role="tabpanel"
      aria-labelledby={`${id}-tab-${value}`}
      hidden={!isOpen}
    >
      {children}
    </div>
  ) : null
}
export default AccordionContent
