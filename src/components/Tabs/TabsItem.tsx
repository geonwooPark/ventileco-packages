import React, { useMemo } from 'react'
import { useTabsContext } from './TabsMain'

interface TabsItemProps {
  children: (props: { selected: boolean }) => React.ReactNode
  value: any
  className?: string
}

function TabsItem({ children, value, className }: TabsItemProps) {
  const { id, currentTab, onChange, onKeyboardSelect } = useTabsContext()
  const selected = value === currentTab

  const onFocusElement = (e: React.FocusEvent<HTMLLIElement, Element>) => {
    e.target.scrollIntoView({ behavior: 'smooth', block: 'center' })
    onChange(value)
  }

  const itemStyle = useMemo(
    () => ({
      flex: 1,
    }),
    [],
  )

  return (
    <li
      id={`${id}-tab-button-${value}`}
      role="tab"
      tabIndex={0}
      aria-selected={selected}
      aria-controls={`${id}-tab-panel-${value}`}
      onClick={() => onChange(value)}
      onFocus={onFocusElement}
      onKeyDown={onKeyboardSelect}
      style={itemStyle}
      className={className}
    >
      {children({ selected })}
    </li>
  )
}

export default TabsItem
