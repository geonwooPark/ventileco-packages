import React, {
  ForwardedRef,
  KeyboardEventHandler,
  PropsWithChildren,
  forwardRef,
  useCallback,
  useId,
  useMemo,
  useRef,
} from 'react'
import TabsContent from './TabsContent'
import TabsItem from './TabsItem'
import { _createContext } from '../../utils/_createContext'
import TabsList from './TabsList'
import TabsIndicator from './TabsIndicator'

interface TabsProps {
  currentTab: any
  onChange: (value: any) => void
  className?: string
}

type TabsContextState = {
  id: string
  currentTab: number
  listRef: React.RefObject<HTMLUListElement>
  onChange: (value: any) => void
  onKeyboardSelect: React.KeyboardEventHandler<HTMLLIElement>
}

export const [useTabsContext, TabsProvider] = _createContext<TabsContextState>()

function TabsMain(
  { children, currentTab, onChange, className }: PropsWithChildren<TabsProps>,
  forwardRef: ForwardedRef<HTMLDivElement>,
) {
  const id = useId()

  const listRef = useRef<HTMLUListElement>(null)

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
    () => ({ id, currentTab, listRef, onChange, onKeyboardSelect }),
    [id, currentTab, listRef],
  )

  return (
    <TabsProvider value={providerValue}>
      <div ref={forwardRef} className={className}>
        {children}
      </div>
    </TabsProvider>
  )
}

const Tabs = Object.assign(forwardRef(TabsMain), {
  List: TabsList,
  Item: TabsItem,
  Indicator: TabsIndicator,
  Content: TabsContent,
})

export default Tabs
