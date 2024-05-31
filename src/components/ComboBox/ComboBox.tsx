import React, {
  KeyboardEventHandler,
  PropsWithChildren,
  createContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import ComboBoxLabel from './ComboBoxLabel'
import ComboBoxTrigger from './ComboBoxTrigger'
import ComboBoxInput from './ComboBoxInput'
import ComboBoxItemList from './ComboBoxItemList'
import { escapeRegExp } from '../../utils/escapeRegExp'
import ComboBoxItem from './ComboBoxItem'
import { OptionList } from '../../types'
import { focusedStyle } from '../../constants'
import ComboBoxClearButton from './ComboBoxClearButton'
import ComboBoxArrowButton from './ComboBoxArrowButton'

export type ComboBoxProps = {
  value: string | undefined
  setValue: (value: string | undefined) => void
  list: OptionList
}

type ComboBoxContextState = {
  value: string | undefined
  isOpen: boolean
  keyword: string
  selectedItem: string | undefined
  triggerRef: React.RefObject<HTMLDivElement> | null
  listRef: React.RefObject<HTMLUListElement> | null
  inputRef: React.RefObject<HTMLInputElement> | null
  focusedIndex: number | undefined
  optionList: OptionList
  onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onTrigger: () => void
  onClear: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
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
  onKeyboardSelect: React.KeyboardEventHandler<HTMLLIElement>
}

export const ComboBoxContext = createContext<ComboBoxContextState>({
  value: '',
  isOpen: false,
  keyword: '',
  selectedItem: '',
  triggerRef: null,
  listRef: null,
  inputRef: null,
  focusedIndex: undefined,
  optionList: [],
  onTextChange: () => null,
  onClear: () => null,
  onTrigger: () => null,
  onSelect: () => null,
  onKeyboardTrigger: () => null,
  onKeyboardSelect: () => null,
})

function ComboBox({ children, ...props }: PropsWithChildren<ComboBoxProps>) {
  const { value, setValue, list } = props

  const [isOpen, setIsOpen] = useState(false)
  const [keyword, setKeyword] = useState<string>('')
  const [selectedItem, setSelectedItem] = useState<string>()
  const [focusedIndex, setFocusedIdx] = useState<number>()
  const [optionList, setOptionList] = useState(list)

  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setKeyword(value)
  }

  const onTrigger = () => {
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
    setOptionList(list)
  }

  const onClear = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()

    setIsOpen(false)
    setValue(undefined)
    setKeyword('')
    setSelectedItem('')
    setFocusedIdx(undefined)
  }

  const onKeyboardTrigger: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.nativeEvent.isComposing) return

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setIsOpen(true)

      const nodesList = listRef?.current?.childNodes
      if (!nodesList) return

      if (nodesList.length === list.length) {
        for (let i = 0; i < list?.length; i++) {
          let node: ChildNode
          if (typeof focusedIndex === 'undefined') {
            node = nodesList[i]
          } else {
            node = nodesList[focusedIndex]
          }

          if (node instanceof HTMLElement) {
            if (node.dataset.disabled !== 'true') {
              node.focus()
              node.classList.add(focusedStyle)
              break
            }
          }
        }
      } else {
        for (let i = 0; i < nodesList?.length; i++) {
          const node = nodesList[i]
          if (node instanceof HTMLElement) {
            if (node.dataset.disabled !== 'true') {
              node.focus()
              node.classList.add(focusedStyle)
              break
            }
          }
        }
      }
    }
  }

  const onSelect = ({
    value,
    label,
    disabled,
  }: {
    value: string
    label: string
    disabled?: boolean
  }) => {
    if (disabled) return

    const findIdx = list.findIndex((item) => item.value === value)

    setIsOpen(false)
    setValue(value)
    setKeyword(label)
    setSelectedItem(label)
    setFocusedIdx(findIdx)
  }

  const onKeyboardSelect: KeyboardEventHandler<HTMLLIElement> = (e) => {
    e.preventDefault()
    const element = e.target as HTMLElement

    if (e.key === 'Enter') {
      onSelect({
        value: element.dataset.value as string,
        label: element.dataset.label as string,
      })
    }

    if (e.key === 'ArrowDown') {
      if (!element.nextSibling) return

      let nextChildNode = element.nextSibling as HTMLElement | null
      while (nextChildNode && nextChildNode.dataset.disabled === 'true') {
        nextChildNode = nextChildNode.nextSibling as HTMLElement | null
      }
      if (nextChildNode) {
        nextChildNode.focus()
        nextChildNode.classList.add(focusedStyle)
        element.classList.remove(focusedStyle)
      }
    }

    if (e.key === 'ArrowUp') {
      if (!element.previousSibling) return

      let prevChildNode = element.previousSibling as HTMLElement | null
      while (prevChildNode && prevChildNode.dataset.disabled === 'true') {
        prevChildNode = prevChildNode.previousSibling as HTMLElement | null
      }
      if (prevChildNode) {
        prevChildNode.focus()
        prevChildNode.classList.add(focusedStyle)
        element.classList.remove(focusedStyle)
      }
    }
  }

  useEffect(() => {
    const escapedKeyword = escapeRegExp(keyword)
    const regex = new RegExp(escapedKeyword, 'i')
    const getFilteredData = () => {
      const filteredData = list.filter((item) => regex.test(item.label))
      setOptionList(filteredData)
    }

    const timer = setTimeout(() => getFilteredData(), 300)

    return () => clearTimeout(timer)
  }, [keyword])

  useEffect(() => {
    if (!isOpen) return

    const onOutsideClick = (e: MouseEvent) => {
      if (containerRef.current?.contains(e.target as Node)) return
      setKeyword(selectedItem || '')
      setIsOpen(false)
    }

    document.addEventListener('click', onOutsideClick)
    return () => document.removeEventListener('click', onOutsideClick)
  }, [isOpen])

  useEffect(() => {
    if (!focusedIndex) return

    const childNode = listRef?.current?.childNodes[focusedIndex] as HTMLElement
    if (childNode instanceof HTMLElement) {
      childNode.scrollIntoView()
    }
  }, [isOpen])

  const providerValue = {
    value,
    isOpen,
    keyword,
    selectedItem,
    triggerRef,
    listRef,
    inputRef,
    focusedIndex,
    optionList,
    onTextChange,
    onTrigger,
    onClear,
    onSelect,
    onKeyboardTrigger,
    onKeyboardSelect,
  }

  return (
    <ComboBoxContext.Provider value={providerValue}>
      <div ref={containerRef} className="relative">
        {children}
      </div>
    </ComboBoxContext.Provider>
  )
}

ComboBox.Label = ComboBoxLabel
ComboBox.Trigger = ComboBoxTrigger
ComboBox.Input = ComboBoxInput
ComboBox.ClearButton = ComboBoxClearButton
ComboBox.ArrowButton = ComboBoxArrowButton
ComboBox.List = ComboBoxItemList
ComboBox.Item = ComboBoxItem

export default ComboBox
