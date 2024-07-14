import type { Meta } from '@storybook/react'
import Slider from './SliderMain'

export default {
  title: 'COMPONENTS/Slider',
  component: Slider,
  parameters: {
    layout: 'top',
  },
  argTypes: {
    ref: {
      description: '컴포넌트의 인스턴스에 직접 접근하는 방법을 제공합니다.',
      table: {
        type: { summary: 'RefObject<HTMLDivElement>' },
      },
    },
    gap: {
      description: '슬라이드 아이템 간의 간격을 설정합니다.',
      table: {
        type: { summary: 'number' },
      },
    },
    step: {
      description:
        '버튼을 사용하여 슬라이드 조작 시 건너뛰는 아이템의 갯수를 설정합니다.',
      table: {
        type: { summary: 'number' },
      },
    },
  },
} as Meta

export function Normal() {
  return (
    <Slider gap={16} step={4}>
      <Slider.PrevButton className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black p-2 text-white shadow-md">
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
      </Slider.PrevButton>
      <Slider.Content className="hide-scroll flex cursor-grab overflow-x-scroll scroll-smooth [&>*]:shrink-0">
        <div className="size-[200px] bg-red-400"></div>
        <div className="size-[200px] bg-blue-400"></div>
        <div className="size-[200px] bg-green-400"></div>
        <div className="size-[200px] bg-pink-400"></div>
        <div className="size-[200px] bg-purple-400"></div>
        <div className="size-[200px] bg-red-400"></div>
        <div className="size-[200px] bg-blue-400"></div>
        <div className="size-[200px] bg-green-400"></div>
        <div className="size-[200px] bg-pink-400"></div>
        <div className="size-[200px] bg-purple-400"></div>
        <div className="size-[200px] bg-red-400"></div>
        <div className="size-[200px] bg-blue-400"></div>
        <div className="size-[200px] bg-green-400"></div>
        <div className="size-[200px] bg-pink-400"></div>
      </Slider.Content>
      <Slider.NextButton className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black p-2 text-white shadow-md">
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
      </Slider.NextButton>
    </Slider>
  )
}
