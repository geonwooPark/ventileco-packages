import React, { ElementType } from 'react'
import { useComboBoxContext } from './ComboBoxMain'
import { OptionList } from '../../types'
import Box from '../Box/Box'

interface ComboBoxListProps {
  children: (props: { optionList: OptionList }) => React.ReactNode
  as?: ElementType
  className?: string
}

function ComboBoxList({
  children,
  as,
  className,
  ...otherProps
}: ComboBoxListProps) {
  const { id, isOpen, listRef, optionList } = useComboBoxContext()

  return isOpen ? (
    <Box
      as={as || 'ul'}
      id={`${id}-combobox-list`}
      ref={listRef}
      role="listbox"
      className={className}
      {...otherProps}
    >
      {children({ optionList })}
    </Box>
  ) : null
}

export default ComboBoxList
