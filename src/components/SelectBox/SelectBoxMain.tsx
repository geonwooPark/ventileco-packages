import React, {
  ElementType,
  KeyboardEventHandler,
  ReactNode,
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { _createContext } from '../../utils/_createContext'
import { OptionList, PolymorphicRef, TitleElement } from '../../types'
import SelectBoxTrigger from './SelectBoxTrigger'
import SelectBoxItem from './SelectBoxItem'
import SelectBoxList from './SelectBoxList'
import SelectBoxTitle from './SelectBoxTitle'
import SelectBoxInput from './SelectBoxInput'

type SelectBoxMainProps<T extends ElementType> = {
  as?: T extends 'div' | 'fieldset' ? T : never
  children?: ReactNode
  value: string | undefined
  setValue: (value: string | undefined) => void
  list: OptionList
} & Omit<
  React.ComponentPropsWithoutRef<T>,
  'as' | 'children' | 'value' | 'setValue' | 'list'
>

type SelectBoxMainComponent = <T extends ElementType>(
  props: SelectBoxMainProps<T> & {
    ref?: React.ComponentPropsWithRef<T>['ref']
  },
) => React.ReactNode

type SelectBoxContextState = {
  id: string
  value: string | undefined
  isOpen: boolean
  triggerRef: React.RefObject<HTMLDivElement> | null
  listRef: React.RefObject<HTMLUListElement> | null
  focusedItem: string | undefined
  focusedLabel: string
  optionList: OptionList
  Title: TitleElement
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  onKeyboardTrigger: KeyboardEventHandler<HTMLDivElement>
  onSelect: ({ value, disabled }: { value: string; disabled?: boolean }) => void
}

export const [useSelectBoxContext, SelectBoxProvider] =
  _createContext<SelectBoxContextState>()

const SelectBoxMain: SelectBoxMainComponent = forwardRef(function SelectBoxMain<
  T extends ElementType,
>(
  { as, children, value, setValue, list }: SelectBoxMainProps<T>,
  ref: PolymorphicRef<T>,
) {
  const Element = as || 'div'
  const Title: TitleElement = Element === 'fieldset' ? 'legend' : 'label'

  const id = useId()

  const [isOpen, setIsOpen] = useState(false)
  const [focusedItem, setFocusedItem] = useState<string>()

  const triggerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const focusedIndex = useMemo(
    () => list.findIndex((r) => r.value === focusedItem),
    [list, focusedItem],
  )

  const focusedLabel = useMemo(
    () => (focusedIndex !== -1 ? list[focusedIndex].label : ''),
    [focusedIndex, list],
  )

  const onSelect = useCallback(
    ({ value, disabled }: { value: string; disabled?: boolean }) => {
      if (disabled) return

      setIsOpen(false)
      setValue(value)
      setFocusedItem(value)
    },
    [],
  )

  const onKeyboardTrigger: KeyboardEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowDown') {
        setIsOpen(true)
      }

      const nodesList = listRef?.current?.childNodes
      if (nodesList) {
        const element = nodesList[focusedIndex] as HTMLElement

        if (e.key === 'Enter') {
          e.preventDefault()
          onSelect({
            value: element.dataset.value as string,
          })
        }

        if (e.key === 'ArrowDown') {
          e.preventDefault()

          if (!element.nextSibling) return

          let nextChildNode = element.nextSibling as HTMLElement | null
          while (nextChildNode && nextChildNode.dataset.disabled === 'true') {
            nextChildNode = nextChildNode.nextSibling as HTMLElement | null
          }
          if (nextChildNode) {
            setFocusedItem(nextChildNode.dataset.value)
          }
        }

        if (e.key === 'ArrowUp') {
          e.preventDefault()

          if (!element.previousSibling) return

          let prevChildNode = element.previousSibling as HTMLElement | null
          while (prevChildNode && prevChildNode.dataset.disabled === 'true') {
            prevChildNode = prevChildNode.previousSibling as HTMLElement | null
          }
          if (prevChildNode) {
            setFocusedItem(prevChildNode.dataset.value)
          }
        }
      }
    },
    [focusedIndex],
  )

  useEffect(() => {
    if (!isOpen) return
    if (!listRef.current) return
    const nodesList = listRef.current.childNodes

    for (let i = 0; i < list?.length; i++) {
      let node: ChildNode
      if (focusedIndex === -1) {
        node = nodesList[i]
      } else {
        node = nodesList[focusedIndex]
      }

      if (node instanceof HTMLElement) {
        if (node.dataset.disabled !== 'true') {
          setFocusedItem(node.dataset.value)
          break
        }
      }
    }
  }, [isOpen, focusedIndex])

  useLayoutEffect(() => {
    if (!isOpen) return
    if (focusedIndex === -1) return

    const childNode = listRef?.current?.childNodes[focusedIndex] as HTMLElement
    if (childNode instanceof HTMLElement) {
      childNode.scrollIntoView({ block: 'nearest' })
    }
  }, [isOpen, focusedIndex])

  useEffect(() => {
    if (!isOpen) return

    const onOutsideClick = (e: MouseEvent) => {
      if (triggerRef.current?.contains(e.target as Node)) return
      if (listRef.current?.contains(e.target as Node)) return

      setIsOpen(false)
    }

    document.addEventListener('click', onOutsideClick)
    return () => document.removeEventListener('click', onOutsideClick)
  }, [isOpen])

  const providerValue = useMemo(
    () => ({
      id,
      value,
      isOpen,
      triggerRef,
      listRef,
      focusedItem,
      focusedLabel,
      optionList: list,
      Title,
      setIsOpen,
      onKeyboardTrigger,
      onSelect,
    }),
    [id, value, isOpen, focusedItem, focusedLabel, list, Title],
  )

  const selectBoxStyle = useMemo(
    () => ({ position: 'relative' }) as React.CSSProperties,
    [],
  )

  return (
    <SelectBoxProvider value={providerValue}>
      <Element id={`${id}_selectbox`} ref={ref} style={selectBoxStyle}>
        {children}
      </Element>
    </SelectBoxProvider>
  )
})

const SelectBox = Object.assign(SelectBoxMain, {
  Title: SelectBoxTitle,
  Trigger: SelectBoxTrigger,
  Input: SelectBoxInput,
  List: SelectBoxList,
  Item: SelectBoxItem,
})

export default SelectBox
