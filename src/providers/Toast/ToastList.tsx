import React, { PropsWithChildren, useContext } from 'react'
import { TOAST_POSITION } from '../../constants'
import { ToastContext } from './ToastProvider'

function ToastList({ children }: PropsWithChildren) {
  const { position } = useContext(ToastContext)

  return (
    <div className={`fixed z-[500] space-y-4 ${TOAST_POSITION[position]}`}>
      {children}
    </div>
  )
}

export default ToastList
