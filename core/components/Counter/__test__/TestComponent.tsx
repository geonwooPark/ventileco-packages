import React, { useState } from 'react'
import Counter from '../CounterMain'

export default function TestComponent({
  maximum,
  minimum,
}: {
  maximum?: number
  minimum?: number
}) {
  const [value, setValue] = useState(4)

  return (
    <Counter
      value={value}
      setValue={setValue}
      maximum={maximum}
      minimum={minimum}
    >
      <Counter.Down></Counter.Down>
      <Counter.Number />
      <Counter.Up></Counter.Up>
    </Counter>
  )
}
