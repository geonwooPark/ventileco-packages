import React, {
  CSSProperties,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useIdContext, useTabContext } from './TabsMain'

interface TabsIndicatorProps {
  className?: string
}

export default function TabsIndicator({ className }: TabsIndicatorProps) {
  const id = useIdContext()

  const currentTab = useTabContext()

  const [width, setWidth] = useState<number>(0)

  const indicatorRef = useRef<HTMLDivElement | null>(null)

  const updateIndicator = useCallback(() => {
    if (!indicatorRef.current) return

    const tab = document.getElementById(`${id}-tab-button-${currentTab}`)
    const parent = tab?.parentElement

    if (tab && parent) {
      const tabRect = tab.getBoundingClientRect()
      const parentRect = parent?.getBoundingClientRect()

      const diff = tabRect.left - parentRect.left

      indicatorRef.current.style.transform = `translateX(${diff}px)`

      setWidth(tabRect.width)
    }
  }, [currentTab, id])

  useLayoutEffect(() => {
    updateIndicator()

    window.addEventListener('resize', updateIndicator)

    return () => {
      window.removeEventListener('resize', updateIndicator)
    }
  }, [id, currentTab, updateIndicator])

  const indicatorStyle = useMemo<CSSProperties>(
    () => ({
      width: `${width}px`,
      transition: 'transform 0.2s ease',
    }),
    [width],
  )

  return <div ref={indicatorRef} className={className} style={indicatorStyle} />
}
