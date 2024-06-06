import { PropsWithChildren, useContext } from 'react'
import { AccordionItemContext } from './AccordionItem'
import { AccordionContext } from './Accordion'

function AccordionContent({ children }: PropsWithChildren) {
  const { id } = useContext(AccordionContext)
  const { isOpen } = useContext(AccordionItemContext)

  return isOpen ? (
    <div
      id={id + '-content'}
      role="tabpanel"
      aria-labelledby={id + '-tap'}
      hidden={!isOpen}
    >
      {children}
    </div>
  ) : null
}
export default AccordionContent
