import type { Meta } from '@storybook/react'
import { useRef, useState } from 'react'
import Radio from './RadioMain'
import { radioList } from '../../dummy'

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
    children: {
      description: '자식 요소들을 포함합니다.',
      table: {
        type: { summary: 'ReactNode' },
        category: 'Radio',
      },
    },
    value: {
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
    _value: {
      description: '아이템이 가지는 고유한 값입니다.',
      table: {
        type: { summary: 'string | number | readonly string[] | undefined' },
        category: 'Radio.Item',
      },
    },
  },
} as Meta

export function Normal() {
  const [value, setValue] = useState<string>()

  const onChange = (value: string) => {
    setValue(value)
  }

  const ref = useRef<HTMLDivElement>(null)

  return (
    <Radio value={value} onChange={onChange} ref={ref} className="w-[240px]">
      <Radio.List className="flex flex-col gap-2">
        {radioList.map((item) => (
          <Radio.Item key={item.id} value={item.value}>
            {({ isSelected }) => (
              <div className="flex w-full cursor-pointer justify-between rounded-md border border-black px-4 py-3">
                <p>{item.label}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`size-6 duration-200 ${isSelected && 'fill-blue-600 text-blue-600'}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </div>
            )}
          </Radio.Item>
        ))}
      </Radio.List>
    </Radio>
  )
}
