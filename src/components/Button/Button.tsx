import React, { PropsWithChildren, createContext, useMemo } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import ButtonLabel from './ButtonLabel'
import ButtonIcon from './ButtonIcon'

interface ButtonProps {
  type: 'submit' | 'button'
  className: string
  disabled?: boolean
  isLoading?: boolean
  onClick?: () => void
}

type ButtonContextState = {
  isLoading?: boolean
}

export const ButtonContext = createContext<ButtonContextState>({
  isLoading: false,
})

function Button({
  children,
  disabled,
  isLoading,
  className,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      e.currentTarget.click()
    }
  }

  const updatedClassName =
    isLoading || disabled ? className?.replace(/\bhover:\S+\b/g, '') : className

  const ButtonVariants = useMemo(
    () =>
      cva(`${updatedClassName} flex items-center justify-center`, {
        variants: {
          isLoading: {
            true: `cursor-not-allowed`,
            false: '',
          },
          disabled: {
            true: 'cursor-not-allowed bg-grey',
            false: '',
          },
        },
      }),
    [updatedClassName, isLoading, disabled],
  )

  const buttonClassName = useMemo(
    () => cn(ButtonVariants({ isLoading, disabled })),
    [ButtonVariants, isLoading, disabled],
  )

  const providerValue = useMemo(() => ({ isLoading }), [isLoading])

  return (
    <ButtonContext.Provider value={providerValue}>
      <button
        {...props}
        role="button"
        onKeyDown={onKeyDown}
        disabled={isLoading || disabled}
        className={buttonClassName}
      >
        {children}
      </button>
    </ButtonContext.Provider>
  )
}

Button.Label = ButtonLabel
Button.Icon = ButtonIcon

export default Button
