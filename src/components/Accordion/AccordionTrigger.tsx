import { PropsWithChildren, useContext } from 'react'
import { AccordionContext } from './Accordion'
import { AccordionItemContext } from './AccordionItem'

function AccordionTrigger({ children }: PropsWithChildren) {
  const { activeItems, onClick, onFocus, onBlur } = useContext(AccordionContext)
  const { value } = useContext(AccordionItemContext)

  return (
    <button
      id={`tab-${value}`}
      tabIndex={0}
      role="tab"
      aria-expanded={activeItems.has(value)}
      aria-controls={`panel-${value}`}
      onFocus={() => onFocus(value)}
      onBlur={() => onBlur(value)}
      onMouseDown={(e) => {
        e.preventDefault()
        onClick(value)
      }}
    >
      {children}
    </button>
  )
}

export default AccordionTrigger
