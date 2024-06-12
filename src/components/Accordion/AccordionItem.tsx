import React, { useMemo } from 'react'
import { useAccordionContext } from './AccordionMain'
import { _createContext } from '../../utils/_createContext'

interface AccordionItemProps {
  children: (props: { isOpen: boolean }) => React.ReactNode
  index: number
}

type AccordionItemContextState = {
  isOpen: boolean
  index: number
}

export const [useAccordionItemContext, AccordionItemProvider] =
  _createContext<AccordionItemContextState>()

function AccordionItem({ children, index }: AccordionItemProps) {
  const { activeItems } = useAccordionContext()
  const isOpen = activeItems.has(index)

  const providerValue = useMemo(() => ({ isOpen, index }), [isOpen, index])

  return (
    <AccordionItemProvider value={providerValue}>
      {children({ isOpen })}
    </AccordionItemProvider>
  )
}

export default AccordionItem
