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
    className: {
      description: '최상위 요소의 클래스를 지정합니다.',
      table: {
        type: { summary: 'string' },
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
    value: {
      description: '탭이 가지는 고유한 값입니다.',
      table: {
        type: { summary: '(value: any) => void' },
        category: 'Tabs.Item',
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
    <Tabs currentTab={currentTab} onChange={onChange}>
      <Tabs.List>
        {tabList.map((item) => (
          <Tabs.Item key={item.id} value={item.id} className="outline-none">
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

      <Tabs.Content className="w-[500px] px-4 py-3">
        {currentTab === 0 && (
          <div>Content1Content1Content1Content1Content1Content1</div>
        )}
        {currentTab === 1 && <div>Content2</div>}
        {currentTab === 2 && <div>Content3</div>}
        {currentTab === 3 && <div>Content4</div>}
      </Tabs.Content>
    </Tabs>
  )
}
