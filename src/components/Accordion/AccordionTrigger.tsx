import { PropsWithChildren, useContext } from 'react'
import { AccordionContext } from './Accordion'
import { AccordionItemContext } from './AccordionItem'

function AccordionTrigger({ children }: PropsWithChildren) {
  const { id, activeItems, onClick, onFocus, onBlur } =
    useContext(AccordionContext)
  const { value } = useContext(AccordionItemContext)

  const onMouseDown = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    onClick(value)
  }

  return (
    <button
      id={id + '-tap'}
      tabIndex={0}
      role="tab"
      aria-expanded={activeItems.has(value)}
      aria-controls={id + '-content'}
      onFocus={() => onFocus(value)}
      onBlur={() => onBlur(value)}
      onMouseDown={onMouseDown}
    >
      {children}
    </button>
  )
}

export default AccordionTrigger
