import React, { KeyboardEventHandler, useContext } from 'react'
import { TabsContext } from './Tabs'

interface TabsListItemProps {
  children: (props: { selected: boolean }) => React.ReactNode
  index: number
}

function TabsListItem({ children, index }: TabsListItemProps) {
  const { currentTab, onClick, onFocus, onKeyboardSelect } =
    useContext(TabsContext)
  const selected = index === currentTab

  return (
    <li
      className="w-full cursor-pointer"
      tabIndex={0}
      onClick={() => onClick(index)}
      onFocus={() => onFocus(index)}
      onKeyDown={onKeyboardSelect}
    >
      {children({ selected })}
    </li>
  )
}

export default TabsListItem
