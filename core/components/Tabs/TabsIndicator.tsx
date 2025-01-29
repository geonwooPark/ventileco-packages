import React, {
  CSSProperties,
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

  const updateIndicator = () => {
    if (!indicatorRef.current) return

    const tab = document.getElementById(`${id}-tab-button-${currentTab}`)

    if (tab) {
      const tabRect = tab.getBoundingClientRect()

      setWidth(tabRect.width)

      indicatorRef.current.style.transform = `translateX(${tab.offsetLeft}px)`
    }
  }

  useLayoutEffect(() => {
    updateIndicator()

    window.addEventListener('resize', updateIndicator)

    return () => {
      window.removeEventListener('resize', updateIndicator)
    }
  }, [id, currentTab])

  const indicatorStyle = useMemo<CSSProperties>(
    () => ({
      width: `${width}px`,
      transition: 'transform 0.2s ease',
    }),
    [width],
  )

  return <div ref={indicatorRef} className={className} style={indicatorStyle} />
}
