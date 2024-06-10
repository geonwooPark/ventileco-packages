import React, { useContext } from 'react'
import { ComboBoxContext } from './ComboBoxMain'
import { OptionList } from '../../types'

interface ComboBoxListProps {
  children: (props: { optionList: OptionList }) => React.ReactNode
  className?: string
}

function ComboBoxList({ children, className }: ComboBoxListProps) {
  const { id, isOpen, listRef, optionList } = useContext(ComboBoxContext)

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
