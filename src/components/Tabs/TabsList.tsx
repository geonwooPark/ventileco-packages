import React, { PropsWithChildren, useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

interface TabsListProps {
  className?: string
}

function TabsList({ children, className }: PropsWithChildren<TabsListProps>) {
  const newClassName = useMemo(() => twMerge('flex', className), [className])

  return <ul className={newClassName}>{children}</ul>
}

export default TabsList
