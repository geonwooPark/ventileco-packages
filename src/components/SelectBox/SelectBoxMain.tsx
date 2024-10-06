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
import SelectBoxItem from './SelectBoxItem'
import SelectBoxList from './SelectBoxList'
import SelectBoxInput from './SelectBoxInput'

interface SelectBoxMainProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  value: any
  onChange: (value: any) => void
  list: OptionList
}

type SelectBoxContextState = {
  id: string
  value: any
  isOpen: boolean
  listRef: React.RefObject<HTMLUListElement> | null
  inputRef: React.RefObject<HTMLInputElement> | null
  focusedItem: string | undefined
  optionList: OptionList
  onTrigger: () => void
  onKeyboardTrigger: KeyboardEventHandler<HTMLDivElement>
  onSelect: ({ value, disabled }: { value: string; disabled?: boolean }) => void
}

export const [useSelectBoxContext, SelectBoxProvider] =
  _createContext<SelectBoxContextState>()

const SelectBoxMain = forwardRef<HTMLDivElement, SelectBoxMainProps>(
  function SelectBoxMain(
    { children, value, onChange, list, onClick, ...otherProps },
    ref,
  ) {
    const id = useId()

    const [isOpen, setIsOpen] = useState(false)

    const [focusedItem, setFocusedItem] = useState<string>(
      value && value.toString(),
    )

    const inputRef = useRef<HTMLInputElement>(null)

    const listRef = useRef<HTMLUListElement>(null)

    const focusedIndex = useMemo(() => {
      const index = list.findIndex((r) => r.value.toString() === focusedItem)
      return index === -1 ? 0 : index
    }, [list, focusedItem])

    const onTrigger = useCallback(() => {
      setIsOpen((prev) => !prev)
    }, [])

    const onSelect = useCallback(
      ({ value, disabled }: { value: string; disabled?: boolean }) => {
        if (disabled) return

        setIsOpen(false)
        setFocusedItem(value.toString())
        onChange(value)
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

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault()

      if (onClick) {
        onClick(e)
      }
    }

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
        const element = document.getElementById(`${id}-selectbox`)
        const listElement = listRef.current

        if (element?.contains(e.target as Node)) return
        if (listElement?.contains(e.target as Node)) return

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
        listRef,
        inputRef,
        focusedItem,
        optionList: list,
        onTrigger,
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
        <div
          id={`${id}-selectbox`}
          ref={ref}
          style={selectBoxStyle}
          onClick={handleClick}
          {...otherProps}
        >
          {children}
        </div>
      </SelectBoxProvider>
    )
  },
)

const SelectBox = Object.assign(SelectBoxMain, {
  Input: SelectBoxInput,
  List: SelectBoxList,
  Item: SelectBoxItem,
})

export default SelectBox
