import { PropsWithChildren, useMemo } from 'react'
import { useToastContext } from './ToastProvider'

interface ToastUIProps {
  id: number
  motion?: any
  animationProps?: object
}

function ToastWrapper({
  children,
  id,
  motion,
  animationProps,
}: PropsWithChildren<ToastUIProps>) {
  const { removeToast } = useToastContext()

  const Component = motion ? motion['div'] : 'div'

  const props = motion
    ? animationProps || {
        variants: {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        },
        initial: 'hidden',
        animate: 'visible',
        viewport: { once: true },
        transition: { duration: 0.3 },
      }
    : {}

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      removeToast(id)
    }
  }

  const toastWrapperStyle = useMemo(() => ({ cursor: 'pointer' }), [])

  return (
    <Component
      role="alert"
      tabIndex={0}
      aria-atomic="true"
      onClick={() => removeToast(id)}
      onKeyDown={onKeyDown}
      style={toastWrapperStyle}
      {...props}
    >
      {children}
    </Component>
  )
}

export default ToastWrapper
