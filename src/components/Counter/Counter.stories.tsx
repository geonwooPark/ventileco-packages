import type { Meta } from '@storybook/react'
import Counter, { CounterMainProps } from './CounterMain'
import { useState } from 'react'

const meta: Meta<typeof Counter> = {
  title: 'COMPONENTS/Counter',
  component: Counter,
  parameters: {
    layout: 'centered',
  },
}

export default meta

export function Normal(arg: Pick<CounterMainProps, 'minimum' | 'maximum'>) {
  const [value, setValue] = useState(4)

  return (
    <Counter value={value} setValue={setValue} {...arg}>
      <div className="flex items-center gap-2">
        <Counter.Number className="h-8 w-20 rounded-md border border-gray-700 text-center text-xl outline-none" />
        <div className="flex flex-col">
          <Counter.Up>
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
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          </Counter.Up>
          <Counter.Down>
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
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </Counter.Down>
        </div>
      </div>
    </Counter>
  )
}
