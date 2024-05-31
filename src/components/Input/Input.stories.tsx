import React, { useState } from 'react'
import Input from './Input'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Input> = {
  title: 'COMPONENTS/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Input>

export function Normal() {
  const [value, setValue] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setValue(value)
  }

  return (
    <div className="w-[240px]">
      <Input
        type="text"
        name="email"
        value={value}
        onChange={onChange}
        placeholder="Enter text"
      >
        <Input.Container className="h-[50px] rounded-md border px-2 text-black data-[disabled]:opacity-50">
          <Input.InputArea />
        </Input.Container>
      </Input>
    </div>
  )
}

export function WithLabel() {
  const [value, setValue] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setValue(value)
  }

  return (
    <div className="w-[240px]">
      <Input
        type="text"
        name="email"
        value={value}
        onChange={onChange}
        placeholder="Enter text"
      >
        <Input.Label>Input</Input.Label>
        <Input.Container className="h-[50px] rounded-md border px-2 text-black data-[disabled]:opacity-50">
          <Input.InputArea />
        </Input.Container>
      </Input>
    </div>
  )
}

export function WithLeftIcon() {
  const [value, setValue] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setValue(value)
  }
  return (
    <div className="w-[240px]">
      <Input
        type="text"
        name="email"
        value={value}
        onChange={onChange}
        placeholder="Enter text"
      >
        <Input.Container className="h-[50px] rounded-md border px-2 text-black data-[disabled]:opacity-50">
          <Input.Icon>
            <div className="mr-1 size-5 bg-gray-400" />
          </Input.Icon>
          <Input.InputArea />
        </Input.Container>
      </Input>
    </div>
  )
}

export function WithRightIcon() {
  const [value, setValue] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setValue(value)
  }
  return (
    <div className="w-[240px]">
      <Input
        type="text"
        name="email"
        value={value}
        onChange={onChange}
        placeholder="Enter text"
      >
        <Input.Container className="h-[50px] rounded-md border px-2 text-black data-[disabled]:opacity-50">
          <Input.InputArea />
          <Input.Icon>
            <div className="ml-1 size-5 bg-gray-400" />
          </Input.Icon>
        </Input.Container>
      </Input>
    </div>
  )
}

export function DisabledStatus() {
  const [value, setValue] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setValue(value)
  }
  return (
    <div className="w-[240px]">
      <Input
        type="text"
        name="email"
        value={value}
        onChange={onChange}
        disabled
        placeholder="Enter text"
      >
        <Input.Container className="h-[50px] rounded-md border px-2 text-black data-[disabled]:opacity-50">
          <Input.InputArea />
        </Input.Container>
      </Input>
    </div>
  )
}
