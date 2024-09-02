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
    index: {
      description: '아이템의 고유한 값입니다.',
      table: {
        type: { summary: 'number', required: true },
        category: 'Accordion.Item',
      },
    },
    motion: {
      description:
        'Framer Motion의 motion 모듈을 받아서 애니메이션을 적용시킵니다.',
      table: {
        type: { summary: 'any' },
        category: 'Accordion.Content',
      },
    },
    animationProps: {
      description:
        'Framer Motion의 애니메이션 속성을 조절하기 위한 객체입니다.',
      table: {
        type: { summary: 'object' },
        category: 'Accordion.Content',
      },
    },
  },
} as Meta

export function Normal() {
  return (
    <div className="w-[240px]">
      <Accordion
        multiple
        className="flex flex-col overflow-hidden rounded-md border border-black"
      >
        {accordionList.map((item) => (
          <Accordion.Item key={item.id} index={item.id}>
            {({ isOpen }) => (
              <React.Fragment>
                <Accordion.Trigger className="outline-none">
                  <div
                    className={`${isOpen && 'text-blue-600'} flex cursor-pointer items-center justify-between border-y px-4 py-2 text-left`}
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

                <Accordion.Content>
                  <div className="w-full break-words bg-gray-50 px-4 py-3">
                    {item.content}
                  </div>
                </Accordion.Content>
              </React.Fragment>
            )}
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

export function WithFramerMotion() {
  return (
    <div className="w-[240px]">
      <Accordion className="flex flex-col overflow-hidden rounded-md border border-black">
        {accordionList.map((item) => (
          <Accordion.Item key={item.id} index={item.id}>
            {({ isOpen }) => (
              <React.Fragment>
                <Accordion.Trigger className="outline-none">
                  <div
                    className={`${isOpen && 'text-blue-600'} flex cursor-pointer items-center justify-between border-y px-4 py-2 text-left`}
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

                <Accordion.Content motion={motion}>
                  <div className="w-full break-words bg-gray-50 px-4 py-3">
                    {item.content}
                  </div>
                </Accordion.Content>
              </React.Fragment>
            )}
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}
