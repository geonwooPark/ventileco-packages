import type { Meta, StoryObj } from '@storybook/react'
import Button, { ButtonProps } from './Button'

const meta: Meta<typeof Button> = {
  title: 'COMPONENTS/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Button>

export function Normal(args: ButtonProps) {
  return <Button {...args}>BUTTON</Button>
}
Normal.args = {
  type: 'button',
  className:
    'h-[50px] w-[320px] rounded-md bg-black text-base font-bold text-white transition-all duration-200 hover:opacity-80',
  disabled: false,
  isLoading: false,
}

export function WithIcon(args: ButtonProps) {
  return (
    <Button {...args}>
      <div className="flex items-center justify-center">
        <div className="mr-2 size-5 bg-gray-400" />
        <p>BUTTON</p>
      </div>
    </Button>
  )
}
WithIcon.args = {
  type: 'button',
  className:
    'h-[50px] w-[320px] rounded-md bg-black text-base font-bold text-white transition-all duration-200 hover:opacity-80',
  disabled: false,
  isLoading: false,
}

export function WithVerticalIcon(args: ButtonProps) {
  return (
    <Button {...args}>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="size-5 bg-gray-400" />
        <p>BUTTON</p>
      </div>
    </Button>
  )
}
WithVerticalIcon.args = {
  type: 'button',
  className:
    'h-[80px] w-[320px] rounded-md bg-black text-base font-bold text-white transition-all duration-200 hover:opacity-80',
  disabled: false,
  isLoading: false,
}

export function LoadingStatus(args: ButtonProps) {
  return <Button {...args}>BUTTON</Button>
}
LoadingStatus.args = {
  type: 'button',
  className:
    'h-[50px] w-[320px] rounded-md bg-black text-base font-bold text-white transition-all duration-200 hover:opacity-80',
  disabled: false,
  isLoading: true,
}

export function DisabledStatus(args: ButtonProps) {
  return <Button {...args}>BUTTON</Button>
}
DisabledStatus.args = {
  type: 'button',
  className:
    'h-[50px] w-[320px] rounded-md bg-black text-base font-bold text-white transition-all duration-200 hover:opacity-80',
  disabled: true,
  isLoading: false,
}
