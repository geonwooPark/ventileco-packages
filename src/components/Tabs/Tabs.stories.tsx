import type { Meta } from '@storybook/react'
import Tabs from './TabsMain'
import { tabList } from '../../dummy'
import { useState } from 'react'

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
    value_1: {
      description: '탭의 순서를 결정하는 고유한 값입니다.',
      table: {
        type: { summary: 'number' },
        category: 'Tabs.Item',
      },
    },
    value_2: {
      description: '탭 컨텐츠의 순서를 결정하는 고유한 값입니다.',
      table: {
        type: { summary: 'number' },
        category: 'Tabs.Content',
      },
    },
  },
} as Meta

export function Normal() {
  const [currentTab, setCurrentTab] = useState(0)

  const onChange = (value: any) => {
    setCurrentTab(value)
  }

  return (
    <Tabs
      currentTab={currentTab}
      onChange={onChange}
      className="rounded-md border"
    >
      <Tabs.Container className="hide-scroll w-[420px] border-b">
        <Tabs.List>
          {tabList.map((item, idx) => (
            <Tabs.Item
              key={item.id}
              value={idx}
              className="w-full outline-none"
            >
              {({ selected }) => (
                <div
                  className={`${selected && 'text-blue-600'} cursor-pointer px-4 py-3 text-center transition duration-200 hover:opacity-50`}
                >
                  {item.title}
                </div>
              )}
            </Tabs.Item>
          ))}
        </Tabs.List>
        <Tabs.Indicator className="h-[2px] bg-black" />
      </Tabs.Container>

      <Tabs.Content value={0} className="w-full px-4 py-3">
        <div>Content1Content1Cont</div>
      </Tabs.Content>
      <Tabs.Content value={1} className="w-full px-4 py-3">
        <div>Content2</div>
      </Tabs.Content>
      <Tabs.Content value={2} className="w-full px-4 py-3">
        <div>Content3</div>
      </Tabs.Content>
      <Tabs.Content value={3} className="w-full px-4 py-3">
        <div>Content4</div>
      </Tabs.Content>
    </Tabs>
  )
}
