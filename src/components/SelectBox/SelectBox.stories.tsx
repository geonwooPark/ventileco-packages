import type { Meta } from '@storybook/react'
import { useState } from 'react'
import SelectBox from './SelectBoxMain'
import { motion } from 'framer-motion'
import { selectBoxList } from '../../dummy'

export default {
  title: 'COMPONENTS/SelectBox',
  component: SelectBox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    as: {
      description: 'div 또는 fieldset 중 하나를 선택합니다.',
      table: {
        type: { summary: 'div | fieldset' },
        category: 'SelectBox',
      },
    },
    ref: {
      description: '컴포넌트의 인스턴스에 직접 접근하는 방법을 제공합니다.',
      table: {
        type: {
          summary: 'RefObject<HTMLDivElement> | RefObject<HTMLFieldSetElement>',
        },
        category: 'SelectBox',
      },
    },
    children: {
      description: '자식 요소들을 포함합니다.',
      table: {
        type: { summary: 'ReactNode' },
        category: 'SelectBox',
      },
    },
    value: {
      description: '기본 값을 설정합니다.',
      table: {
        type: { summary: 'string' },
        category: 'SelectBox',
      },
    },
    setValue: {
      description: '값을 설정하는 함수입니다.',
      table: {
        type: { summary: '(value: string | undefined) => void' },
        category: 'SelectBox',
      },
    },
    list: {
      description: '옵션 목록을 제공합니다.',
      table: {
        type: {
          summary: 'OptionList',
          detail: `
            {value: string, label: string, disabled?: boolean}[]
          `,
        },
        category: 'SelectBox',
      },
    },
    motion: {
      description:
        'Framer Motion의 motion 모듈을 받아서 애니메이션을 적용시킵니다.',
      table: {
        type: { summary: 'any' },
        category: 'SelectBox.List',
      },
    },
    animationProps: {
      description:
        'Framer Motion의 애니메이션 속성을 조절하기 위한 객체입니다.',
      table: {
        type: { summary: 'object' },
        category: 'SelectBox.List',
      },
    },
    item: {
      description: '반복되는 list에서 고유의 항목을 가져옵니다.',
      table: {
        type: {
          summary: 'OptionItem',
          detail: `
          {value: string, label: string, disabled?: boolean}
        `,
        },
        category: 'SelectBox.Item',
      },
    },
  },
} as Meta

export function Normal() {
  const [value, setValue] = useState<string>()

  return (
    <div className="w-[240px] text-sm">
      <SelectBox value={value} setValue={setValue} list={selectBoxList}>
        <SelectBox.Title>레이블</SelectBox.Title>
        <SelectBox.Trigger>
          <div className="flex w-full items-center justify-between rounded-md border px-3 py-2">
            <SelectBox.TriggerText>메뉴를 선택하세요</SelectBox.TriggerText>
          </div>
        </SelectBox.Trigger>

        <SelectBox.List className="absolute z-[200] mt-1 max-h-[240px] w-full overflow-hidden overflow-y-scroll rounded-md border bg-white">
          {({ optionList }) =>
            optionList.map((item) => (
              <SelectBox.Item key={item.value} item={item}>
                {({ isSelected, isDisabled, isFocused }) => (
                  <div
                    className={`${isSelected && 'text-blue-600'} ${isDisabled && 'text-gray-300'} ${isFocused && 'bg-blue-100'} w-full px-3 py-2 hover:bg-gray-100`}
                  >
                    {item.label}
                  </div>
                )}
              </SelectBox.Item>
            ))
          }
        </SelectBox.List>
      </SelectBox>
    </div>
  )
}

export function WithFramerMotion() {
  const [value, setValue] = useState<string>()

  return (
    <div className="w-[240px] text-sm">
      <SelectBox value={value} setValue={setValue} list={selectBoxList}>
        <SelectBox.Title>레이블</SelectBox.Title>
        <SelectBox.Trigger>
          <div className="flex w-full items-center justify-between rounded-md border px-3 py-2">
            <SelectBox.TriggerText>메뉴를 선택하세요</SelectBox.TriggerText>
          </div>
        </SelectBox.Trigger>

        <SelectBox.List
          motion={motion}
          className="absolute z-[200] mt-1 max-h-[240px] w-full overflow-hidden overflow-y-scroll rounded-md border bg-white"
        >
          {({ optionList }) =>
            optionList.map((item) => (
              <SelectBox.Item key={item.value} item={item}>
                {({ isSelected, isDisabled, isFocused }) => (
                  <div
                    className={`${isSelected && 'text-blue-600'} ${isDisabled && 'text-gray-300'} ${isFocused && 'bg-blue-100'} w-full px-3 py-2 hover:bg-gray-100`}
                  >
                    {item.label}
                  </div>
                )}
              </SelectBox.Item>
            ))
          }
        </SelectBox.List>
      </SelectBox>
    </div>
  )
}
