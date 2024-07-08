import React, {
  ForwardedRef,
  PropsWithChildren,
  ReactNode,
  forwardRef,
  useMemo,
} from 'react'

export interface ButtonProps {
  type: 'submit' | 'button'
  className?: string
  disabled?: boolean
  isLoading?: boolean
  onClick?: () => void
  loadingIcon?: ReactNode
}

function Button(
  {
    children,
    disabled,
    className,
    isLoading,
    loadingIcon,
    ...props
  }: PropsWithChildren<ButtonProps>,
  forwardRef: ForwardedRef<HTMLButtonElement>,
) {
  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      e.currentTarget.click()
    }
  }

  const buttonStyle = useMemo(
    () => ({
      cursor: isLoading || disabled ? 'not-allowed' : undefined,
      backgroundColor: disabled ? '#d1d5db' : undefined,
      color: disabled ? '#9ca3af' : undefined,
      display: 'flex',
      justifyContent: 'center',
    }),
    [disabled],
  )

  return (
    <button
      ref={forwardRef}
      {...props}
      onKeyDown={onKeyDown}
      style={buttonStyle}
      disabled={isLoading || disabled}
      className={className}
      aria-disabled={isLoading || disabled}
      aria-busy={isLoading}
      aria-live={isLoading ? 'polite' : undefined}
    >
      {isLoading && loadingIcon ? loadingIcon : children}
    </button>
  )
}

export default forwardRef(Button)
