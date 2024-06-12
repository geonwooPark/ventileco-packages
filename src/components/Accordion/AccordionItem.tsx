import React, { createContext, useMemo } from 'react'
import { useAccordionContext } from './AccordionMain'

interface AccordionItemProps {
  children: (props: { isOpen: boolean }) => React.ReactNode
  index: number
}

type AccordionItemContextState = {
  isOpen: boolean
  index: number
}

export const AccordionItemContext = createContext<AccordionItemContextState>({
  isOpen: false,
  index: 0,
})

function AccordionItem({ children, index }: AccordionItemProps) {
  const { activeItems } = useAccordionContext()
  const isOpen = activeItems.has(index)

  const providerValue = useMemo(() => ({ isOpen, index }), [isOpen, index])

  return (
    <AccordionItemContext.Provider value={providerValue}>
      {children({ isOpen })}
    </AccordionItemContext.Provider>
  )
}

export default AccordionItem
