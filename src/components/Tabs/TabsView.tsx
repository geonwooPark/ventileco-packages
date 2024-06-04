import { PropsWithChildren } from 'react'

interface TabsViewProps {
  className?: string
}

function TabsView({ children, className }: PropsWithChildren<TabsViewProps>) {
  return <div className={className}>{children}</div>
}

export default TabsView
