import React, {
  CSSProperties,
  PropsWithChildren,
  useCallback,
  useMemo,
} from 'react'
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

  const triggerStyle = useMemo<CSSProperties>(() => ({ width: '100%' }), [])

  return (
    <button
      role="heading"
      id={`${id}-accordion-button-${index}`}
      aria-expanded={isOpen}
      aria-controls={`${id}-accordion-region-${index}`}
      onMouseDown={onMouseDown}
      onKeyDown={onKeyDown}
      style={triggerStyle}
      className={className}
    >
      {children}
    </button>
  )
}

export default AccordionTrigger
