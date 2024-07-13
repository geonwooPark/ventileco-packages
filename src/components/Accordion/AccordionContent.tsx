import { PropsWithChildren } from 'react'
import { useAccordionItemContext } from './AccordionItem'
import { useAccordionContext } from './AccordionMain'

interface AccordionContentProps {
  motion?: any
  animationProps?: object
}

function AccordionContent({
  children,
  motion,
  animationProps,
}: PropsWithChildren<AccordionContentProps>) {
  const { id } = useAccordionContext()
  const { isOpen, index } = useAccordionItemContext()

  const Component = motion ? motion['div'] : 'div'

  const props = motion
    ? animationProps || {
        variants: {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        },
        initial: 'hidden',
        animate: 'visible',
        viewport: { once: true },
        transition: { duration: 0.3 },
      }
    : {}

  return isOpen ? (
    <Component
      id={`${id}-accordion-region-${index}`}
      role="region"
      aria-labelledby={`${id}-accordion-button-${index}`}
      hidden={!isOpen}
      {...props}
    >
      {children}
    </Component>
  ) : null
}
export default AccordionContent
