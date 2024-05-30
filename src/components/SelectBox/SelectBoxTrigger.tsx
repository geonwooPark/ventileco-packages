import React, { PropsWithChildren, useContext } from 'react'
import { SelectContext } from './SelectBox'

function SelectBoxTrigger({ children }: PropsWithChildren) {
  const { triggerRef, setIsOpen, onKeyboardTrigger } = useContext(SelectContext)

  return (
    <div
      ref={triggerRef}
      onKeyDown={onKeyboardTrigger}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      {children}
    </div>
  )
}

export default SelectBoxTrigger
