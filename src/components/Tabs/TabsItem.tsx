import React from 'react'
import { useTabsContext } from './TabsMain'

interface TabsItemProps {
  children: (props: { selected: boolean }) => React.ReactNode
  index: number
  className?: string
}

function TabsItem({ children, index, className }: TabsItemProps) {
  const { id, currentTab, onClick, onFocus, onKeyboardSelect } =
    useTabsContext()
  const selected = index === currentTab

  const onFocusElement = (e: React.FocusEvent<HTMLLIElement, Element>) => {
    e.target.scrollIntoView({ behavior: 'smooth', block: 'center' })
    onFocus(index)
  }

  return (
    <li
      id={`${id}-tab-button-${index}`}
      role="tab"
      tabIndex={0}
      aria-selected={selected}
      aria-controls={`${id}-tab-panel-${index}`}
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
