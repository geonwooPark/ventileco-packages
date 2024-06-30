import {
  ChangeEventHandler,
  ForwardedRef,
  PropsWithChildren,
  forwardRef,
  useCallback,
  useMemo,
  useState,
} from 'react'
import { _createContext } from '../../utils/_createContext'
import CountUp from './CountUp'
import CountDown from './CountDown'
import CountNumber from './CountNumber'

interface CounterMainProps {
  initValue?: number
  minimum?: number
  maximum?: number
  register?: any
}

type CounterState = {
  number: number
  register: any
  onChange: ChangeEventHandler<HTMLInputElement>
  up: () => void
  down: () => void
}

export const [useCounterContext, CounterProvider] =
  _createContext<CounterState>()

function CounterMain(
  {
    children,
    register,
    initValue,
    minimum,
    maximum,
  }: PropsWithChildren<CounterMainProps>,
  forwardRef: ForwardedRef<HTMLDivElement>,
) {
  const [number, setNumber] = useState(initValue || 0)

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNumber(Number(e.target.value))
  }

  const up = useCallback(() => {
    setNumber((prev) =>
      maximum === undefined || prev < maximum ? prev + 1 : prev,
    )
  }, [maximum])

  const down = useCallback(() => {
    setNumber((prev) =>
      minimum === undefined || prev > minimum ? prev - 1 : prev,
    )
  }, [minimum])

  const providerValue = useMemo(
    () => ({
      number,
      register,
      onChange,
      up,
      down,
    }),
    [number, register],
  )

  return (
    <CounterProvider value={providerValue}>
      <div ref={forwardRef} role="group">
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
