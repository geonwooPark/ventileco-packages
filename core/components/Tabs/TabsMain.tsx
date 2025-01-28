import React, {
  ForwardedRef,
  HTMLAttributes,
  KeyboardEventHandler,
  PropsWithChildren,
  forwardRef,
  useCallback,
  useId,
  useMemo,
  useRef,
} from 'react'
import TabsItem from './TabsItem'
import { _createContext } from '../../utils/_createContext'
import TabsList from './TabsList'
import TabsIndicator from './TabsIndicator'
import TabsContainer from './TabsContainer'
import TabsContent from './TabsContent'

interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  currentTab: any
  onChange: (value: any) => void
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
  {
    children,
    currentTab,
    onChange,
    ...otherProps
  }: PropsWithChildren<TabsProps>,
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
      <div ref={forwardRef} {...otherProps}>
        {children}
      </div>
    </TabsProvider>
  )
}

const Tabs = Object.assign(forwardRef(TabsMain), {
  Container: TabsContainer,
  List: TabsList,
  Item: TabsItem,
  Indicator: TabsIndicator,
  Content: TabsContent,
})

export default Tabs
