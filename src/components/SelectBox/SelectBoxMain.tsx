import React, {
  HTMLAttributes,
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
import { OptionList } from '../../types'
import SelectBoxTrigger from './SelectBoxTrigger'
import SelectBoxItem from './SelectBoxItem'
import SelectBoxList from './SelectBoxList'
import SelectBoxInput from './SelectBoxInput'

interface SelectBoxMainProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  value: any
  setValue: (value: any) => void
  list: OptionList
}

type SelectBoxContextState = {
  id: string
  value: any
  isOpen: boolean
  triggerRef: React.RefObject<HTMLDivElement> | null
  listRef: React.RefObject<HTMLUListElement> | null
  focusedItem: string | undefined
  optionList: OptionList
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  onKeyboardTrigger: KeyboardEventHandler<HTMLDivElement>
  onSelect: ({ value, disabled }: { value: string; disabled?: boolean }) => void
}

export const [useSelectBoxContext, SelectBoxProvider] =
  _createContext<SelectBoxContextState>()

const SelectBoxMain = forwardRef<HTMLDivElement, SelectBoxMainProps>(
  function SelectBoxMain(
    { children, value, setValue, list, ...otherProps },
    ref,
  ) {
    const id = useId()

    const [isOpen, setIsOpen] = useState(false)

    const [focusedItem, setFocusedItem] = useState<string>(
      value && value.toString(),
    )

    const triggerRef = useRef<HTMLDivElement>(null)

    const listRef = useRef<HTMLUListElement>(null)

    const focusedIndex = useMemo(() => {
      const index = list.findIndex((r) => r.value.toString() === focusedItem)
      return index === -1 ? 0 : index
    }, [list, focusedItem])

    const onSelect = useCallback(
      ({ value, disabled }: { value: string; disabled?: boolean }) => {
        if (disabled) return

        setIsOpen(false)
        setFocusedItem(value.toString())
        setValue(value)
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
              value: list[focusedIndex].value,
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
              setFocusedItem(nextChildNode.dataset.value as string)
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
              setFocusedItem(prevChildNode.dataset.value as string)
            }
          }
        }
      },
      [focusedIndex],
    )

    useLayoutEffect(() => {
      if (!isOpen) return
      if (!listRef.current) return

      const nodesList = listRef?.current?.childNodes

      for (let i = 0; i < list?.length; i++) {
        let node: ChildNode
        if (focusedIndex === -1) {
          node = nodesList[i]
        } else {
          node = nodesList[focusedIndex]
        }

        if (node instanceof HTMLElement) {
          if (node.dataset.disabled !== 'true') {
            setFocusedItem(node.dataset.value as string)
            break
          }
        }
      }
    }, [isOpen, focusedIndex])

    useLayoutEffect(() => {
      if (!isOpen) return
      if (focusedIndex === -1) return

      const childNode = listRef?.current?.childNodes[
        focusedIndex
      ] as HTMLElement

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
        optionList: list,
        setIsOpen,
        onKeyboardTrigger,
        onSelect,
      }),
      [id, value, isOpen, focusedItem, list],
    )

    const selectBoxStyle = useMemo<React.CSSProperties>(
      () => ({ position: 'relative' }),
      [],
    )

    return (
      <SelectBoxProvider value={providerValue}>
        <div ref={ref} style={selectBoxStyle} {...otherProps}>
          {children}
        </div>
      </SelectBoxProvider>
    )
  },
)

const SelectBox = Object.assign(SelectBoxMain, {
  Trigger: SelectBoxTrigger,
  Input: SelectBoxInput,
  List: SelectBoxList,
  Item: SelectBoxItem,
})

export default SelectBox
