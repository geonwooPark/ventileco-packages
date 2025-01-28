import React, {
  ElementType,
  HTMLAttributes,
  PropsWithChildren,
  useMemo,
} from 'react'
import { useToastContext } from './ToastProvider'

interface ToastWrapperProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType
  toastId: number
}

function ToastWrapper({
  children,
  as,
  toastId,
  ...otherProps
}: PropsWithChildren<ToastWrapperProps>) {
  const Tag = as ? as : 'ul'

  const { removeToast } = useToastContext()

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      removeToast(toastId)
    }
  }

  const toastWrapperStyle = useMemo(() => ({ cursor: 'pointer' }), [])

  return (
    <Tag
      role="alert"
      tabIndex={0}
      aria-atomic="true"
      onClick={() => removeToast(toastId)}
      onKeyDown={onKeyDown}
      style={toastWrapperStyle}
      {...otherProps}
    >
      {children}
    </Tag>
  )
}

export default ToastWrapper
