import React, { useContext, useMemo } from 'react'
import { ComboBoxContext } from './ComboBox'
import { OptionList } from '../../types'
import { twMerge } from 'tailwind-merge'

interface ComboBoxItemListProps {
  children: (props: { optionList: OptionList }) => React.ReactNode
  className?: string
}

function ComboBoxItemList({ children, className }: ComboBoxItemListProps) {
  const { isOpen, listRef, optionList } = useContext(ComboBoxContext)

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

export default ComboBoxItemList
