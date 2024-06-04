import { PropsWithChildren, useContext } from 'react'
import { SelectContext } from './SelectBox'

function SelectBoxTriggerText({ children }: PropsWithChildren) {
  const { selectedItem } = useContext(SelectContext)

  return <div style={{ marginRight: '8px' }}>{selectedItem || children}</div>
}

export default SelectBoxTriggerText
