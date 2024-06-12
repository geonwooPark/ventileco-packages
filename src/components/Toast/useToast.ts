import { useToastContext } from './ToastProvider'

const useToast = () => {
  const { addToast } = useToastContext()

  return {
    success: addToast('success'),
    info: addToast('info'),
    error: addToast('error'),
  }
}

export default useToast
