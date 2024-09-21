import type { Meta } from '@storybook/react'
import Accordion from './AccordionMain'
import React from 'react'
import { motion } from 'framer-motion'
import { accordionList } from '../../dummy'

export default {
  title: 'COMPONENTS/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    className: {
      description: '최상위 요소의 클래스를 지정합니다.',
      table: {
        type: { summary: 'string' },
        category: 'Accordion',
      },
    },
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
    index: {
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
    <Accordion
      multiple
      className="flex w-[320px] flex-col overflow-hidden rounded-md border border-black"
    >
      {accordionList.map((item, idx) => (
        <Accordion.Item
          key={item.id}
          index={item.id}
          className={accordionList.length - 1 !== idx ? 'border-b' : ''}
        >
          {({ isOpen }) => (
            <React.Fragment>
              <Accordion.Trigger className="outline-none">
                <div
                  className={`${isOpen && 'text-blue-600'} flex cursor-pointer items-center justify-between px-4 py-2 text-left`}
                >
                  {item.title}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`size-4 duration-200 ${isOpen && 'rotate-180'}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </Accordion.Trigger>

              <Accordion.Content
                as={motion.div}
                {...animationProps}
                className="w-full break-words bg-gray-50 px-4 py-3"
              >
                {item.content}
              </Accordion.Content>
            </React.Fragment>
          )}
        </Accordion.Item>
      ))}
    </Accordion>
  )
}
