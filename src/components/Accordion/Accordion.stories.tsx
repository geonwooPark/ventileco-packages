import type { Meta } from '@storybook/react'
import Accordion from './Accordion'
import React from 'react'

const meta: Meta<typeof Accordion> = {
  title: 'COMPONENTS/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
}

export default meta

const accordionList = [
  { id: 0, title: 'Title1', content: 'Content1' },
  { id: 1, title: 'Title2', content: 'Content2' },
  { id: 2, title: 'Title3', content: 'Content3' },
]

export function Normal() {
  return (
    <div className="w-[240px]">
      <Accordion className="flex flex-col rounded-md border">
        {accordionList.map((item) => (
          <Accordion.Item key={item.id} index={item.id}>
            {({ isOpen }) => (
              <React.Fragment>
                <Accordion.Trigger>
                  <div
                    className={`${isOpen && 'text-blue-600'} cursor-pointer border-b px-4 py-3 text-left`}
                  >
                    {item.title}
                  </div>
                </Accordion.Trigger>
                <Accordion.Content>
                  <div className="border-b px-4 py-3">{item.content}</div>
                </Accordion.Content>
              </React.Fragment>
            )}
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}
