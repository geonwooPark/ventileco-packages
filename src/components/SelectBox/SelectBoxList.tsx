import React from 'react'
import { useSelectBoxContext } from './SelectBoxMain'
import { OptionList } from '../../types'

interface SelectListProps {
  children: (props: { optionList: OptionList }) => React.ReactNode
  className?: string
}

function SelectBoxList({ children, className }: SelectListProps) {
  const { id, isOpen, listRef, optionList } = useSelectBoxContext()

  return isOpen ? (
    <ul
      id={`${id}-select-list`}
      ref={listRef}
      role="listbox"
      className={className}
    >
      {children({ optionList })}
    </ul>
  ) : null
}

export default SelectBoxList
