import { CheckBox } from 'ventileco-ui'
import React, { useState } from 'react'
import { Meta } from '@storybook/react'

const checkBoxList = [
  { id: 0, value: 'carrot1', label: '🥕 Carrot' },
  { id: 1, value: 'carrot2', label: '🥕 Two Carrot' },
  { id: 2, value: 'carrot3', label: '🥕 Three Carrot' },
]

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
    values: {
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
    value: {
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

  const onChange = (newValues: string[]) => {
    setValues(newValues)
  }

  return (
    <CheckBox
      values={values}
      onChange={onChange}
      className="flex flex-col gap-2"
    >
      {checkBoxList.map((item) => (
        <CheckBox.Item key={item.id} value={item.value}>
          {({ checked }) => (
            <div
              className={`px-4 py-3 flex gap-2 items-center border rounded-md cursor-pointer`}
            >
              <div className="relative size-4 rounded-sm border">
                <div
                  className={`absolute top-[50%] left-[50%] translate-y-[-70%] translate-x-[-50%] w-1.5 h-3.5 border-b-2 border-r-2 transform rotate-45 ${checked ? 'border-blue-600' : 'border-transparent'}`}
                />
              </div>
              {item.label}
            </div>
          )}
        </CheckBox.Item>
      ))}
    </CheckBox>
  )
}
