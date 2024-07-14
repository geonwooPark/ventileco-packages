import type { Meta } from '@storybook/react'
import Tabs from './TabsMain'
import { motion } from 'framer-motion'
import { tabList } from '../../dummy'

export default {
  title: 'COMPONENTS/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    ref: {
      description: '컴포넌트의 인스턴스에 직접 접근하는 방법을 제공합니다.',
      table: {
        type: { summary: 'RefObject<HTMLDivElement>' },
        category: 'Tabs',
      },
    },
    tabIndex: {
      description:
        '아이템의 고유한 값으로 tabIndex와 contentIndex는 일치해야 합니다.',
      table: {
        type: { summary: 'number', required: true },
        category: 'Tabs.Item',
      },
    },
    contentIndex: {
      description:
        '아이템의 고유한 값으로 tabIndex와 contentIndex는 일치해야 합니다.',

      table: {
        type: { summary: 'number', required: true },
        category: 'Tabs.Content',
      },
    },
    motion: {
      description:
        'Framer Motion의 motion 모듈을 받아서 애니메이션을 적용시킵니다.',
      table: {
        type: { summary: 'any' },
        category: 'Tabs.Content',
      },
    },
    animationProps: {
      description:
        'Framer Motion의 애니메이션 속성을 조절하기 위한 객체입니다.',
      table: {
        type: { summary: 'object' },
        category: 'Tabs.Content',
      },
    },
  },
} as Meta

export function Normal() {
  return (
    <div className="w-[240px]">
      <Tabs>
        <Tabs.List className="hide-scroll flex overflow-x-scroll rounded-t-md border bg-blue-100">
          {tabList.map((item) => (
            <Tabs.Item key={item.id} tabIndex={item.id} className="w-full">
              {({ selected }) => (
                <div
                  className={`${selected && 'bg-blue-600 text-white'} w-full cursor-pointer px-4 py-3 text-center transition duration-200 hover:opacity-50`}
                >
                  {item.title}
                </div>
              )}
            </Tabs.Item>
          ))}
        </Tabs.List>

        <Tabs.View className="rounded-b-md border bg-gray-50">
          {tabList.map((item) => (
            <Tabs.Content key={item.id} contentIndex={item.id}>
              <div className="px-4 py-3">{item.content}</div>
            </Tabs.Content>
          ))}
        </Tabs.View>
      </Tabs>
    </div>
  )
}

export function WithFramerMotion() {
  return (
    <div className="w-[240px]">
      <Tabs>
        <Tabs.List className="hide-scroll flex overflow-x-scroll rounded-t-md border bg-blue-100">
          {tabList.map((item) => (
            <Tabs.Item key={item.id} tabIndex={item.id} className="w-full">
              {({ selected }) => (
                <div
                  className={`${selected && 'bg-blue-600 text-white'} w-full cursor-pointer px-4 py-3 text-center transition duration-200 hover:opacity-50`}
                >
                  {item.title}
                </div>
              )}
            </Tabs.Item>
          ))}
        </Tabs.List>

        <Tabs.View className="rounded-b-md border bg-gray-50">
          {tabList.map((item) => (
            <Tabs.Content key={item.id} motion={motion} contentIndex={item.id}>
              <div className="px-4 py-3">{item.content}</div>
            </Tabs.Content>
          ))}
        </Tabs.View>
      </Tabs>
    </div>
  )
}
