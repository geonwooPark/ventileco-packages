import React, {
  ForwardedRef,
  PropsWithChildren,
  cloneElement,
  forwardRef,
  isValidElement,
  useCallback,
  useMemo,
  useState,
} from 'react'
import AccordionContent from './AccordionContent'
import AccordionTrigger from './AccordionTrigger'
import AccordionItem, { AccordionItemProps } from './AccordionItem'

interface AccordionProps {
  multiple?: boolean
  className?: string
}

function AccordionMain(
  { children, multiple = false, className }: PropsWithChildren<AccordionProps>,
  forwardRef: ForwardedRef<HTMLDivElement>,
) {
  const [activeItems, setActiveItems] = useState<Set<number>>(new Set())

  const handleOpen = useCallback(
    (selectedItem: number) => {
      setActiveItems((prev) => {
        const newItem = new Set(multiple ? prev : [])
        if (prev.has(selectedItem)) {
          newItem.delete(selectedItem)
        } else {
          newItem.add(selectedItem)
        }

        return newItem
      })
    },
    [multiple],
  )

  const childrenWithProps = useMemo(
    () =>
      React.Children.map(children, (child) => {
        if (isValidElement<AccordionItemProps>(child)) {
          return cloneElement(child, {
            isActive: activeItems.has(child.props.value),
            handleOpen: () => handleOpen(child.props.value),
          })
        }
        return child
      }),
    [activeItems, handleOpen, children],
  )

  return (
    <div role="tablist" ref={forwardRef} className={className}>
      {childrenWithProps}
    </div>
  )
}

const Accordion = Object.assign(forwardRef(AccordionMain), {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
})

export default Accordion
