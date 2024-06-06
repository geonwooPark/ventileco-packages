import React, {
  KeyboardEventHandler,
  PropsWithChildren,
  createContext,
  useCallback,
  useId,
  useMemo,
  useState,
} from 'react'
import TabsList from './TabsList'
import TabsView from './TabsView'
import TabsContent from './TabsContent'
import TabsItem from './TabsItem'

type TabsContextState = {
  id: string
  currentTab: number
  onClick: (selectedTab: number) => void
  onFocus: (selectedTab: number) => void
  onKeyboardSelect: React.KeyboardEventHandler<HTMLLIElement>
}

export const TabsContext = createContext<TabsContextState>({
  id: '',
  currentTab: 0,
  onClick: () => null,
  onFocus: () => null,
  onKeyboardSelect: () => null,
})

function Tabs({ children }: PropsWithChildren) {
  const id = useId()

  const [currentTab, setCurrentTab] = useState(0)

  const onClick = useCallback((selectedTab: number) => {
    setCurrentTab(selectedTab)
  }, [])

  const onFocus = useCallback((selectedTab: number) => {
    setCurrentTab(selectedTab)
  }, [])

  const onKeyboardSelect: KeyboardEventHandler<HTMLLIElement> = useCallback(
    (e) => {
      const element = e.target as HTMLElement

      if (e.key === 'ArrowRight') {
        e.preventDefault()
        if (!element.nextSibling) return

        const nextChildNode = element.nextSibling as HTMLElement
        if (nextChildNode) {
          nextChildNode.focus()
        }
      }

      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        if (!element.previousSibling) return

        const prevChildNode = element.previousSibling as HTMLElement
        if (prevChildNode) {
          prevChildNode.focus()
        }
      }
    },
    [],
  )

  const providerValue = useMemo(
    () => ({ id, currentTab, onClick, onFocus, onKeyboardSelect }),
    [id, currentTab, onClick, onFocus, onKeyboardSelect],
  )

  return (
    <TabsContext.Provider value={providerValue}>
      {children}
    </TabsContext.Provider>
  )
}

Tabs.List = TabsList
Tabs.Item = TabsItem
Tabs.View = TabsView
Tabs.Content = TabsContent

export default Tabs
