import type { Meta } from '@storybook/react'
import { useRef, useState } from 'react'
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
    ref: {
      description: '컴포넌트의 인스턴스에 직접 접근하는 방법을 제공합니다.',
      table: {
        type: {
          summary: 'RefObject<HTMLDivElement>',
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
        type: { summary: 'any' },
        category: 'SelectBox',
      },
    },
    setValue: {
      description: '값을 설정하는 함수입니다.',
      table: {
        type: { summary: '(value: any) => void' },
        category: 'SelectBox',
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
        category: 'SelectBox',
      },
    },
    placeholder: {
      description: 'Input의 Placeholder를 지정합니다.',
      table: {
        type: { summary: 'string' },
        category: 'SelectBox.Input',
      },
    },
    as: {
      description: '렌더링할 태그를 입력합니다.',
      table: {
        type: { summary: 'ElementType' },
        category: 'SelectBox.List',
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
        category: 'SelectBox.Item',
      },
    },
  },
} as Meta

export function Normal() {
  const [value, setValue] = useState<string>()
  const selectRef = useRef<HTMLDivElement>(null)

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
    <SelectBox
      ref={selectRef}
      value={value}
      setValue={setValue}
      list={selectBoxList}
      className="w-[240px] text-sm"
    >
      <SelectBox.Input
        placeholder="🐝 Fruits"
        className="flex h-12 w-full items-center rounded-md border border-black px-3"
      />

      <SelectBox.List
        as={motion.ul}
        {...animationProps}
        className='bg-white" absolute z-[200] max-h-[240px] w-full overflow-hidden overflow-y-scroll rounded-md border'
      >
        {({ optionList }) => (
          <>
            {optionList.map((item) => (
              <SelectBox.Item key={item.value} item={item}>
                {({ isSelected, isDisabled, isFocused }) => (
                  <div
                    className={`${isSelected && 'text-blue-600'} ${isDisabled && 'text-gray-300'} ${isFocused && 'bg-blue-100'} w-full px-3 py-2 hover:bg-gray-100`}
                  >
                    {item.label}
                  </div>
                )}
              </SelectBox.Item>
            ))}
          </>
        )}
      </SelectBox.List>
    </SelectBox>
  )
}
