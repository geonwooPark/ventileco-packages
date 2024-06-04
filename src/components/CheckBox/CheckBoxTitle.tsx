import { PropsWithChildren } from 'react'

function CheckBoxTitle({ children }: PropsWithChildren) {
  return <legend>{children}</legend>
}

export default CheckBoxTitle
