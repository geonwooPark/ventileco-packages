import { PropsWithChildren } from 'react'
import { useTabsContext } from './TabsMain'

interface TabsContentProps {
  className?: string
}

function TabsContent({
  children,
  className,
}: PropsWithChildren<TabsContentProps>) {
  const { id, currentTab } = useTabsContext()

  return (
    <div
      id={`${id}-tab-panel-${currentTab}`}
      role="tabpanel"
      aria-labelledby={`${id}-tab-button-${currentTab}`}
      className={className}
    >
      {children}
    </div>
  )
}

export default TabsContent
