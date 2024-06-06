import {
  PropsWithChildren,
  createContext,
  useCallback,
  useId,
  useMemo,
  useState,
} from 'react'
import AccordionContent from './AccordionContent'
import AccordionTrigger from './AccordionTrigger'
import AccordionItem from './AccordionItem'

interface AccordionProps {
  className?: string
}

type AccordionContextState = {
  id: string
  activeItems: Set<number>
  onClick: (selectedTab: number) => void
  onFocus: (selectedTab: number) => void
  onBlur: (selectedTab: number) => void
}

export const AccordionContext = createContext<AccordionContextState>({
  id: '',
  activeItems: new Set(),
  onClick: () => null,
  onFocus: () => null,
  onBlur: () => null,
})

function Accordion({ children, className }: PropsWithChildren<AccordionProps>) {
  const id = useId()

  const [activeItems, setActiveItems] = useState<Set<number>>(new Set())

  const onClick = useCallback((selectedItem: number) => {
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

  const onFocus = useCallback((selectedItem: number) => {
    setActiveItems((prev) => {
      const newItem = new Set(prev)
      if (!prev.has(selectedItem)) {
        newItem.add(selectedItem)
      }

      return newItem
    })
  }, [])

  const onBlur = useCallback((selectedItem: number) => {
    setActiveItems((prev) => {
      const newItem = new Set(prev)
      if (prev.has(selectedItem)) {
        newItem.delete(selectedItem)
      }
      return newItem
    })
  }, [])

  const providerValue = useMemo(
    () => ({ id, activeItems, onClick, onFocus, onBlur }),
    [id, activeItems, onClick, onFocus, onBlur],
  )

  return (
    <AccordionContext.Provider value={providerValue}>
      <div role="tablist" className={className}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

Accordion.Item = AccordionItem
Accordion.Trigger = AccordionTrigger
Accordion.Content = AccordionContent

export default Accordion
