import React, { PropsWithChildren } from 'react'
import { useTabsContext } from './TabsMain'

interface TabsContentProps {
  value: any
  className?: string
}

function TabsContent({
  children,
  value,
  className,
}: PropsWithChildren<TabsContentProps>) {
  const { id, currentTab } = useTabsContext()

  return value === currentTab ? (
    <div
      id={`${id}-tab-panel-${currentTab}`}
      role="tabpanel"
      aria-labelledby={`${id}-tab-button-${currentTab}`}
      className={className}
    >
      {children}
    </div>
  ) : null
}

export default TabsContent
