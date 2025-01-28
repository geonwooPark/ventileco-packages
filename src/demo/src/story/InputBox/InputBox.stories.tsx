import React, { useState } from 'react'
import { Meta } from '@storybook/react'
import InputBox from './InputBox'

export default {
  title: 'COMPONENTS/InputBox',
  component: InputBox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    ref: {
      description: '컴포넌트의 인스턴스에 직접 접근하는 방법을 제공합니다.',
      table: {
        type: { summary: 'RefObject<HTMLDivElement>' },
      },
    },
    startIcon: {
      description: 'Input의 좌측에 요소를 등록합니다.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    endIcon: {
      description: 'Input의 우측에 요소를 등록합니다.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    inputClassName: {
      description: 'Input 요소의 클래스를 지정합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} as Meta

export function Normal() {
  const [value, setValue] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setValue(value)
  }

  return (
    <InputBox
      value={value}
      onChange={onChange}
      placeholder="내용을 입력하세요."
      className="h-12 w-[360px] rounded-md border border-black px-3 focus-within:border-2"
      inputClassName="placeholder:text-gray-300 placeholder:text-sm"
      startIcon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="mr-2 size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      }
    />
  )
}
