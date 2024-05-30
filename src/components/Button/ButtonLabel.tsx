import React, { PropsWithChildren, useContext } from 'react'
import { ButtonContext } from './Button'

function ButtonLabel({ children }: PropsWithChildren) {
  const { isLoading } = useContext(ButtonContext)

  return isLoading || children
}

export default ButtonLabel
