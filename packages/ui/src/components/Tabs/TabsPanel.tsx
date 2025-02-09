import React, { CSSProperties, PropsWithChildren, useMemo } from 'react'
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

  const panelStyle = useMemo<CSSProperties>(
    () => ({
      wordBreak: 'break-word',
      whiteSpace: 'normal',
      overflowWrap: 'break-word',
    }),
    [],
  )

  return (
    <div
      id={`${id}-tab-panel-${index}`}
      role="tabpanel"
      aria-labelledby={`${id}-tab-button-${index}`}
      style={panelStyle}
      className={className}
    >
      {children}
    </div>
  )
}

export default TabsPanel
