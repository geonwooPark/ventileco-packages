import React, { PropsWithChildren, useContext } from 'react'
import { TabsContext } from './Tabs'

interface TabsContentProps {
  index: number
}

function TabsContent({ children, index }: PropsWithChildren<TabsContentProps>) {
  const { currentTab } = useContext(TabsContext)

  return currentTab === index ? children : null
}

export default TabsContent
