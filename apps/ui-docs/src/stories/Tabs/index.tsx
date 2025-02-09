import React, { useCallback, useState } from 'react'
import { Tabs as VTabs } from 'ventileco-ui'

export default function Tabs() {
  const [currentTab, setCurrentTab] = useState(0)

  const onChange = useCallback((index: number) => {
    setCurrentTab(index)
  }, [])

  const tabList = [
    { id: 0, title: '🍇 Grape' },
    { id: 1, title: '🍎 Apple' },
    { id: 2, title: '🍋 Lemon' },
    { id: 3, title: '🍒 Cherry' },
    { id: 4, title: '🍑 Peach' },
  ]

  return (
    <VTabs
      currentTab={currentTab}
      onChange={onChange}
      className="w-[400px] border rounded-md overflow-hidden"
    >
      <VTabs.Container>
        <VTabs.List>
          {tabList.map((item) => (
            <VTabs.Item key={item.id}>
              {({ isActive }) => (
                <div
                  className={`${isActive && 'text-blue-600'} cursor-pointer px-4 py-3 text-center transition duration-200 hover:opacity-50`}
                >
                  {item.title}
                </div>
              )}
            </VTabs.Item>
          ))}
        </VTabs.List>
        <VTabs.Indicator className="h-[2px] bg-black" />
      </VTabs.Container>

      <VTabs.Content>
        <VTabs.Panel className="px-4 py-3">
          <div>
            Content1Content1ContContent1Content1ContContent1Content1ContContent1Content1Cont
          </div>
        </VTabs.Panel>
        <VTabs.Panel className="px-4 py-3">
          <div>Content2</div>
        </VTabs.Panel>
        <VTabs.Panel className="px-4 py-3">
          <div>Content3</div>
        </VTabs.Panel>
        <VTabs.Panel className="px-4 py-3">
          <div>Content4</div>
        </VTabs.Panel>
        <VTabs.Panel className="px-4 py-3">
          <div>Content5</div>
        </VTabs.Panel>
      </VTabs.Content>
    </VTabs>
  )
}
