import {
  ForwardedRef,
  HTMLAttributes,
  PropsWithChildren,
  forwardRef,
  useCallback,
  useId,
  useMemo,
  useState,
} from 'react'
import AccordionContent from './AccordionContent'
import AccordionTrigger from './AccordionTrigger'
import AccordionItem from './AccordionItem'
import { _createContext } from '../../utils/_createContext'

interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  multiple?: boolean
}

type AccordionContextState = {
  id: string
  activeItems: Set<number>
  handleOpen: (selectedTab: number) => void
}

export const [useAccordionContext, AccordionProvider] =
  _createContext<AccordionContextState>()

function AccordionMain(
  {
    children,
    multiple = false,
    ...otherProps
  }: PropsWithChildren<AccordionProps>,
  forwardRef: ForwardedRef<HTMLDivElement>,
) {
  const id = useId()

  const [activeItems, setActiveItems] = useState<Set<number>>(new Set())

  const handleSingleOpen = useCallback((selectedItem: number) => {
    setActiveItems((prev) => {
      const newItem = new Set(prev)
      if (prev.has(selectedItem)) {
        newItem.delete(selectedItem)
      } else {
        newItem.add(selectedItem)
      }

      return newItem
    })
  }, [])

  const handleMultipleOpen = useCallback((selectedItem: number) => {
    setActiveItems((prev) => {
      const newItem = new Set<number>([])
      if (prev.has(selectedItem)) {
        newItem.delete(selectedItem)
      } else {
        newItem.add(selectedItem)
      }

      return newItem
    })
  }, [])

  const providerValue = useMemo(
    () => ({
      id,
      activeItems,
      handleOpen: multiple ? handleSingleOpen : handleMultipleOpen,
    }),
    [id, activeItems],
  )

  return (
    <AccordionProvider value={providerValue}>
      <div role="tablist" ref={forwardRef} {...otherProps}>
        {children}
      </div>
    </AccordionProvider>
  )
}

const Accordion = Object.assign(forwardRef(AccordionMain), {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
})

export default Accordion
