import React, { PropsWithChildren } from 'react'
import { useIdContext } from './TabsMain'

export interface TabsPanelProps {
  className?: string
  index?: number
}

function TabsPanel({
  children,
  className,
  index,
}: PropsWithChildren<TabsPanelProps>) {
  const id = useIdContext()

  return (
    <div
      id={`${id}-tab-panel-${index}`}
      role="tabpanel"
      aria-labelledby={`${id}-tab-button-${index}`}
      className={className}
    >
      {children}
    </div>
  )
}

export default TabsPanel
