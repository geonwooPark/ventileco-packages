import CheckBox from './CheckBoxMain'
import { useRef, useState } from 'react'
import { checkBoxList } from '../../dummy'
import { Meta } from '@storybook/react'

export default {
  title: 'COMPONENTS/CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    ref: {
      description: '컴포넌트의 인스턴스에 직접 접근하는 방법을 제공합니다.',
      table: {
        type: {
          summary: 'RefObject<HTMLDivElement>',
          category: 'CheckBox',
        },
        category: 'CheckBox',
      },
    },
    children: {
      description: '자식 요소들을 포함합니다.',
      table: {
        type: { summary: 'ReactNode' },
        category: 'CheckBox',
      },
    },
    value: {
      description: '값을 설정합니다.',
      table: {
        type: { summary: 'any[]' },
        category: 'CheckBox',
      },
    },
    onChange: {
      description: '값들을 변경하는 함수입니다.',
      table: {
        type: {
          summary: '(value: any) => void',
        },
        category: 'CheckBox',
      },
    },
    _value: {
      description: '아이템이 가지는 고유한 값입니다.',
      table: {
        type: { summary: 'string | number' },
        category: 'CheckBox.Item',
      },
    },
  },
} as Meta

export function Normal() {
  const [values, setValues] = useState<string[]>([])

  const ref = useRef<HTMLDivElement>(null)

  return (
    <CheckBox value={values} onChange={(value) => setValues(value)} ref={ref}>
      <CheckBox.List className="flex flex-col gap-2">
        {checkBoxList.map((item) => (
          <CheckBox.Item key={item.id} value={item.value}>
            {({ isSelected }) => (
              <div
                className={`${isSelected && 'border-blue-600 text-blue-600'} flex cursor-pointer items-center gap-2 rounded-md border px-4 py-2 duration-200`}
              >
                <div className="flex justify-center">
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
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <p className="text-2xl text-black">{item.label}</p>
              </div>
            )}
          </CheckBox.Item>
        ))}
      </CheckBox.List>
    </CheckBox>
  )
}
