import React from 'react'
import { useCounterContext } from './CounterMain'

interface CountNumberProps {
  className?: string
}

function CountNumber({ className }: CountNumberProps) {
  const { number } = useCounterContext()

  return (
    <input
      type="text"
      value={number}
      readOnly
      className={className}
      aria-label="Counter value"
    />
  )
}

export default CountNumber
