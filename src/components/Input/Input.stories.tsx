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
      className="flex h-[50px] w-[240px] items-center justify-between rounded-md border px-2 text-black data-[disabled]:opacity-50"
    >
      <Input.InputArea />
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
      className="flex h-[50px] w-[240px] items-center justify-between rounded-md border px-2 text-black data-[disabled]:opacity-50"
    >
      <Input.Icon>
        <div className="mr-1 size-5 bg-gray-400" />
      </Input.Icon>
      <Input.InputArea />
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
      className="flex h-[50px] w-[240px] items-center justify-between rounded-md border px-2 text-black data-[disabled]:opacity-50"
    >
      <Input.InputArea />
    </Input>
  )
}
