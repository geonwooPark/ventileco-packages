import { PropsWithChildren, useMemo } from 'react'
import { useTabsContext } from './TabsMain'

interface TabsListProps {
  className?: string
}

function TabsList({ children, className }: PropsWithChildren<TabsListProps>) {
  const { listRef } = useTabsContext()

  const listStyle = useMemo(
    () => ({
      display: 'flex',
    }),
    [],
  )

  return (
    <ul role="tablist" ref={listRef} style={listStyle} className={className}>
      {children}
    </ul>
  )
}

export default TabsList
