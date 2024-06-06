import type { Meta } from '@storybook/react'
import Accordion from './Accordion'

const meta: Meta<typeof Accordion> = {
  title: 'COMPONENTS/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
}

export default meta

export function Normal() {
  return (
    <div className="w-[240px]">
      <Accordion className="flex flex-col rounded-md border">
        <Accordion.Item value={0}>
          {({ isOpen }) => (
            <>
              <Accordion.Trigger>
                <div
                  className={`${isOpen && 'text-blue-600'} cursor-pointer border-b px-4 py-3 text-left`}
                >
                  Title1
                </div>
              </Accordion.Trigger>
              <Accordion.Content>
                <div className="border-b px-4 py-3">Content1</div>
              </Accordion.Content>
            </>
          )}
        </Accordion.Item>
        <Accordion.Item value={1}>
          {({ isOpen }) => (
            <>
              <Accordion.Trigger>
                <div
                  className={`${isOpen && 'text-blue-600'} cursor-pointer border-b px-4 py-3 text-left`}
                >
                  Title2
                </div>
              </Accordion.Trigger>
              <Accordion.Content>
                <div className="border-b px-4 py-3">Content2</div>
              </Accordion.Content>
            </>
          )}
        </Accordion.Item>
        <Accordion.Item value={2}>
          {({ isOpen }) => (
            <>
              <Accordion.Trigger>
                <div
                  className={`${isOpen && 'border-b text-blue-600'} cursor-pointer px-4 py-3 text-left`}
                >
                  Title3
                </div>
              </Accordion.Trigger>
              <Accordion.Content>
                <div className="px-4 py-3">Content3</div>
              </Accordion.Content>
            </>
          )}
        </Accordion.Item>
      </Accordion>
    </div>
  )
}
