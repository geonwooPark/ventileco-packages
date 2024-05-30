import React, { useContext } from 'react'
import { ComboBoxContext } from './ComboBox'
import { OptionList } from '../../types'

interface ComboBoxItemListProps {
  children: (props: { optionList: OptionList }) => React.ReactNode
}

function ComboBoxItemList({ children }: ComboBoxItemListProps) {
  const { isOpen, listRef, optionList } = useContext(ComboBoxContext)

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

export default ComboBoxItemList
