import React, { useState } from 'react'
import Tabs from '../TabsMain'

export default function TestComponent() {
  const [currentTab, setCurrentTab] = useState(0)

  const onChange = (value: any) => {
    setCurrentTab(value)
  }

  const tabList = [
    { id: 0, title: '🍇 Grape' },
    { id: 1, title: '🍎 Apple' },
    { id: 2, title: '🍋 Lemon' },
    { id: 3, title: '🍒 Cherry' },
  ]

  return (
    <Tabs
      currentTab={currentTab}
      onChange={onChange}
      className="border w-[280px]"
    >
      <Tabs.Container>
        <Tabs.List>
          {tabList.map((item, idx) => (
            <Tabs.Item key={item.id} value={idx}>
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

      <Tabs.Content value={0}>
        <div>Content1Content1Cont</div>
      </Tabs.Content>
      <Tabs.Content value={1}>
        <div>Content2</div>
      </Tabs.Content>
      <Tabs.Content value={2}>
        <div>Content3</div>
      </Tabs.Content>
      <Tabs.Content value={3}>
        <div>Content4</div>
      </Tabs.Content>
    </Tabs>
  )
}
