import React, { PropsWithChildren, forwardRef, useId, useMemo } from 'react'
import TabsItem from './TabsItem'
import { _createContext } from '../../utils/_createContext'
import TabsList from './TabsList'
import TabsIndicator from './TabsIndicator'
import TabsContent from './TabsContent'
import TabsContainer from './TabsContainer'
import TabsPanel from './TabsPanel'

type ActionState = {
  onChange: (value: any) => void
}

export const [useActionContext, ActionProvider] = _createContext<ActionState>()
export const [useTabContext, TabProvider] = _createContext<number>()
export const [useIdContext, IdProvider] = _createContext<string>()

interface TabsProps {
  currentTab: number
  onChange: (value: number) => void
  className?: string
}

const TabsMain = forwardRef<HTMLDivElement, PropsWithChildren<TabsProps>>(
  function TabsMain({ children, currentTab, onChange, className }, ref) {
    const id = useId()

    const actions = useMemo(() => ({ onChange }), [onChange])

    return (
      <ActionProvider value={actions}>
        <TabProvider value={currentTab}>
          <IdProvider value={id}>
            <div ref={ref} className={className}>
              {children}
            </div>
          </IdProvider>
        </TabProvider>
      </ActionProvider>
    )
  },
)

const Tabs = Object.assign(TabsMain, {
  Container: TabsContainer,
  List: TabsList,
  Item: TabsItem,
  Content: TabsContent,
  Panel: TabsPanel,
  Indicator: TabsIndicator,
})

export default Tabs
