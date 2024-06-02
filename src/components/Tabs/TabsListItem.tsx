import React, { KeyboardEventHandler, useContext } from 'react'
import { TabsContext } from './Tabs'

interface TabsListItemProps {
  children: (props: { selected: boolean }) => React.ReactNode
  index: number
}

function TabsListItem({ children, index }: TabsListItemProps) {
  const { currentTab, onClick } = useContext(TabsContext)
  const selected = index === currentTab

  const onKeyboardSelect: KeyboardEventHandler<HTMLLIElement> = (e) => {
    const element = e.target as HTMLElement

    if (e.key === 'ArrowRight') {
      e.preventDefault()
      if (!element.nextSibling) return

      const nextChildNode = element.nextSibling as HTMLElement
      if (nextChildNode) {
        nextChildNode.focus()
        onClick(index + 1)
      }
    }

    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      if (!element.previousSibling) return

      const prevChildNode = element.previousSibling as HTMLElement
      if (prevChildNode) {
        prevChildNode.focus()
        onClick(index - 1)
      }
    }
  }

  return (
    <li
      className="w-full cursor-pointer"
      tabIndex={0}
      onKeyDown={onKeyboardSelect}
      onClick={() => onClick(index)}
    >
      {children({ selected })}
    </li>
  )
}

export default TabsListItem
