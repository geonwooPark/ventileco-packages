import React, {
  KeyboardEventHandler,
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react'
import SelectBoxLabel from './SelectBoxTitle'
import SelectBoxTrigger from './SelectBoxTrigger'
import SelectBoxTriggerText from './SelectBoxTriggerText'
import SelectBoxItem from './SelectBoxItem'
import { OptionList } from '../../types'
import SelectBoxList from './SelectBoxList'

interface SelectBoxProps {
  value: string | undefined
  setValue: (value: string | undefined) => void
  list: OptionList
}

type SelectBoxContextState = {
  id: string
  value: string | undefined
  isOpen: boolean
  triggerRef: React.RefObject<HTMLButtonElement> | null
  listRef: React.RefObject<HTMLUListElement> | null
  focusedItem: string | undefined
  focusedLabel: string
  optionList: OptionList
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  onKeyboardTrigger: KeyboardEventHandler<HTMLButtonElement>
  onSelect: ({ value, disabled }: { value: string; disabled?: boolean }) => void
}

export const SelectContext = createContext<SelectBoxContextState>({
  id: '',
  value: '',
  isOpen: false,
  triggerRef: null,
  listRef: null,
  focusedItem: undefined,
  focusedLabel: '',
  optionList: [],
  setIsOpen: () => null,
  onKeyboardTrigger: () => null,
  onSelect: () => null,
})

function SelectBox({ children, ...props }: PropsWithChildren<SelectBoxProps>) {
  const { value, setValue, list } = props
  const id = useId()

  const [isOpen, setIsOpen] = useState(false)
  const [focusedItem, setFocusedItem] = useState<string>()

  const containerRef = useRef<HTMLFieldSetElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
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
    [setValue],
  )

  const onKeyboardTrigger: KeyboardEventHandler<HTMLButtonElement> =
    useCallback(
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
              prevChildNode =
                prevChildNode.previousSibling as HTMLElement | null
            }
            if (prevChildNode) {
              setFocusedItem(prevChildNode.dataset.value)
            }
          }
        }
      },
      [focusedIndex, onSelect],
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

  useEffect(() => {
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
      if (containerRef.current?.contains(e.target as Node)) return
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
      setIsOpen,
      onKeyboardTrigger,
      onSelect,
    }),
    [
      id,
      value,
      isOpen,
      focusedItem,
      focusedLabel,
      list,
      onKeyboardTrigger,
      onSelect,
    ],
  )

  const selectBoxStyle = useMemo(
    () => ({ position: 'relative' }) as React.CSSProperties,
    [],
  )

  return (
    <SelectContext.Provider value={providerValue}>
      <fieldset ref={containerRef} style={selectBoxStyle}>
        {children}
      </fieldset>
    </SelectContext.Provider>
  )
}

SelectBox.Label = SelectBoxLabel
SelectBox.Trigger = SelectBoxTrigger
SelectBox.TriggerText = SelectBoxTriggerText
SelectBox.List = SelectBoxList
SelectBox.Item = SelectBoxItem

export default SelectBox
