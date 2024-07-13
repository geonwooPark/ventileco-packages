import React from 'react'
import { useSelectBoxContext } from './SelectBoxMain'
import { OptionList } from '../../types'

interface SelectListProps {
  children: (props: { optionList: OptionList }) => React.ReactNode
  motion?: any
  animationProps?: object
  className?: string
}

function SelectBoxList({
  children,
  motion,
  animationProps,
  className,
}: SelectListProps) {
  const { id, isOpen, listRef, optionList } = useSelectBoxContext()

  const Component = motion ? motion['ul'] : 'ul'

  const props = motion
    ? animationProps || {
        variants: {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        },
        initial: 'hidden',
        animate: 'visible',
        viewport: { once: true },
        transition: { duration: 0.3 },
      }
    : {}

  return isOpen ? (
    <Component
      id={`${id}-select-list`}
      ref={listRef}
      role="listbox"
      className={className}
      {...props}
    >
      {children({ optionList })}
    </Component>
  ) : null
}

export default SelectBoxList
