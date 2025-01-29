import React, { KeyboardEventHandler, useCallback } from 'react'
import { useActionContext, useIdContext, useTabContext } from './TabsMain'

interface TabsItemProps {
  children: (props: { selected: boolean }) => React.ReactNode
  value: any
  className?: string
}

function TabsItem({ children, value, className }: TabsItemProps) {
  const id = useIdContext()

  const currentTab = useTabContext()

  const { onChange } = useActionContext()

  const selected = value === currentTab

  const onFocusElement = (e: React.FocusEvent<HTMLLIElement, Element>) => {
    e.target.scrollIntoView({ behavior: 'smooth', block: 'center' })
    onChange(value)
  }

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

  return (
    <li
      id={`${id}-tab-button-${value}`}
      role="tab"
      tabIndex={0}
      aria-selected={selected}
      aria-controls={`${id}-tab-panel-${value}`}
      onClick={() => onChange(value)}
      onFocus={onFocusElement}
      onKeyDown={onKeyboardSelect}
      className={className}
    >
      {children({ selected })}
    </li>
  )
}

export default TabsItem
