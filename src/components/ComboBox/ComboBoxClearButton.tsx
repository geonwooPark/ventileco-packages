import React, { PropsWithChildren, useContext } from 'react'
import { ComboBoxContext } from './ComboBox'

function ComboBoxClearButton({ children }: PropsWithChildren) {
  const { onClear } = useContext(ComboBoxContext)

  return <div onClick={onClear}>{children}</div>
}

export default ComboBoxClearButton
