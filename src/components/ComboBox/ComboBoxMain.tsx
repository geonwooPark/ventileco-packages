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
import ComboBoxInput from './ComboBoxInput'
import ComboBoxItem from './ComboBoxItem'
import ComboBoxList from './ComboBoxList'
import { Option, OptionList } from '../../types'
import { escapeRegExp } from '../../utils/escapeRegExp'
import { _createContext } from '../../utils/_createContext'

interface ComboBoxMainProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  value: any
  onChange: (value: any) => void
  list: OptionList
}

type ComboBoxContextState = {
  id: string
  value: any
  list: OptionList
  isOpen: boolean
  keyword: string
  listRef: React.RefObject<HTMLUListElement> | null
  inputRef: React.RefObject<HTMLInputElement> | null
  focusedItem: string | undefined
  optionList: OptionList
  onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onTrigger: () => void
  onClear: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
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
}

export const [useComboBoxContext, ComboBoxProvider] =
  _createContext<ComboBoxContextState>()

const ComboBoxMain = forwardRef<HTMLDivElement, ComboBoxMainProps>(
  function ComboBoxMain(
    { children, value, onChange, list, onClick, ...otherProps },
    ref,
  ) {
    const id = useId()

    const [isOpen, setIsOpen] = useState(false)

    const [keyword, setKeyword] = useState<string>('')

    const [focusedItem, setFocusedItem] = useState<string>(
      value && value.toString(),
    )

    const [optionList, setOptionList] = useState(list)

    const inputRef = useRef<HTMLInputElement>(null)

    const listRef = useRef<HTMLUListElement>(null)

    const focusedIndex = useMemo(() => {
      const index = optionList.findIndex(
        (r) => r.value.toString() === focusedItem,
      )
      return index === -1 ? 0 : index
    }, [optionList, focusedItem])

    const onTextChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value)
      },
      [],
    )

    const onTrigger = useCallback(() => {
      setIsOpen((prev) => {
        if (!inputRef?.current) return false

        if (prev) {
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
        setKeyword('')
        setFocusedItem('')
        onChange(undefined)
      },
      [],
    )

    const onSelect = useCallback(({ value, label, disabled }: Option) => {
      if (disabled) return

      setIsOpen(false)
      setFocusedItem(value.toString())
      setKeyword(label)
      onChange(value)
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
              value: optionList[focusedIndex].value,
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

    useEffect(() => {
      if (!isOpen) return

      setOptionList(list)
    }, [isOpen])

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
    }, [isOpen, focusedIndex, optionList])

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
        const element = document.getElementById(`${id}-combobox`)
        const listElement = listRef.current

        if (element?.contains(e.target as Node)) return
        if (listElement?.contains(e.target as Node)) return

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
        listRef,
        inputRef,
        focusedItem,
        optionList,
        onTextChange,
        onTrigger,
        onClear,
        onSelect,
        onKeyboardTrigger,
      }),
      [id, value, list, isOpen, keyword, focusedItem, optionList],
    )

    const comboBoxStyle = useMemo(
      () => ({ position: 'relative' }) as React.CSSProperties,
      [],
    )

    return (
      <ComboBoxProvider value={providerValue}>
        <div
          id={`${id}-combobox`}
          ref={ref}
          style={comboBoxStyle}
          onClick={handleClick}
          {...otherProps}
        >
          {children}
        </div>
      </ComboBoxProvider>
    )
  },
)

const ComboBox = Object.assign(ComboBoxMain, {
  Input: ComboBoxInput,
  List: ComboBoxList,
  Item: ComboBoxItem,
})

export default ComboBox
