import React, {
  CSSProperties,
  PropsWithChildren,
  useMemo,
  useRef,
  isValidElement,
  cloneElement,
} from 'react'
import { useActionContext, useTabContext } from './TabsMain'
import { TabsItemProps } from './TabsItem'

function TabsList({ children }: PropsWithChildren) {
  const currentTab = useTabContext()

  const { onChange } = useActionContext()

  const listRef = useRef<HTMLUListElement>(null)

  const childrenWithProps = React.Children.map(children, (child, index) => {
    if (isValidElement<TabsItemProps>(child)) {
      return cloneElement(child, {
        isActive: currentTab === index,
        index,
        onChange,
      })
    }
    return child
  })

  const listStyle = useMemo<CSSProperties>(
    () => ({
      display: 'flex',
    }),
    [],
  )

  return (
    <ul role="tablist" ref={listRef} style={listStyle}>
      {childrenWithProps}
    </ul>
  )
}

export default TabsList
