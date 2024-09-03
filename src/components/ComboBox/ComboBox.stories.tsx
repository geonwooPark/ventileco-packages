import type { Meta } from '@storybook/react'
import ComboBox from './ComboBoxMain'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { comboBoxList } from '../../dummy'

export default {
  title: 'COMPONENTS/ComboBox',
  component: ComboBox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    as: {
      description: 'div 또는 fieldset 중 하나를 선택합니다.',
      table: {
        type: { summary: 'div | fieldset' },
        category: 'ComboBox',
      },
    },
    ref: {
      description: '컴포넌트의 인스턴스에 직접 접근하는 방법을 제공합니다.',
      table: {
        type: {
          summary: 'RefObject<HTMLDivElement> | RefObject<HTMLFieldSetElement>',
        },
        category: 'ComboBox',
      },
    },
    children: {
      description: '자식 요소들을 포함합니다.',
      table: {
        type: { summary: 'ReactNode' },
        category: 'ComboBox',
      },
    },
    value: {
      description: '기본 값을 설정합니다.',
      table: {
        type: { summary: 'string' },
        category: 'ComboBox',
      },
    },
    setValue: {
      description: '값을 설정하는 함수입니다.',
      table: {
        type: { summary: '(value: string | undefined) => void' },
        category: 'ComboBox',
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
    motion: {
      description:
        'Framer Motion의 motion 모듈을 받아서 애니메이션을 적용시킵니다.',
      table: {
        type: { summary: 'any' },
        category: 'ComboBox.List',
      },
    },
    animationProps: {
      description:
        'Framer Motion의 애니메이션 속성을 조절하기 위한 객체입니다.',
      table: {
        type: { summary: 'object' },
        category: 'ComboBox.List',
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
        category: 'ComboBox.Item',
      },
    },
  },
} as Meta

export function Normal() {
  const [value, setValue] = useState<string>()

  return (
    <div className="w-[240px] text-sm">
      <ComboBox value={value} setValue={setValue} list={comboBoxList}>
        <ComboBox.Title>ComboBox</ComboBox.Title>

        <ComboBox.Trigger>
          <div className="flex w-full items-center rounded-md border border-black px-3 py-2">
            <ComboBox.Input placeholder="🐝 Fruits" />
            <ComboBox.ClearButton>
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
            </ComboBox.ClearButton>
          </div>
        </ComboBox.Trigger>

        <ComboBox.List className="absolute z-[200] mt-1 max-h-[240px] w-full overflow-hidden overflow-y-scroll rounded-md border bg-white">
          {({ optionList }) =>
            optionList.length !== 0 ? (
              optionList.map((item) => (
                <ComboBox.Item key={item.value} item={item}>
                  {({ isSelected, isDisabled, isFocused }) => (
                    <div
                      className={`${isSelected && 'text-blue-600'} ${isDisabled && 'text-gray-300'} ${isFocused && 'bg-blue-100'} w-full px-3 py-2 hover:bg-gray-100`}
                    >
                      {item.label}
                    </div>
                  )}
                </ComboBox.Item>
              ))
            ) : (
              <div className="w-full px-3 py-2 opacity-50">No Results</div>
            )
          }
        </ComboBox.List>
      </ComboBox>
    </div>
  )
}

export function WithFramerMotion() {
  const [value, setValue] = useState<string>()

  const [reverse, setReverse] = useState(false)

  const comboRef = useRef<HTMLDivElement>(null)

  const handleListDirection = () => {
    if (comboRef.current) {
      const { bottom } = comboRef.current.getBoundingClientRect()
      if (reverse) {
        if (window.innerHeight - bottom > 240) {
          setReverse(false)
        }
      } else {
        if (window.innerHeight - bottom <= 240) {
          setReverse(true)
        }
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleListDirection)
    return () => window.removeEventListener('scroll', handleListDirection)
  }, [comboRef.current?.getBoundingClientRect().top])

  useEffect(() => {
    window.addEventListener('resize', handleListDirection)
    return () => window.removeEventListener('resize', handleListDirection)
  }, [window.innerHeight])

  return (
    <div className="w-[240px] text-sm">
      <ComboBox
        ref={comboRef}
        value={value}
        setValue={setValue}
        list={comboBoxList}
      >
        <ComboBox.Title>ComboBox</ComboBox.Title>

        <ComboBox.Trigger>
          <div className="flex w-full items-center rounded-md border border-black px-3 py-2">
            <ComboBox.Input placeholder="🐝 Fruits" />
            <ComboBox.ClearButton>
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
            </ComboBox.ClearButton>
          </div>
        </ComboBox.Trigger>

        <ComboBox.List
          motion={motion}
          className={`absolute z-[200] max-h-[240px] w-full overflow-hidden overflow-y-scroll rounded-md border bg-white ${reverse ? 'bottom-10' : ''}`}
        >
          {({ optionList }) =>
            optionList.length !== 0 ? (
              optionList.map((item) => (
                <ComboBox.Item key={item.value} item={item}>
                  {({ isSelected, isDisabled, isFocused }) => (
                    <div
                      className={`${isSelected && 'text-blue-600'} ${isDisabled && 'text-gray-300'} ${isFocused && 'bg-blue-100'} w-full px-3 py-2 hover:bg-gray-100`}
                    >
                      {item.label}
                    </div>
                  )}
                </ComboBox.Item>
              ))
            ) : (
              <div className="w-full px-3 py-2 opacity-50">No Results</div>
            )
          }
        </ComboBox.List>
      </ComboBox>
    </div>
  )
}
