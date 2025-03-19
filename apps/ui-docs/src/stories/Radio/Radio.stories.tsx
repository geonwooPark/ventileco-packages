import type { Meta } from '@storybook/react'
import React, { useState } from 'react'
import { Radio } from 'ventileco-ui'

const radioList = [
  { id: 0, value: 'apple', label: '🍎 Apple' },
  { id: 1, value: 'kiwi', label: '🥝 Kiwi' },
  { id: 2, value: 'peach', label: '🍑 Peach' },
]

export default {
  title: 'COMPONENTS/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    ref: {
      description: '컴포넌트의 인스턴스에 직접 접근하는 방법을 제공합니다.',
      table: {
        type: {
          summary: 'RefObject<HTMLDivElement> | RefObject<HTMLFieldSetElement>',
        },
        category: 'Radio',
      },
    },
    defaultValue: {
      description: '값을 설정합니다.',
      table: {
        type: { summary: 'any' },
        category: 'Radio',
      },
    },
    onChange: {
      description: '값들을 변경하는 함수입니다.',
      table: {
        type: {
          summary: '(value: any) => void',
        },
        category: 'Radio',
      },
    },
    value: {
      description: '아이템이 가지는 고유한 값입니다.',
      table: {
        type: { summary: 'string | number | readonly string[] | undefined' },
        category: 'Radio.Item',
      },
    },
  },
} as Meta

export function Normal() {
  const [value, setValue] = useState<string>('')

  const onChange = (value: string) => {
    setValue(value)
  }

  return (
    <Radio
      defaultValue={value}
      onChange={onChange}
      className="w-[240px] flex flex-col gap-2"
    >
      {radioList.map((item) => (
        <Radio.Item key={item.id} value={item.value}>
          <div className="flex w-full cursor-pointer gap-2 rounded-md border px-4 py-3">
            <div className="size-5 rounded-full border flex justify-center items-center">
              {value === item.value && (
                <div className="size-3 rounded-full border bg-blue-600" />
              )}
            </div>
            <p>{item.label}</p>
          </div>
        </Radio.Item>
      ))}
    </Radio>
  )
}
