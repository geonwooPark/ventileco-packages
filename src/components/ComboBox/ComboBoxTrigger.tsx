import React, { PropsWithChildren, useContext } from 'react'
import { ComboBoxContext } from './ComboBox'

function ComboBoxTrigger({ children }: PropsWithChildren) {
  const { onTrigger } = useContext(ComboBoxContext)

  return (
    <div
      role="combobox"
      onClick={onTrigger}
      className="relative cursor-pointer"
    >
      {children}
    </div>
  )
}

export default ComboBoxTrigger
