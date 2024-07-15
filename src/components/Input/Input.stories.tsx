import React, { useRef, useState } from 'react'
import Input from './InputMain'
import { Meta } from '@storybook/react'
import { useForm } from 'react-hook-form'

export default {
  title: 'COMPONENTS/Input',
  component: Input,
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
    className: {
      description: '최상위 요소의 클래스를 지정합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    register: {
      description: 'React Hook Form을 사용하기 위한 register를 등록합니다.',
      table: {
        type: { summary: 'any' },
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

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <Input
      type="text"
      name="email"
      value={value}
      onChange={onChange}
      placeholder="Enter text"
      ref={inputRef}
    >
      <Input.Label>Input</Input.Label>
      <Input.InputBox className="flex h-[40px] w-[240px] items-center justify-between rounded-md border border-black px-2 text-black">
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
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <Input.InputArea className="ml-2" />
      </Input.InputBox>
    </Input>
  )
}

export function WithReactHookForm() {
  const { register, handleSubmit } = useForm({
    defaultValues: { text: '' },
  })

  const onSubmit = (data: any) => console.log(data)

  const inputRegister = register('text')

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input type="text" placeholder="Enter text" register={inputRegister}>
        <Input.Label>Input</Input.Label>
        <Input.InputBox className="flex h-[40px] w-[240px] items-center justify-between rounded-md border border-black px-2 text-black">
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
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <Input.InputArea className="ml-2" />
        </Input.InputBox>
      </Input>
    </form>
  )
}

export function DisabledStatus() {
  const [value, setValue] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setValue(value)
  }
  return (
    <Input
      type="text"
      name="email"
      value={value}
      onChange={onChange}
      disabled
      placeholder="Enter text"
    >
      <Input.Label>Input</Input.Label>
      <Input.InputBox className="flex h-[40px] w-[240px] items-center justify-between rounded-md border border-black px-2 text-black">
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
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <Input.InputArea className="ml-2" />
      </Input.InputBox>
    </Input>
  )
}
