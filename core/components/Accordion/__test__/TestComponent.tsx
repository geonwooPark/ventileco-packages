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
  ]

  return (
    <Accordion>
      {accordionList.map((item) => (
        <Accordion.Item key={item.id} index={item.id}>
          {({ isOpen }) => (
            <React.Fragment>
              <Accordion.Trigger>{item.title}</Accordion.Trigger>
              <Accordion.Content>{item.content}</Accordion.Content>
            </React.Fragment>
          )}
        </Accordion.Item>
      ))}
    </Accordion>
  )
}
