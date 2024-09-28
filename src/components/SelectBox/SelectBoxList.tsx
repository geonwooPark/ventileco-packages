import React, { ElementType } from 'react'
import { useSelectBoxContext } from './SelectBoxMain'
import { OptionList } from '../../types'

interface SelectListProps {
  children: (props: { optionList: OptionList }) => React.ReactNode
  as?: ElementType
  className?: string
}

function SelectBoxList({ children, as, className }: SelectListProps) {
  const { id, isOpen, listRef, optionList } = useSelectBoxContext()

  const Tag = as ? as : 'ul'

  return isOpen ? (
    <Tag
      id={`${id}-select-list`}
      ref={listRef}
      role="listbox"
      className={className}
    >
      {children({ optionList })}
    </Tag>
  ) : null
}

export default SelectBoxList
