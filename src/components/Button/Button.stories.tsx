import type { Meta } from '@storybook/react'
import Button, { ButtonProps } from './Button'

const meta: Meta<typeof Button> = {
  title: 'COMPONENTS/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
}

export default meta

export function Normal() {
  return (
    <Button
      type="button"
      className="h-[50px] w-[320px] rounded-md bg-black text-base font-bold text-white transition-all duration-200 hover:opacity-80"
    >
      BUTTON
    </Button>
  )
}

export function DisabledStatus(args: ButtonProps) {
  const isLoading = false
  const disabled = true

  return (
    <Button
      {...args}
      type="button"
      className={`h-[50px] w-[320px] rounded-md bg-black text-base font-bold text-white transition-all duration-200 ${!isLoading && !disabled && 'hover:opacity-80'}`}
    >
      BUTTON
    </Button>
  )
}
DisabledStatus.args = {
  disabled: true,
}
