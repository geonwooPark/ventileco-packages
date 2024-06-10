import type { Meta } from '@storybook/react'
import Tabs from './TabsMain'

const meta: Meta<typeof Tabs> = {
  title: 'COMPONENTS/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
}

export default meta

const tabList = [
  { id: 0, title: 'Title1', content: 'Content1' },
  { id: 1, title: 'Title2', content: 'Content2' },
  { id: 2, title: 'Title3', content: 'Content3' },
  { id: 3, title: 'Title4', content: 'Content4' },
]

export function Normal() {
  return (
    <div className="w-[240px]">
      <Tabs>
        <Tabs.List className="hide-scroll flex overflow-x-scroll rounded-t-md border bg-blue-100">
          {tabList.map((item) => (
            <Tabs.Item key={item.id} index={item.id} className="w-full">
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
            <Tabs.Content key={item.id} index={item.id}>
              <div className="px-4 py-3">{item.content}</div>
            </Tabs.Content>
          ))}
        </Tabs.View>
      </Tabs>
    </div>
  )
}
