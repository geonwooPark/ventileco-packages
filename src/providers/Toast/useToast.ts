import { useContext } from 'react'
import { ToastContext } from './ToastProvider'

export const useToast = () => {
  const { addToast } = useContext(ToastContext)

  return {
    success: addToast('success'),
    info: addToast('info'),
    error: addToast('error'),
  }
}
