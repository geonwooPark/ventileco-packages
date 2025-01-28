import React, { ElementType, PropsWithChildren } from 'react'
import { useAccordionItemContext } from './AccordionItem'
import { useAccordionContext } from './AccordionMain'
import Box from '../Box/Box'

interface AccordionContentProps {
  className?: string
  as?: ElementType
}

function AccordionContent({
  children,
  className,
  as,
  ...props
}: PropsWithChildren<AccordionContentProps>) {
  const { id } = useAccordionContext()
  const { isOpen, index } = useAccordionItemContext()

  return isOpen ? (
    <Box
      as={as || 'ul'}
      id={`${id}-accordion-region-${index}`}
      role="region"
      aria-labelledby={`${id}-accordion-button-${index}`}
      hidden={!isOpen}
      className={className}
      {...props}
    >
      {children}
    </Box>
  ) : null
}
export default AccordionContent
