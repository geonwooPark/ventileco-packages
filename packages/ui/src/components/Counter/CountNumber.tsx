import React from 'react'
import { useNumberContext } from './CounterMain'

interface CountNumberProps {
  className?: string
}

function CountNumber({ className }: CountNumberProps) {
  const number = useNumberContext()

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
