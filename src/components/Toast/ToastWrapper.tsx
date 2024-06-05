import { PropsWithChildren, useContext } from 'react'
import { ToastContext } from './ToastProvider'

interface ToastUIProps {
  id: number
}

function ToastWrapper({ children, id }: PropsWithChildren<ToastUIProps>) {
  const { removeToast } = useContext(ToastContext)

  return (
    <div onClick={() => removeToast(id)} style={{ cursor: 'pointer' }}>
      {children}
    </div>
  )
}

export default ToastWrapper
