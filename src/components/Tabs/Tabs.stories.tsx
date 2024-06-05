import type { Meta } from '@storybook/react'
import Tabs from './Tabs'

const meta: Meta<typeof Tabs> = {
  title: 'COMPONENTS/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
}

export default meta

export function Normal() {
  return (
    <div className="w-[240px]">
      <Tabs>
        <Tabs.List className="hide-scroll flex overflow-x-scroll rounded-t-md border bg-blue-100">
          <Tabs.Item index={0} className="w-full">
            {({ selected }) => (
              <div
                className={`${selected && 'bg-blue-600 text-white'} w-full cursor-pointer px-4 py-3 text-center transition duration-200 hover:opacity-50`}
              >
                Tab1
              </div>
            )}
          </Tabs.Item>
          <Tabs.Item index={1} className="w-full">
            {({ selected }) => (
              <div
                className={`${selected && 'bg-blue-600 text-white'} w-full cursor-pointer px-4 py-3 text-center transition duration-200 hover:opacity-50`}
              >
                Tab2
              </div>
            )}
          </Tabs.Item>
          <Tabs.Item index={2} className="w-full">
            {({ selected }) => (
              <div
                className={`${selected && 'bg-blue-600 text-white'} w-full cursor-pointer px-4 py-3 text-center transition duration-200 hover:opacity-50`}
              >
                Tab3
              </div>
            )}
          </Tabs.Item>
          <Tabs.Item index={3} className="w-full">
            {({ selected }) => (
              <div
                className={`${selected && 'bg-blue-600 text-white'} w-full cursor-pointer px-4 py-3 text-center transition duration-200 hover:opacity-50`}
              >
                Tab4
              </div>
            )}
          </Tabs.Item>
        </Tabs.List>
        <Tabs.View className="rounded-b-md border bg-gray-50">
          <Tabs.Content index={0}>
            <div className="px-4 py-3">Tabs Content1</div>
          </Tabs.Content>
          <Tabs.Content index={1}>
            <div className="px-4 py-3">Tabs Content2</div>
          </Tabs.Content>
          <Tabs.Content index={2}>
            <div className="px-4 py-3">Tabs Content3</div>
          </Tabs.Content>
          <Tabs.Content index={3}>
            <div className="px-4 py-3">Tabs Content4</div>
          </Tabs.Content>
        </Tabs.View>
      </Tabs>
    </div>
  )
}
