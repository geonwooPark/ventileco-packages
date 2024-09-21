import { ElementType, PropsWithChildren } from 'react'
import { useAccordionItemContext } from './AccordionItem'
import { useAccordionContext } from './AccordionMain'

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

  const Tag = as ? as : 'ul'

  return isOpen ? (
    <Tag
      id={`${id}-accordion-region-${index}`}
      role="region"
      aria-labelledby={`${id}-accordion-button-${index}`}
      hidden={!isOpen}
      className={className}
      {...props}
    >
      {children}
    </Tag>
  ) : null
}
export default AccordionContent
