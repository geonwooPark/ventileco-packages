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
    <Tabs>
      <Tabs.List className="overflow-hidden rounded-t-md border bg-blue-100">
        <Tabs.ListItem index={0}>
          {({ selected }) => (
            <div
              className={`${selected && 'bg-active text-white'} w-full px-4 py-3 text-center transition duration-200 hover:opacity-50`}
            >
              Tab1
            </div>
          )}
        </Tabs.ListItem>
        <Tabs.ListItem index={1}>
          {({ selected }) => (
            <div
              className={`${selected && 'bg-active text-white'} w-full px-4 py-3 text-center transition duration-200 hover:opacity-50`}
            >
              Tab2
            </div>
          )}
        </Tabs.ListItem>
        <Tabs.ListItem index={2}>
          {({ selected }) => (
            <div
              className={`${selected && 'bg-active text-white'} w-full px-4 py-3 text-center transition duration-200 hover:opacity-50`}
            >
              Tab3
            </div>
          )}
        </Tabs.ListItem>
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
      </Tabs.View>
    </Tabs>
  )
}
