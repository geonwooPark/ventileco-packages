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
      <Accordion className="rounded-md border">
        <Accordion.Item value={0}>
          {({ isOpen }) => (
            <>
              <Accordion.Trigger>
                <div
                  className={`${isOpen && 'text-active'} cursor-pointer border-b px-4 py-3`}
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
                  className={`${isOpen && 'text-active'} cursor-pointer border-b px-4 py-3 `}
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
                  className={`${isOpen && 'border-b text-active'} cursor-pointer px-4 py-3 `}
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
