import React from 'react'
import Accordion from '../AccordionMain'

export default function TestComponent() {
  const accordionList = [
    { id: 0, title: '🍇 Grape', content: 'Content1' },
    { id: 1, title: '🍎 Apple', content: 'Content2' },
    {
      id: 2,
      title: '🍋 Lemon',
      content: 'Content3Content3Content3Content3Content3Content3',
    },
    {
      id: 3,
      title: '🫐 Blueberry',
      content: 'Content4',
    },
    {
      id: 4,
      title: '🥝 Kiwi',
      content: 'Content5',
    },
  ]

  return (
    <Accordion>
      {accordionList.map((item) => (
        <Accordion.Item key={item.id} value={item.id}>
          <Accordion.Trigger>
            {({ isActive }) => <>{item.title}</>}
          </Accordion.Trigger>
          <Accordion.Content>
            {({ isActive }) => <>{item.content}</>}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion>
  )
}
