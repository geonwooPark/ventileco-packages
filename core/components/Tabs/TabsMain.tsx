import React, {
  HTMLAttributes,
  PropsWithChildren,
  forwardRef,
  memo,
  useId,
  useMemo,
} from 'react'
import TabsItem from './TabsItem'
import { _createContext } from '../../utils/_createContext'
import TabsList from './TabsList'
import TabsIndicator from './TabsIndicator'
import TabsContent from './TabsContent'
import TabsContainer from './TabsContainer'

type ActionState = {
  onChange: (value: any) => void
}

export const [useActionContext, ActionProvider] = _createContext<ActionState>()
export const [useTabContext, TabProvider] = _createContext<number>()
export const [useIdContext, IdProvider] = _createContext<string>()

interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  currentTab: any
  onChange: (value: any) => void
}

const TabsMain = forwardRef<HTMLDivElement, PropsWithChildren<TabsProps>>(
  function TabsMain({ children, currentTab, onChange, ...otherProps }, ref) {
    const id = useId()

    const actions = useMemo(() => ({ onChange }), [onChange])

    return (
      <ActionProvider value={actions}>
        <TabProvider value={currentTab}>
          <IdProvider value={id}>
            <div ref={ref} {...otherProps}>
              {children}
            </div>
          </IdProvider>
        </TabProvider>
      </ActionProvider>
    )
  },
)

const Tabs = Object.assign(TabsMain, {
  Container: memo(TabsContainer),
  List: memo(TabsList),
  Item: TabsItem,
  Content: TabsContent,
  Indicator: TabsIndicator,
})

export default Tabs
