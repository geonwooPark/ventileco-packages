import React, {
  ForwardedRef,
  HTMLAttributes,
  PropsWithChildren,
  forwardRef,
  useCallback,
  useMemo,
} from 'react'
import { _createContext } from '../../utils/_createContext'
import CountUp from './CountUp'
import CountDown from './CountDown'
import CountNumber from './CountNumber'

export interface CounterMainProps extends HTMLAttributes<HTMLDivElement> {
  value: number
  setValue: React.Dispatch<React.SetStateAction<number>>
  minimum?: number
  maximum?: number
}

type CounterState = {
  number: number
  up: () => void
  down: () => void
}

export const [useCounterContext, CounterProvider] =
  _createContext<CounterState>()

function CounterMain(
  {
    children,
    value: number,
    setValue,
    minimum,
    maximum,
    ...otherProps
  }: PropsWithChildren<CounterMainProps>,
  forwardRef: ForwardedRef<HTMLDivElement>,
) {
  const up = useCallback(() => {
    setValue((prev) =>
      maximum === undefined || prev < maximum ? prev + 1 : prev,
    )
  }, [maximum])

  const down = useCallback(() => {
    setValue((prev) =>
      minimum === undefined || prev > minimum ? prev - 1 : prev,
    )
  }, [minimum])

  const providerValue = useMemo(
    () => ({
      number,
      up,
      down,
    }),
    [number],
  )

  return (
    <CounterProvider value={providerValue}>
      <div ref={forwardRef} role="group" {...otherProps}>
        {children}
      </div>
    </CounterProvider>
  )
}

const Counter = Object.assign(forwardRef(CounterMain), {
  Up: CountUp,
  Down: CountDown,
  Number: CountNumber,
})

export default Counter
