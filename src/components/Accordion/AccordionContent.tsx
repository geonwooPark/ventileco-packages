import React, { PropsWithChildren, useContext } from 'react'
import { AccordionItemContext } from './AccordionItem'

function AccordionContent({ children }: PropsWithChildren) {
  const { isOpen } = useContext(AccordionItemContext)

  return isOpen ? <div role="tabpanel">{children}</div> : null
}
export default AccordionContent
