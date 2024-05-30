import React, { useContext } from 'react'
import { SelectContext } from './SelectBox'
import { OptionList } from '../../types'

interface SelectItemListProps {
  children: (props: { optionList: OptionList }) => React.ReactNode
}

function SelectBoxItemList({ children }: SelectItemListProps) {
  const { isOpen, listRef, optionList } = useContext(SelectContext)

  return isOpen ? (
    <ul
      role="list"
      ref={listRef}
      className="absolute z-sticky mt-1 max-h-[240px] w-full overflow-hidden overflow-y-scroll rounded-md border bg-white"
    >
      {children({ optionList })}
    </ul>
  ) : null
}

export default SelectBoxItemList
