import React from 'react'
import { Slider as VSlider } from 'ventileco-ui'

export default function Slider() {
  return (
    <VSlider perPage={3} gap={10} className="relative w-[620px]">
      <VSlider.Content className="hide-scroll [&>*]:shrink-0">
        <VSlider.Item className="flex h-[300px] w-[200px] items-center justify-center bg-red-400">
          Slide1
        </VSlider.Item>
        <VSlider.Item className="flex h-[300px] w-[200px] items-center justify-center bg-blue-400">
          Slide2
        </VSlider.Item>
        <VSlider.Item className="flex h-[300px] w-[200px] items-center justify-center bg-green-400">
          Slide3
        </VSlider.Item>
        <VSlider.Item className="flex h-[300px] w-[200px] items-center justify-center bg-yellow-400">
          Slide4
        </VSlider.Item>
        <VSlider.Item className="flex h-[300px] w-[200px] items-center justify-center bg-pink-400">
          Slide5
        </VSlider.Item>
        <VSlider.Item className="flex h-[300px] w-[200px] items-center justify-center bg-purple-400">
          Slide6
        </VSlider.Item>
        <VSlider.Item className="flex h-[300px] w-[200px] items-center justify-center bg-orange-400">
          Slide7
        </VSlider.Item>
      </VSlider.Content>
      <VSlider.PrevButton className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black p-2 text-white shadow-md disabled:opacity-70">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </VSlider.PrevButton>
      <VSlider.NextButton className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black p-2 text-white shadow-md disabled:opacity-70">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </VSlider.NextButton>
      <VSlider.Pagination className="absolute bottom-4 left-1/2 -translate-x-1/2">
        {({ active, numbering }) => (
          <div
            className={`flex size-8 items-center justify-center rounded-full border ${active ? 'border-blue-600 text-blue-600' : 'border-transparent text-black'} `}
          >
            {numbering}
          </div>
        )}
      </VSlider.Pagination>
    </VSlider>
  )
}
