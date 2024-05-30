import React, {
  KeyboardEventHandler,
  PropsWithChildren,
  createContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import SelectBoxLabel from './SelectBoxLabel'
import SelectBoxTrigger from './SelectBoxTrigger'
import SelectBoxTriggerText from './SelectBoxTriggerText'
import SelectBoxItem from './SelectBoxItem'
import SelectBoxItemList from './SelectBoxItemList'
import { focusedStyle } from '../../constants'
import { OptionList } from '../../types'

interface SelectBoxProps {
  value: string | undefined
  setValue: (value: string | undefined) => void
  list: OptionList
}

type SelectBoxContextState = {
  value: string | undefined
  isOpen: boolean
  selectedItem: string | undefined
  triggerRef: React.RefObject<HTMLDivElement> | null
  listRef: React.RefObject<HTMLUListElement> | null
  focusedIndex: number | undefined
  optionList: OptionList
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  onKeyboardTrigger: KeyboardEventHandler<HTMLDivElement>
  onSelect: ({
    value,
    label,
    disabled,
  }: {
    value: string
    label: string
    disabled?: boolean
  }) => void
  onKeyboardSelect: KeyboardEventHandler<HTMLLIElement>
}

export const SelectContext = createContext<SelectBoxContextState>({
  value: '',
  isOpen: false,
  selectedItem: '',
  triggerRef: null,
  listRef: null,
  focusedIndex: undefined,
  optionList: [],
  setIsOpen: () => null,
  onKeyboardTrigger: () => null,
  onSelect: () => null,
  onKeyboardSelect: () => null,
})

function SelectBox({ children, ...props }: PropsWithChildren<SelectBoxProps>) {
  const { value, setValue, list } = props

  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<string>()
  const [focusedIndex, setFocusedIdx] = useState<number>()

  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const onKeyboardTrigger: KeyboardEventHandler<HTMLDivElement> = (e) => {
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
    setFocusedIdx(findIdx)
    setSelectedItem(label)
    setValue(value)
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
    if (!isOpen) return

    const onOutsideClick = (e: MouseEvent) => {
      if (containerRef.current?.contains(e.target as Node)) return
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
    triggerRef,
    listRef,
    focusedIndex,
    selectedItem,
    optionList: list,
    setIsOpen,
    onKeyboardTrigger,
    onSelect,
    onKeyboardSelect,
  }

  return (
    <SelectContext.Provider value={providerValue}>
      <div ref={containerRef} className="relative">
        {children}
      </div>
    </SelectContext.Provider>
  )
}

SelectBox.Label = SelectBoxLabel
SelectBox.Trigger = SelectBoxTrigger
SelectBox.TriggerText = SelectBoxTriggerText
SelectBox.List = SelectBoxItemList
SelectBox.Item = SelectBoxItem

export default SelectBox
