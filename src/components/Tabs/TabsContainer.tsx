import React, { PropsWithChildren, useMemo } from 'react'

interface TabsContainerProps {
  className?: string
}

function TabsContainer({
  children,
  className,
}: PropsWithChildren<TabsContainerProps>) {
  const containerStyle = useMemo<React.CSSProperties>(
    () => ({
      overflowX: 'scroll',
    }),
    [],
  )

  return (
    <div className={className} style={containerStyle}>
      {children}
    </div>
  )
}

export default TabsContainer
