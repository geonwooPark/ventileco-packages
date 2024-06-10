import React, { useRef, useState } from 'react'
import Input from './InputMain'
import { Meta } from '@storybook/react'
import { useForm } from 'react-hook-form'

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
      <Input.InputBox className="flex h-[50px] w-[240px] items-center justify-between rounded-md border px-2 text-black">
        <div>
          <div className="mr-1 size-5 bg-gray-400" />
        </div>
        <Input.InputArea />
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
        <Input.InputBox className="flex h-[50px] w-[240px] items-center justify-between rounded-md border px-2 text-black">
          <div>
            <div className="mr-1 size-5 bg-gray-400" />
          </div>
          <Input.InputArea />
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
      <Input.InputBox className="flex h-[50px] w-[240px] items-center justify-between rounded-md border px-2 text-black">
        <div>
          <div className="mr-1 size-5 bg-gray-400" />
        </div>
        <Input.InputArea />
      </Input.InputBox>
    </Input>
  )
}
