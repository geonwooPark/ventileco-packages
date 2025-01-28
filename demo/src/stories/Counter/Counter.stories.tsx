import type { Meta } from '@storybook/react'
import { Counter } from 'ventileco-ui'
import React, { useState } from 'react'

export default {
  title: 'COMPONENTS/Counter',
  component: Counter,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    ref: {
      description: '컴포넌트의 인스턴스에 직접 접근하는 방법을 제공합니다.',
      table: {
        type: { summary: 'RefObject<HTMLDivElement>' },
      },
    },
    value: {
      description: '현재 카운터의 값입니다.',
      table: {
        type: { summary: 'number' },
      },
    },
    setValue: {
      description: '카운터 값을 설정하는 함수입니다.',
      table: {
        type: { summary: 'React.Dispatch<React.SetStateAction<number>>' },
      },
    },
    minimum: {
      description: '카운터의 최소값입니다. 설정하지 않으면 제한이 없습니다.',
      table: {
        type: { summary: 'number' },
      },
    },
    maximum: {
      description: '카운터의 최대값입니다. 설정하지 않으면 제한이 없습니다.',
      table: {
        type: { summary: 'number' },
      },
    },
  },
} as Meta

export function Normal() {
  const [value, setValue] = useState(4)

  return (
    <Counter value={value} setValue={setValue}>
      <div className="flex gap-2 rounded-md border border-black px-2">
        <Counter.Down>
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
        </Counter.Down>
        <Counter.Number className="h-8 w-10 rounded-md text-center text-xl outline-none" />
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </Counter.Up>
      </div>
    </Counter>
  )
}
