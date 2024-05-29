import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'COMPONENTS/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    label: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    ...Primary.args,
    label: '😄👍😍💯',
  },
}

export const Tertiary: Story = {
  args: {
    ...Primary.args,
    label: '📚📕📈🤓',
  },
}
