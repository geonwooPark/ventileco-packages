import { PropsWithChildren, useContext } from 'react'
import { TOAST_POSITION } from '../../constants'
import { ToastContext } from './ToastProvider'

function ToastList({ children }: PropsWithChildren) {
  const { position } = useContext(ToastContext)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        position: 'fixed',
        zIndex: '500',
        ...TOAST_POSITION[position],
      }}
    >
      {children}
    </div>
  )
}

export default ToastList
