import React, { useContext, useMemo } from 'react'
import { SelectContext } from './SelectBox'
import { OptionList } from '../../types'
import { twMerge } from 'tailwind-merge'

interface SelectItemListProps {
  children: (props: { optionList: OptionList }) => React.ReactNode
  className?: string
}

function SelectBoxItemList({ children, className }: SelectItemListProps) {
  const { isOpen, listRef, optionList } = useContext(SelectContext)

  const newClassName = useMemo(
    () =>
      twMerge(
        'absolute z-[200] mt-1 max-h-[240px] w-full overflow-hidden overflow-y-scroll rounded-md border bg-white ',
        className,
      ),
    [className],
  )

  return isOpen ? (
    <ul role="list" ref={listRef} className={newClassName}>
      {children({ optionList })}
    </ul>
  ) : null
}

export default SelectBoxItemList
