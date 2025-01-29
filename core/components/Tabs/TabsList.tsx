import React, { CSSProperties, PropsWithChildren, useMemo, useRef } from 'react'

function TabsList({ children }: PropsWithChildren) {
  const listRef = useRef<HTMLUListElement>(null)

  const listStyle = useMemo<CSSProperties>(
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
