import React from 'react'
import { Accordion as VAccordion } from 'ventileco-ui'
import { motion } from 'motion/react'

export default function Accordion() {
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

  const animationProps = {
    variants: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    initial: 'hidden',
    animate: 'visible',
  }

  return (
    <VAccordion className="flex w-[320px] flex-col overflow-hidden rounded-md border border-black">
      {accordionList.map((item) => (
        <VAccordion.Item key={item.id} value={item.id} className="border">
          <VAccordion.Trigger>
            {({ isActive }) => (
              <div
                className={`${isActive && 'text-blue-600'} flex cursor-pointer items-center justify-between px-4 py-2 text-left`}
              >
                {item.title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`size-4 duration-200 ${isActive && 'rotate-180'}`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            )}
          </VAccordion.Trigger>
          <VAccordion.Content
            as={motion.ul}
            {...animationProps}
            className="w-full break-words bg-gray-50 px-4 py-3"
          >
            {({ isActive }) => <div>{item.content}</div>}
          </VAccordion.Content>
        </VAccordion.Item>
      ))}
    </VAccordion>
  )
}
