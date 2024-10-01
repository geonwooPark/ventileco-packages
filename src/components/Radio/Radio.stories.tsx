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
    as: {
      description: 'div 또는 fieldset 중 하나를 선택합니다.',
      table: {
        type: { summary: 'div | fieldset' },
        category: 'Radio',
      },
    },
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
    defaultValue: {
      description: '기본 값을 설정합니다.',
      table: {
        type: {
          summary: '(string | number | readonly string[] | undefined)[]',
        },
        category: 'Radio',
      },
    },
    setValue: {
      description: '값을 설정하는 함수입니다.',
      table: {
        type: {
          summary:
            'Dispatch<React.SetStateAction<string | number | readonly string[] | undefined>>',
        },
        category: 'Radio',
      },
    },
    name: {
      description:
        'Radio Group의 이름입니다. 설정하지 않으면 기본값이 없습니다.',
      table: {
        type: { summary: 'string' },
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

export function Controlled() {
  const [value, setValue] = useState<
    string | number | readonly string[] | undefined
  >()

  const ref = useRef<HTMLDivElement>(null)

  return (
    <div className="w-[240px]">
      <Radio
        defaultValue={value}
        setValue={setValue}
        name="Controlled"
        ref={ref}
      >
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
    </div>
  )
}
