import React, { createContext, useContext, useMemo } from 'react'
import { AccordionContext } from './Accordion'

interface AccordionItemProps {
  children: (props: { isOpen: boolean }) => React.ReactNode
  value: number
}

type AccordionItemContextState = {
  isOpen: boolean
  value: number
}

export const AccordionItemContext = createContext<AccordionItemContextState>({
  isOpen: false,
  value: 0,
})

function AccordionItem({ children, value }: AccordionItemProps) {
  const { activeItems } = useContext(AccordionContext)
  const isOpen = activeItems.has(value)

  const providerValue = useMemo(() => ({ isOpen, value }), [isOpen, value])

  return (
    <AccordionItemContext.Provider value={providerValue}>
      {children({ isOpen })}
    </AccordionItemContext.Provider>
  )
}

export default AccordionItem
