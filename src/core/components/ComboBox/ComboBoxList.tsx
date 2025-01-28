import React, { ElementType } from 'react'
import { useComboBoxContext } from './ComboBoxMain'
import { OptionList } from '../../types'

interface ComboBoxListProps {
  children: (props: { optionList: OptionList }) => React.ReactNode
  as?: ElementType
  className?: string
}

function ComboBoxList({
  children,
  as,
  className,
  ...otherProps
}: ComboBoxListProps) {
  const { id, isOpen, listRef, optionList } = useComboBoxContext()

  const Tag = as ? as : 'ul'

  return isOpen ? (
    <Tag
      id={`${id}-combobox-list`}
      ref={listRef}
      role="listbox"
      className={className}
      {...otherProps}
    >
      {children({ optionList })}
    </Tag>
  ) : null
}

export default ComboBoxList
