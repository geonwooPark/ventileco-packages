import React, { PropsWithChildren, useContext } from 'react'
import { SelectContext } from './SelectBox'

function SelectBoxTriggerText({ children }: PropsWithChildren) {
  const { selectedItem } = useContext(SelectContext)

  return <div className="mr-2">{selectedItem || children}</div>
}

export default SelectBoxTriggerText
