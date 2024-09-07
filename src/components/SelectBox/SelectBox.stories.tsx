import type { Meta } from '@storybook/react'
import { useRef, useState } from 'react'
import SelectBox from './SelectBoxMain'
import { motion } from 'framer-motion'
import { selectBoxList } from '../../dummy'
import SelectBoxInput from './SelectBoxInput'

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
    className: {
      description: '최상위 요소의 클래스를 지정합니다.',
      table: {
        type: { summary: 'string' },
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
  const selectRef = useRef<HTMLButtonElement>(null)

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
      <SelectBox.Title>SelectBox</SelectBox.Title>

      <SelectBox.Trigger>
        <div className="flex w-full items-center rounded-md border border-black px-3 py-2">
          <SelectBoxInput placeholder="🐝 Fruits" />
        </div>
      </SelectBox.Trigger>

      <SelectBox.List>
        {({ optionList }) => (
          <motion.div
            {...animationProps}
            className="absolute z-[200] max-h-[240px] w-full overflow-hidden overflow-y-scroll rounded-md border bg-white"
          >
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
          </motion.div>
        )}
      </SelectBox.List>
    </SelectBox>
  )
}
