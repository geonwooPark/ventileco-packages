import { PropsWithChildren, useContext, useMemo } from 'react'
import { TOAST_POSITION } from '../../constants'
import { ToastContext } from './ToastProvider'

function ToastList({ children }: PropsWithChildren) {
  const { position } = useContext(ToastContext)

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
