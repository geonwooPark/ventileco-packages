import React from 'react'
import { useComboBoxContext } from './ComboBoxMain'
import { OptionList } from '../../types'

interface ComboBoxListProps {
  children: (props: { optionList: OptionList }) => React.ReactNode
  motion?: any
  animationProps?: object
  className?: string
}

function ComboBoxList({
  children,
  motion,
  animationProps,
  className,
}: ComboBoxListProps) {
  const { id, isOpen, listRef, optionList } = useComboBoxContext()

  const Component = motion ? motion['ul'] : 'ul'

  const props = motion
    ? animationProps || {
        variants: {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        },
        initial: 'hidden',
        animate: 'visible',
        viewport: { once: true },
        transition: { duration: 0.3 },
      }
    : {}

  return isOpen ? (
    <Component
      id={`${id}-combobox-list`}
      role="listbox"
      ref={listRef}
      className={className}
      {...props}
    >
      {children({ optionList })}
    </Component>
  ) : null
}

export default ComboBoxList
