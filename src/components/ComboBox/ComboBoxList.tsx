import React from 'react'
import { useComboBoxContext } from './ComboBoxMain'
import { OptionList } from '../../types'

interface ComboBoxListProps {
  children: (props: { optionList: OptionList }) => React.ReactNode
  className?: string
}

function ComboBoxList({ children, className }: ComboBoxListProps) {
  const { id, isOpen, listRef, optionList } = useComboBoxContext()

  return isOpen ? (
    <ul
      id={`${id}-combobox-list`}
      role="listbox"
      ref={listRef}
      className={className}
    >
      {children({ optionList })}
    </ul>
  ) : null
}

export default ComboBoxList
