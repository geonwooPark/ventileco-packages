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
import ComboBoxTitle from './ComboBoxTitle'
import ComboBoxTrigger from './ComboBoxTrigger'
import ComboBoxInput from './ComboBoxInput'
import ComboBoxItem from './ComboBoxItem'
import ComboBoxClearButton from './ComboBoxClearButton'
import ComboBoxList from './ComboBoxList'
import { Option, OptionList, PolymorphicRef, TitleElement } from '../../types'
import { escapeRegExp } from '../../utils/escapeRegExp'
import { _createContext } from '../../utils/_createContext'

type ComboBoxMainProps<T extends ElementType> = {
  as?: T extends 'div' | 'fieldset' ? T : never
  children?: ReactNode
  value: string | undefined
  setValue: (value: string | undefined) => void
  list: OptionList
} & React.ComponentPropsWithoutRef<T>

// type ComboBoxMainComponent = <T extends ElementType>(
//   props: ComboBoxMainProps<T> & {
//     ref?: React.ComponentPropsWithRef<T>['ref']
//   },
// ) => ReactNode

type ComboBoxContextState = {
  id: string
  value: string | undefined
  list: OptionList
  isOpen: boolean
  keyword: string
  triggerRef: React.RefObject<HTMLDivElement> | null
  listRef: React.RefObject<HTMLUListElement> | null
  inputRef: React.RefObject<HTMLInputElement> | null
  focusedItem: string | undefined
  optionList: OptionList
  Title: TitleElement
  onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onTrigger: () => void
  onClear: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onSelect: ({
    value,
    label,
    disabled,
  }: {
    value: string
    label: string
    disabled?: boolean
  }) => void
  onKeyboardTrigger: KeyboardEventHandler<HTMLDivElement>
}

export const [useComboBoxContext, ComboBoxProvider] =
  _createContext<ComboBoxContextState>()

const ComboBoxMain = forwardRef(function ComboBoxMain<T extends ElementType>(
  { as, children, value, setValue, list }: ComboBoxMainProps<T>,
  ref: PolymorphicRef<T>,
) {
  const Element = as || 'div'
  const Title: TitleElement = Element === 'fieldset' ? 'legend' : 'label'

  const id = useId()

  const [isOpen, setIsOpen] = useState(false)
  const [keyword, setKeyword] = useState<string>('')
  const [focusedItem, setFocusedItem] = useState<string>()
  const [optionList, setOptionList] = useState(list)

  const triggerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const focusedIndex = useMemo(
    () => optionList.findIndex((r) => r.value === focusedItem),
    [optionList, focusedItem],
  )

  const onTextChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }, [])

  const onTrigger = useCallback(() => {
    setIsOpen((prev) => {
      if (!inputRef?.current) return false

      if (prev) {
        inputRef.current.blur()
        return false
      } else {
        inputRef.current.focus()
        return true
      }
    })
  }, [])

  const onClear = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.stopPropagation()

      setIsOpen(false)
      setValue(undefined)
      setKeyword('')
      setFocusedItem(undefined)
    },
    [],
  )

  const onSelect = useCallback(({ value, label, disabled }: Option) => {
    if (disabled) return

    setIsOpen(false)
    setValue(value)
    setKeyword(label)
    setFocusedItem(value)
  }, [])

  const onKeyboardTrigger: KeyboardEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      if (e.nativeEvent.isComposing) return

      if (e.key !== 'Tab') {
        setIsOpen(true)
      }

      const nodesList = listRef?.current?.childNodes
      if (nodesList) {
        const element = nodesList[focusedIndex] as HTMLElement

        if (e.key === 'Enter') {
          e.preventDefault()
          onSelect({
            value: element.dataset.value as string,
            label: element.dataset.label as string,
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

    setOptionList(list)
  }, [isOpen])

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
  }, [isOpen, focusedIndex, optionList])

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
      if (inputRef.current?.contains(e.target as Node)) return

      setKeyword(value || '')
      setIsOpen(false)
    }

    document.addEventListener('click', onOutsideClick)
    return () => document.removeEventListener('click', onOutsideClick)
  }, [isOpen, value])

  useEffect(() => {
    const escapedKeyword = escapeRegExp(keyword)
    const regex = new RegExp(escapedKeyword, 'i')
    const getFilteredData = () => {
      const filteredData = list.filter((item) => regex.test(item.label))
      setOptionList(filteredData)
    }
    getFilteredData()
  }, [keyword])

  const providerValue = useMemo(
    () => ({
      id,
      value,
      list,
      isOpen,
      keyword,
      triggerRef,
      listRef,
      inputRef,
      focusedItem,
      optionList,
      Title,
      onTextChange,
      onTrigger,
      onClear,
      onSelect,
      onKeyboardTrigger,
    }),
    [
      id,
      value,
      list,
      isOpen,
      keyword,
      triggerRef,
      listRef,
      inputRef,
      focusedItem,
      optionList,
      Title,
    ],
  )

  const comboBoxStyle = useMemo(
    () => ({ position: 'relative' }) as React.CSSProperties,
    [],
  )

  return (
    <ComboBoxProvider value={providerValue}>
      <Element id={`${id}_combobox`} ref={ref} style={comboBoxStyle}>
        {children}
      </Element>
    </ComboBoxProvider>
  )
})

const ComboBox = Object.assign(ComboBoxMain, {
  Title: ComboBoxTitle,
  Trigger: ComboBoxTrigger,
  Input: ComboBoxInput,
  ClearButton: ComboBoxClearButton,
  List: ComboBoxList,
  Item: ComboBoxItem,
})

export default ComboBox
