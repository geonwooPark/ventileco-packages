import { PropsWithChildren, useContext } from 'react'
import { AccordionItemContext } from './AccordionItem'

function AccordionContent({ children }: PropsWithChildren) {
  const { isOpen, value } = useContext(AccordionItemContext)

  return isOpen ? (
    <div
      id={`panel-${value}`}
      role="tabpanel"
      aria-labelledby={`tab-${value}`}
      hidden={!isOpen}
    >
      {children}
    </div>
  ) : null
}
export default AccordionContent
