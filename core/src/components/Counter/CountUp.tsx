import React, { memo, PropsWithChildren } from 'react'
import { useActionsContext } from './CounterMain'

export interface CountUpProps {
  isDisabled?: boolean
}

function CountUp({ children, isDisabled }: PropsWithChildren<CountUpProps>) {
  const { up } = useActionsContext()

  return (
    <button
      type="button"
      onClick={up}
      disabled={isDisabled}
      aria-label="Increase counter"
    >
      {children}
    </button>
  )
}

export default memo(CountUp)
