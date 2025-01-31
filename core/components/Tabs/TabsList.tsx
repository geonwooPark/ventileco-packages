import React, { CSSProperties, PropsWithChildren, useMemo, useRef } from 'react'
import { useActionContext, useTabContext } from './TabsMain'

function TabsList({ children }: PropsWithChildren) {
  const currentTab = useTabContext()

  const { onChange } = useActionContext()

  const listRef = useRef<HTMLUListElement>(null)

  const listToArray = React.Children.map(children, (child, index) =>
    React.isValidElement(child)
      ? React.cloneElement(child as JSX.Element, {
          isActive: currentTab === index,
          index,
          onChange,
        })
      : child,
  )

  const listStyle = useMemo<CSSProperties>(
    () => ({
      display: 'flex',
    }),
    [],
  )

  return (
    <ul role="tablist" ref={listRef} style={listStyle}>
      {listToArray}
    </ul>
  )
}

export default TabsList
