import React, { useState } from 'react'
import Tabs from '../TabsMain'

export default function TestComponent() {
  const [currentTab, setCurrentTab] = useState(0)

  const onChange = (value: any) => {
    setCurrentTab(value)
  }

  const tabList = [
    { id: 0, title: '🍇 Grape', content: 'Content1' },
    { id: 1, title: '🍎 Apple', content: 'Content2' },
    { id: 2, title: '🍋 Lemon', content: 'Content3' },
    { id: 3, title: '🍒 Cherry', content: 'Content4' },
  ]

  return (
    <Tabs currentTab={currentTab} onChange={onChange}>
      <Tabs.Container>
        <Tabs.List>
          {tabList.map((item, idx) => (
            <Tabs.Item key={item.id} value={idx}>
              {({ selected }) => <div>{item.title}</div>}
            </Tabs.Item>
          ))}
        </Tabs.List>
        <Tabs.Indicator />
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
