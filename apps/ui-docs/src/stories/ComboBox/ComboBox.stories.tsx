import React, { useState } from 'react'
import { ComboBox } from 'ventileco-ui'
import { motion } from 'motion/react'

const comboBoxList = [
  { value: 'apple', label: '🍎 Apple', disabled: true },
  { value: 'kiwi', label: '🥝 Kiwi' },
  { value: 'peach', label: '🍑 Peach', disabled: true },
  { value: 'grape', label: '🍇 Grape' },
  { value: 'cherry', label: '🍒 Cherry' },
  { value: 'apple2', label: '🍎 Apple2' },
  { value: 'banana2', label: '🥝 Kiwi2', disabled: true },
  { value: 'peach2', label: '🍑 Peach2', disabled: true },
  { value: 'grape2', label: '🍇 Grape2' },
  { value: 'cherry2', label: '🍒 Cherry2' },
]

export default {
  title: 'COMPONENTS/ComboBox',
  component: ComboBox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    ref: {
      description: '컴포넌트의 인스턴스에 직접 접근하는 방법을 제공합니다.',
      table: {
        type: {
          summary: 'RefObject<HTMLDivElement>',
        },
        category: 'ComboBox',
      },
    },
    value: {
      description: '기본 값을 설정합니다.',
      table: {
        type: { summary: 'any' },
        category: 'ComboBox',
      },
    },
    onChange: {
      description: '값을 설정하는 함수입니다.',
      table: {
        type: { summary: '(value: any) => void' },
        category: 'ComboBox',
      },
    },
    list: {
      description: '옵션 목록을 제공합니다.',
      table: {
        type: {
          summary: 'OptionList',
          detail: `
            {value: any, label: string, disabled?: boolean}[]
          `,
        },
        category: 'ComboBox',
      },
    },
    placeholder: {
      description: 'Input의 Placeholder를 지정합니다.',
      table: {
        type: { summary: 'string' },
        category: 'ComboBox.Input',
      },
    },
    clearIcon: {
      description: '내부 상태값을 초기화 시키는 아이콘을 설정합니다.',
      table: {
        type: { summary: 'ReactNode' },
        category: 'ComboBox.Input',
      },
    },
    as: {
      description: '렌더링할 태그를 입력합니다.',
      table: {
        type: { summary: 'ElementType' },
        category: 'ComboBox.List',
      },
    },
    item: {
      description: '반복되는 list에서 고유의 항목을 가져옵니다.',
      table: {
        type: {
          summary: 'OptionItem',
          detail: `
          {value: any, label: string, disabled?: boolean}
        `,
        },
        category: 'ComboBox.Item',
      },
    },
  },
}

export function Normal() {
  const [value, setValue] = useState<string>()

  const animationProps = {
    variants: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    initial: 'hidden',
    animate: 'visible',
    viewport: { once: true },
    transition: { duration: 0.3 },
  }

  return (
    <ComboBox
      value={value}
      onChange={setValue}
      list={comboBoxList}
      className="w-[240px] text-sm"
    >
      <ComboBox.Input
        placeholder="🐝 Fruits"
        className="flex h-12 w-full items-center rounded-md border border-black px-3 focus-within:border-2"
        clearIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        }
      />

      <ComboBox.List
        as={motion.ul}
        {...animationProps}
        className="absolute z-[200] max-h-[240px] w-full overflow-hidden overflow-y-scroll rounded-md border bg-white"
      >
        {({ optionList }) =>
          optionList.length !== 0 ? (
            <>
              {optionList.map((item) => (
                <ComboBox.Item key={item.value} item={item}>
                  {({ isSelected, isDisabled, isFocused }) => (
                    <div
                      className={`${isSelected && 'text-blue-600'} ${isDisabled && 'text-gray-300'} ${isFocused && 'bg-gray-50'} w-full px-3 py-2 hover:bg-gray-100`}
                    >
                      {item.label}
                    </div>
                  )}
                </ComboBox.Item>
              ))}
            </>
          ) : (
            <div className="w-full rounded-md bg-white px-3 py-2 text-black/50">
              No Results
            </div>
          )
        }
      </ComboBox.List>
    </ComboBox>
  )
}
