import { PropsWithChildren, useContext } from 'react'
import { AccordionContext } from './Accordion'
import { AccordionItemContext } from './AccordionItem'

function AccordionTrigger({ children }: PropsWithChildren) {
  const { onClick, onFocus, onBlur } = useContext(AccordionContext)
  const { value } = useContext(AccordionItemContext)

  return (
    <div
      role="tab"
      tabIndex={0}
      onFocus={() => onFocus(value)}
      onBlur={() => onBlur(value)}
      onMouseDown={(e) => {
        e.preventDefault()
        onClick(value)
      }}
    >
      {children}
    </div>
  )
}

export default AccordionTrigger
