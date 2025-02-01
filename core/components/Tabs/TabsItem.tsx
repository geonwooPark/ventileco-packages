import React, { KeyboardEventHandler, memo, useCallback } from 'react'
import { useIdContext } from './TabsMain'

export interface TabsItemProps {
  children: (props: { isActive: boolean }) => React.ReactNode
  className?: string
  index?: number
  isActive?: boolean
  onChange?: (value: number) => void
}

function TabsItem({
  children,
  className,
  index,
  isActive,
  onChange,
}: TabsItemProps) {
  const id = useIdContext()

  const onFocusElement = (e: React.FocusEvent<HTMLLIElement, Element>) => {
    e.target.scrollIntoView({ behavior: 'smooth', block: 'center' })
    onChange!(index!)
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
      id={`${id}-tab-button-${index}`}
      role="tab"
      tabIndex={0}
      aria-selected={isActive}
      aria-controls={`${id}-tab-panel-${index}`}
      onClick={() => onChange!(index!)}
      onFocus={onFocusElement}
      onKeyDown={onKeyboardSelect}
      className={className}
    >
      {children({ isActive: !!isActive })}
    </li>
  )
}

export default memo(TabsItem, (prev, next) => prev.isActive === next.isActive)
