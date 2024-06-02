import React, { PropsWithChildren, createContext, useState } from 'react'
import TabsList from './TabsList'
import TabsListItem from './TabsListItem'
import TabsView from './TabsView'
import TabsContent from './TabsContent'

type TabsContextState = {
  currentTab: number
  onClick: (selectedTab: number) => void
}

export const TabsContext = createContext<TabsContextState>({
  currentTab: 0,
  onClick: () => null,
})

function Tabs({ children }: PropsWithChildren) {
  const [currentTab, setCurrentTab] = useState(0)

  const onClick = (selectedTab: number) => {
    setCurrentTab(selectedTab)
  }

  const providerValue = { currentTab, onClick }

  return (
    <TabsContext.Provider value={providerValue}>
      {children}
    </TabsContext.Provider>
  )
}

Tabs.List = TabsList
Tabs.ListItem = TabsListItem
Tabs.View = TabsView
Tabs.Content = TabsContent

export default Tabs
