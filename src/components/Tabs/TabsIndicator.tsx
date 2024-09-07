import { useLayoutEffect, useMemo, useState } from 'react'
import { useTabsContext } from './TabsMain'

interface TabsIndicatorProps {
  className?: string
}

export default function TabsIndicator({ className }: TabsIndicatorProps) {
  const { id, currentTab, listRef } = useTabsContext()

  const [width, setWidth] = useState<number | undefined>(0)
  const [left, setLeft] = useState<number | undefined>(0)

  useLayoutEffect(() => {
    const tab = document.getElementById(`${id}-tab-button-${currentTab}`)
    const list = listRef.current

    if (tab && list) {
      const tabRect = tab.getBoundingClientRect()
      const listRect = list.getBoundingClientRect()

      setWidth(tabRect.width)
      setLeft(tabRect.left - listRect.left)
    }
  }, [id, currentTab, listRef])

  const indicatorStyle = useMemo(
    () => ({
      width: `${width}px`,
      transform: `translateX(${left}px)`,
      transition: 'transform 0.2s ease',
    }),
    [width, left],
  )

  return <div className={className} style={indicatorStyle} />
}
