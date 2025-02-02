import React, { memo, PropsWithChildren } from 'react'
import { useActionsContext } from './CounterMain'

export interface CountDownProps {
  isDisabled?: boolean
}

function CountDown({
  children,
  isDisabled,
}: PropsWithChildren<CountDownProps>) {
  const { down } = useActionsContext()

  return (
    <button
      type="button"
      onClick={down}
      disabled={isDisabled}
      aria-label="Decrease counter"
    >
      {children}
    </button>
  )
}

export default memo(CountDown)
