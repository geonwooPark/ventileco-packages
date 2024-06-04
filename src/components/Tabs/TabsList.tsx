import { PropsWithChildren } from 'react'

interface TabsListProps {
  className?: string
}

function TabsList({ children, className }: PropsWithChildren<TabsListProps>) {
  return (
    <ul role="tablist" className={className}>
      {children}
    </ul>
  )
}

export default TabsList
