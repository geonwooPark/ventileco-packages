import { PropsWithChildren, useCallback } from 'react'
import { useAccordionContext } from './AccordionMain'
import { useAccordionItemContext } from './AccordionItem'

interface AccordionTriggerProps {
  className?: string
}

function AccordionTrigger({
  children,
  className,
}: PropsWithChildren<AccordionTriggerProps>) {
  const { id, handleOpen } = useAccordionContext()
  const { index, isOpen } = useAccordionItemContext()

  const onMouseDown = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault()
      handleOpen(index)
    },
    [],
  )

  const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleOpen(index)
    }
  }, [])

  return (
    <button
      role="heading"
      id={`${id}-accordion-button-${index}`}
      aria-expanded={isOpen}
      aria-controls={`${id}-accordion-region-${index}`}
      onMouseDown={onMouseDown}
      onKeyDown={onKeyDown}
      className={className}
    >
      {children}
    </button>
  )
}

export default AccordionTrigger
