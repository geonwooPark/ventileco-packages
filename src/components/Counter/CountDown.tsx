import { PropsWithChildren } from 'react'
import { useCounterContext } from './CounterMain'

interface CountDownProps {
  isDisabled?: boolean
}

function CountDown({
  children,
  isDisabled,
}: PropsWithChildren<CountDownProps>) {
  const { down } = useCounterContext()

  return (
    <button onClick={down} disabled={isDisabled} aria-label="Decrease counter">
      {children}
    </button>
  )
}

export default CountDown
