import React, { useContext } from 'react'
import { ComboBoxContext } from './ComboBox'
import { OptionList } from '../../types'

interface ComboBoxListProps {
  children: (props: { optionList: OptionList }) => React.ReactNode
  className?: string
}

function ComboBoxList({ children, className }: ComboBoxListProps) {
  const { isOpen, listRef, optionList } = useContext(ComboBoxContext)

  return isOpen ? (
    <ul role="list" ref={listRef} className={className}>
      {children({ optionList })}
    </ul>
  ) : null
}

export default ComboBoxList
