import { PropsWithChildren, useContext } from 'react'
import { TabsContext } from './Tabs'

interface TabsContentProps {
  index: number
}

function TabsContent({ children, index }: PropsWithChildren<TabsContentProps>) {
  const { id, currentTab } = useContext(TabsContext)

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
