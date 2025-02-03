import React, { CSSProperties, PropsWithChildren, useMemo } from 'react'
import { TOAST_POSITION } from './constants'
import { useToastContext } from './ToastProvider'

function ToastList({ children }: PropsWithChildren) {
  const { position } = useToastContext()

  const toastListStyle = useMemo<CSSProperties>(
    () => ({
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      position: 'fixed',
      zIndex: '500',
      ...TOAST_POSITION[position],
    }),
    [position],
  )

  return (
    <div role="group" aria-live="assertive" style={toastListStyle}>
      {children}
    </div>
  )
}

export default ToastList
