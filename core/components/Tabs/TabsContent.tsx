import React, { PropsWithChildren } from 'react'
import { useTabContext } from './TabsMain'

function TabsContent({ children }: PropsWithChildren) {
  const currentTab = useTabContext()

  const listToArray = React.Children.map(children, (child, index) =>
    React.isValidElement(child)
      ? React.cloneElement(child as JSX.Element, {
          index,
        })
      : child,
  )

  return listToArray ? listToArray[currentTab] : null
}

export default TabsContent
