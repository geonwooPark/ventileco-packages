import React, { useState } from 'react'
import Input from './Input'
import { Meta } from '@storybook/react'

const meta: Meta<typeof Input> = {
  title: 'COMPONENTS/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
}

export default meta

export function Normal() {
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
      placeholder="Enter text"
    >
      <Input.Label>Input</Input.Label>
      <Input.InputBox className="flex h-[50px] w-[240px] items-center justify-between rounded-md border px-2 text-black data-[disabled]:opacity-50">
        <Input.InputArea />
      </Input.InputBox>
    </Input>
  )
}

export function WithIcon() {
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
      placeholder="Enter text"
    >
      <Input.Label>Input</Input.Label>
      <Input.InputBox className="flex h-[50px] w-[240px] items-center justify-between rounded-md border px-2 text-black data-[disabled]:opacity-50">
        <div>
          <div className="mr-1 size-5 bg-gray-400" />
        </div>
        <Input.InputArea />
      </Input.InputBox>
    </Input>
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
      <Input.InputBox className="flex h-[50px] w-[240px] items-center justify-between rounded-md border px-2 text-black">
        <div>
          <div className="mr-1 size-5 bg-gray-400" />
        </div>
        <Input.InputArea />
      </Input.InputBox>
    </Input>
  )
}
