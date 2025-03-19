import type { Meta } from '@storybook/react'
import React from 'react'
import { Accordion } from 'ventileco-ui'
import { motion } from 'motion/react'

const accordionList = [
  { id: 0, title: '🍇 Grape', content: 'Content1' },
  { id: 1, title: '🍎 Apple', content: 'Content2' },
  {
    id: 2,
    title: '🍋 Lemon',
    content: 'Content3Content3Content3Content3Content3Content3',
  },
  {
    id: 3,
    title: '🫐 Blueberry',
    content: 'Content4',
  },
  {
    id: 4,
    title: '🥝 Kiwi',
    content: 'Content5',
  },
]

export default {
  title: 'COMPONENTS/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    ref: {
      description: '컴포넌트의 인스턴스에 직접 접근하는 방법을 제공합니다.',
      table: {
        type: { summary: 'RefObject<HTMLDivElement>' },
        category: 'Accordion',
      },
    },
    multiple: {
      description: 'Accordion Item의 다중 오픈 여부를 결정합니다.',
      table: {
        type: { summary: 'boolean' },
        category: 'Accordion',
      },
    },
    as: {
      description: '렌더링할 태그를 입력합니다.',
      table: {
        type: { summary: 'ElementType' },
        category: 'Accordion.Content',
      },
    },
    value: {
      description: '아이템의 고유한 값입니다.',
      table: {
        type: { summary: 'number', required: true },
        category: 'Accordion.Item',
      },
    },
  },
} as Meta

export function Normal() {
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
    <Accordion className="flex w-[320px] flex-col overflow-hidden rounded-md border border-black">
      {accordionList.map((item) => (
        <Accordion.Item key={item.id} value={item.id} className="border">
          <Accordion.Trigger>
            {({ isActive }) => (
              <div
                className={`${isActive && 'text-blue-600'} flex cursor-pointer items-center justify-between px-4 py-2 text-left`}
              >
                {item.title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`size-4 duration-200 ${isActive && 'rotate-180'}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            )}
          </Accordion.Trigger>
          <Accordion.Content
            as={motion.ul}
            {...animationProps}
            className="w-full break-words bg-gray-50 px-4 py-3"
          >
            {({ isActive }) => <div>{item.content}</div>}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion>
  )
}
