import React, {
  ForwardedRef,
  PropsWithChildren,
  forwardRef,
  useCallback,
  useMemo,
} from 'react'
import { _createContext } from '../../utils/_createContext'
import CountUp from './CountUp'
import CountDown from './CountDown'
import CountNumber from './CountNumber'

export interface CounterMainProps {
  value: number
  setValue: React.Dispatch<React.SetStateAction<number>>
  minimum?: number
  maximum?: number
  className?: string
}

type ActionsState = {
  up: () => void
  down: () => void
}

export const [useActionsContext, ActionsProvider] =
  _createContext<ActionsState>()
export const [useNumberContext, NumberProvider] = _createContext<number>()

function CounterMain(
  {
    children,
    value: number,
    setValue,
    minimum,
    maximum,
    className,
  }: PropsWithChildren<CounterMainProps>,
  forwardRef: ForwardedRef<HTMLDivElement>,
) {
  const up = useCallback(() => {
    setValue((prev) =>
      maximum === undefined || prev < maximum ? prev + 1 : prev,
    )
  }, [maximum, setValue])

  const down = useCallback(() => {
    setValue((prev) =>
      minimum === undefined || prev > minimum ? prev - 1 : prev,
    )
  }, [minimum, setValue])

  const actions = useMemo(
    () => ({
      up,
      down,
    }),
    [down, up],
  )

  return (
    <ActionsProvider value={actions}>
      <NumberProvider value={number}>
        <div ref={forwardRef} role="group" className={className}>
          {children}
        </div>
      </NumberProvider>
    </ActionsProvider>
  )
}

const Counter = Object.assign(forwardRef(CounterMain), {
  Up: CountUp,
  Down: CountDown,
  Number: CountNumber,
})

export default Counter
