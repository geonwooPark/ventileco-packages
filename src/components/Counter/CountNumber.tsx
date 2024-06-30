import { useCounterContext } from './CounterMain'

interface CountNumberProps {
  className?: string
}

function CountNumber({ className }: CountNumberProps) {
  const { number, register, onChange } = useCounterContext()

  return (
    <input
      value={number}
      onChange={onChange}
      className={className}
      aria-label="Counter value"
      {...register}
    />
  )
}

export default CountNumber
