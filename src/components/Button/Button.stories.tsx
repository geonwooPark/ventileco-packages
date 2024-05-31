import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'COMPONENTS/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Button>

export function Normal() {
  return (
    <Button
      type="button"
      className="h-[50px] w-[320px] rounded-md bg-black text-base font-bold text-white transition-all duration-200 hover:opacity-80"
    >
      <Button.Label>BUTTON</Button.Label>
    </Button>
  )
}

export function WithLeftIcon() {
  return (
    <Button
      type="button"
      className="h-[50px] w-[320px] rounded-md bg-black text-base font-bold text-white transition-all duration-200 hover:opacity-80"
    >
      <Button.Icon>
        <div className="mr-2 size-5 bg-gray-400" />
      </Button.Icon>
      <Button.Label>BUTTON</Button.Label>
    </Button>
  )
}

export function WithRightIcon() {
  return (
    <Button
      type="button"
      className="h-[50px] w-[320px] rounded-md bg-black text-base font-bold text-white transition-all duration-200 hover:opacity-80"
    >
      <Button.Label>BUTTON</Button.Label>
      <Button.Icon>
        <div className="ml-2 size-5 bg-gray-400" />
      </Button.Icon>
    </Button>
  )
}

export function LoadingStatus() {
  return (
    <Button
      type="button"
      isLoading
      className="h-[50px] w-[320px] rounded-md bg-black text-base font-bold text-white transition-all duration-200 hover:opacity-80"
    >
      <Button.Label>BUTTON</Button.Label>
      <Button.Icon>
        <div className="ml-2 size-5 bg-gray-400" />
      </Button.Icon>
    </Button>
  )
}

export function DisabledStatus() {
  return (
    <Button
      type="button"
      disabled
      className="h-[50px] w-[320px] rounded-md bg-black text-base font-bold text-white transition-all duration-200 hover:opacity-80"
    >
      <Button.Label>BUTTON</Button.Label>
    </Button>
  )
}
