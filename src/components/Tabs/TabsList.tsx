import React, { PropsWithChildren, useMemo } from 'react'
import { useTabsContext } from './TabsMain'

function TabsList({ children }: PropsWithChildren) {
  const { listRef } = useTabsContext()

  const listStyle = useMemo<React.CSSProperties>(
    () => ({
      display: 'flex',
    }),
    [],
  )

  return (
    <ul role="tablist" ref={listRef} style={listStyle}>
      {children}
    </ul>
  )
}

export default TabsList
