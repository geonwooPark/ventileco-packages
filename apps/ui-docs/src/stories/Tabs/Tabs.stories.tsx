import type { Meta } from '@storybook/react'
import { Tabs } from 'ventileco-ui'
import React, { useState } from 'react'

const tabList = [
  { id: 0, title: '🍇 Grape' },
  { id: 1, title: '🍎 Apple' },
  { id: 2, title: '🍋 Lemon' },
  { id: 3, title: '🍒 Cherry' },
  { id: 4, title: '🍑 Peach' },
]

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
    currentTab: {
      description: '현재 활성화 된 탭입니다.',
      table: {
        type: { summary: 'any' },
        category: 'Tabs',
      },
    },
    onChange: {
      description: '활성화 시킬 탭을 변경하는 함수입니다.',
      table: {
        type: { summary: '(value: any) => void' },
        category: 'Tabs',
      },
    },
  },
} as Meta

export function Normal() {
  const [currentTab, setCurrentTab] = useState(0)

  const onChange = (index: number) => {
    setCurrentTab(index)
  }

  return (
    <Tabs
      currentTab={currentTab}
      onChange={onChange}
      className="w-[400px] border rounded-md overflow-hidden"
    >
      <Tabs.Container>
        <Tabs.List>
          {tabList.map((item) => (
            <Tabs.Item key={item.id}>
              {({ isActive }) => (
                <div
                  className={`${isActive && 'text-blue-600'} cursor-pointer px-4 py-3 text-center transition duration-200 hover:opacity-50`}
                >
                  {item.title}
                </div>
              )}
            </Tabs.Item>
          ))}
        </Tabs.List>
        <Tabs.Indicator className="h-[2px] bg-black" />
      </Tabs.Container>

      <Tabs.Content>
        <Tabs.Panel className="px-4 py-3">
          <div>
            Content1Content1ContContent1Content1ContContent1Content1ContContent1Content1Cont
          </div>
        </Tabs.Panel>
        <Tabs.Panel className="px-4 py-3">
          <div>Content2</div>
        </Tabs.Panel>
        <Tabs.Panel className="px-4 py-3">
          <div>Content3</div>
        </Tabs.Panel>
        <Tabs.Panel className="px-4 py-3">
          <div>Content4</div>
        </Tabs.Panel>
        <Tabs.Panel className="px-4 py-3">
          <div>Content5</div>
        </Tabs.Panel>
      </Tabs.Content>
    </Tabs>
  )
}
