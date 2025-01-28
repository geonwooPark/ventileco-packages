import React, { PropsWithChildren, useMemo } from 'react'
import { TOAST_POSITION } from '../../constants'
import { useToastContext } from './ToastProvider'

function ToastList({ children }: PropsWithChildren) {
  const { position } = useToastContext()

  const toastListStyle = useMemo(
    () =>
      ({
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        position: 'fixed',
        zIndex: '500',
        ...TOAST_POSITION[position],
      }) as React.CSSProperties,
    [position],
  )

  return (
    <div role="group" aria-live="assertive" style={toastListStyle}>
      {children}
    </div>
  )
}

export default ToastList
