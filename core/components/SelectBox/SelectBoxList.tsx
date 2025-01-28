import React, { ElementType } from 'react'
import { useSelectBoxContext } from './SelectBoxMain'
import { OptionList } from '../../types'
import Box from '../Box/Box'

interface SelectListProps {
  children: (props: { optionList: OptionList }) => React.ReactNode
  as?: ElementType
  className?: string
}

function SelectBoxList({
  children,
  as,
  className,
  ...otherProps
}: SelectListProps) {
  const { id, isOpen, listRef, optionList } = useSelectBoxContext()

  return isOpen ? (
    <Box
      as={as || 'ul'}
      id={`${id}-select-list`}
      ref={listRef}
      role="listbox"
      className={className}
      {...otherProps}
    >
      {children({ optionList })}
    </Box>
  ) : null
}

export default SelectBoxList
