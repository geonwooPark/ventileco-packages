import React, { ElementType } from 'react'
import Box from '../Box/Box'

interface AccordionContentProps {
  children: (props: { isActive: boolean }) => React.ReactNode
  className?: string
  as?: ElementType
  id?: string
  isActive?: boolean
}

function AccordionContent({
  children,
  className,
  as,
  id,
  isActive,
  ...otherProps
}: AccordionContentProps) {
  return isActive ? (
    <Box
      as={as || 'ul'}
      id={`${id}-accordion-region`}
      role="region"
      aria-labelledby={`${id}-accordion-button`}
      hidden={!isActive}
      className={className}
      {...otherProps}
    >
      {children({ isActive: !!isActive })}
    </Box>
  ) : null
}
export default AccordionContent
