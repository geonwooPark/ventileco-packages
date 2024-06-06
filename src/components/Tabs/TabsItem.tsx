import React, { useContext } from 'react'
import { TabsContext } from './Tabs'

interface TabsItemProps {
  children: (props: { selected: boolean }) => React.ReactNode
  index: number
  className?: string
}

function TabsItem({ children, index, className }: TabsItemProps) {
  const { id, currentTab, onClick, onFocus, onKeyboardSelect } =
    useContext(TabsContext)
  const selected = index === currentTab

  const onFocusElement = (e: React.FocusEvent<HTMLLIElement, Element>) => {
    e.target.scrollIntoView({ behavior: 'smooth', block: 'center' })
    onFocus(index)
  }

  return (
    <li
      id={`${id}-content-${index}`}
      role="tab"
      tabIndex={0}
      aria-selected={selected}
      aria-labelledby={`${id}-tab-${index}`}
      onClick={() => onClick(index)}
      onFocus={onFocusElement}
      onKeyDown={onKeyboardSelect}
      className={className}
    >
      {children({ selected })}
    </li>
  )
}

export default TabsItem
