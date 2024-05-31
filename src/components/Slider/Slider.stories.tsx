import type { Meta } from '@storybook/react'
import Slider from './Slider'

const meta: Meta<typeof Slider> = {
  title: 'COMPONENTS/Slider',
  component: Slider,
  parameters: {
    layout: 'top',
  },
}

export default meta

export function Normal() {
  return (
    <Slider gap={16}>
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
      <Slider.Content>
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
        <div className="size-[200px] bg-purple-400"></div>
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
