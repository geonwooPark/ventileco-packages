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
    loop: {
      description: '슬라이드의 순환 여부를 설정하는 값입니다.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    gap: {
      description: '슬라이드 간격을 설정하는 값입니다.',
      table: {
        type: { summary: 'number' },
      },
    },
    perPage: {
      description: '한 번에 표시될 슬라이드의 개수를 설정하는 값입니다.',
      table: {
        type: { summary: 'number' },
      },
    },
    autoplay: {
      description:
        '슬라이드를 자동으로 이동하게 할지 여부를 설정하는 값입니다.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    delay: {
      description:
        'autoplay가 활성화된 경우, 슬라이드가 자동으로 이동하기 전까지 대기하는 시간을 밀리초 단위로 지정합니다.',
      table: {
        type: { summary: 'number' },
      },
    },
  },
} as Meta

export function Normal() {
  return (
    <Slider
      perPage={2}
      gap={10}
      startOffset={20}
      className="relative w-[500px]"
    >
      <Slider.Content className="hide-scroll [&>*]:shrink-0">
        <Slider.Item className="flex size-[200px] items-center justify-center bg-red-400">
          Slide1
        </Slider.Item>
        <Slider.Item className="flex size-[200px] items-center justify-center bg-blue-400">
          Slide2
        </Slider.Item>
        <Slider.Item className="flex size-[200px] items-center justify-center bg-green-400">
          Slide3
        </Slider.Item>
        <Slider.Item className="flex size-[200px] items-center justify-center bg-yellow-400">
          Slide4
        </Slider.Item>
        <Slider.Item className="flex size-[200px] items-center justify-center bg-pink-400">
          Slide5
        </Slider.Item>
        <Slider.Item className="flex size-[200px] items-center justify-center bg-purple-400">
          Slide6
        </Slider.Item>
        <Slider.Item className="flex size-[200px] items-center justify-center bg-orange-400">
          Slide7
        </Slider.Item>
      </Slider.Content>
      <Slider.PrevButton className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black p-2 text-white shadow-md disabled:opacity-70">
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
      <Slider.NextButton className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black p-2 text-white shadow-md disabled:opacity-70">
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
      <Slider.Pagination className="absolute bottom-4 left-1/2 -translate-x-1/2">
        {({ active, numbering }) => (
          <div
            className={`flex size-8 items-center justify-center rounded-full border ${active ? 'border-blue-600 text-blue-600' : 'border-transparent text-black'} `}
          >
            {numbering}
          </div>
        )}
      </Slider.Pagination>
    </Slider>
  )
}
