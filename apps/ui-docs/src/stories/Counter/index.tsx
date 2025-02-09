import React, { useState } from 'react'
import { Counter as VCounter } from 'ventileco-ui'

export default function Counter() {
  const [value, setValue] = useState(4)

  return (
    <VCounter value={value} setValue={setValue}>
      <div className="flex gap-2 rounded-md border border-black px-2">
        <VCounter.Down>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        </VCounter.Down>
        <VCounter.Number className="h-8 w-10 rounded-md text-center text-xl outline-none" />
        <VCounter.Up>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </VCounter.Up>
      </div>
    </VCounter>
  )
}
