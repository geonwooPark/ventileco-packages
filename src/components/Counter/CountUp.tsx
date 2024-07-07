import { PropsWithChildren } from 'react'
import { useCounterContext } from './CounterMain'

interface CountUpProps {
  isDisabled?: boolean
}

function CountUp({ children, isDisabled }: PropsWithChildren<CountUpProps>) {
  const { up } = useCounterContext()

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

export default CountUp
