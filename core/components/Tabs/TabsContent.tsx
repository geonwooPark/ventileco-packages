import React, { cloneElement, isValidElement, PropsWithChildren } from 'react'
import { useTabContext } from './TabsMain'
import { TabsPanelProps } from './TabsPanel'

function TabsContent({ children }: PropsWithChildren) {
  const currentTab = useTabContext()

  const childrenWithProps = React.Children.map(children, (child, index) => {
    if (isValidElement<TabsPanelProps>(child)) {
      return cloneElement(child, {
        index,
      })
    }
    return child
  })

  return childrenWithProps ? childrenWithProps[currentTab] : null
}

export default TabsContent
