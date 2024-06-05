import { useContext } from 'react'
import { ToastContext } from './ToastProvider'

const useToast = () => {
  const { addToast } = useContext(ToastContext)

  return {
    success: addToast('success'),
    info: addToast('info'),
    error: addToast('error'),
  }
}

export default useToast
