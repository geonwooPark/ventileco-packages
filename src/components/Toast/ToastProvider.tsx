import React, { useCallback, useMemo, useState } from 'react'
import { ToastPosition, ToastType } from '../../types'
import ToastList from './ToastList'
import ToastWrapper from './ToastWrapper'
import { _createContext } from '../../utils/_createContext'

interface ToastProviderProps {
  children: (props: {
    toasts: { type: ToastType; id: number; message: string }[]
  }) => React.ReactNode
  position?: ToastPosition
}

type ToastContextState = {
  addToast: (type: ToastType) => (message: string, duration?: number) => void
  removeToast: (id: number) => void
  position: ToastPosition
}

export const [useToastContext, ToastContextProvider] =
  _createContext<ToastContextState>()

function ToastProvider({ children, position = 'topLeft' }: ToastProviderProps) {
  const [toasts, setToasts] = useState<
    { type: ToastType; id: number; message: string }[]
  >([])

  const addToast = useCallback(
    (type: ToastType) =>
      (message: string, duration: number = 4000) => {
        const id = Date.now()
        setToasts((prevToasts) => [...prevToasts, { id, message, type }])

        setTimeout(() => {
          setToasts((prevToasts) =>
            prevToasts.filter((toast) => toast.id !== id),
          )
        }, duration)
      },
    [],
  )

  const removeToast = useCallback((id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }, [])

  const providerValue = useMemo(
    () => ({ addToast, removeToast, position }),
    [position],
  )

  return (
    <ToastContextProvider value={providerValue}>
      {children({ toasts })}
    </ToastContextProvider>
  )
}

ToastProvider.List = ToastList
ToastProvider.Wrapper = ToastWrapper

export default ToastProvider
