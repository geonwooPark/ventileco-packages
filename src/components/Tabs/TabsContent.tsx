import { PropsWithChildren } from 'react'
import { useTabsContext } from './TabsMain'

interface TabsContentProps {
  index: number
}

function TabsContent({ children, index }: PropsWithChildren<TabsContentProps>) {
  const { id, currentTab } = useTabsContext()

  return currentTab === index ? (
    <div
      id={`${id}-tab-panel-${index}`}
      role="tabpanel"
      aria-labelledby={`${id}-tab-button-${index}`}
    >
      {children}
    </div>
  ) : null
}

export default TabsContent
