import ToolTip, { ToolTipProps } from './ToolTipMain'

export default {
  title: 'COMPONENTS/ToolTip',
  component: ToolTip,
  argTypes: {
    direction: {
      options: [
        'top',
        'topLeft',
        'topRight',
        'bottom',
        'bottomLeft',
        'bottomRight',
        'left',
        'leftTop',
        'leftBottom',
        'right',
        'rightTop',
        'rightBottom',
      ],
      control: { type: 'radio' },
    },
  },
  parameters: {
    layout: 'centered',
  },
}

export function Direction(args: ToolTipProps) {
  return (
    <ToolTip {...args}>
      <ToolTip.Trigger>
        <div className="rounded-md bg-gray-800 px-2 py-1 text-white">
          Trigger
        </div>
      </ToolTip.Trigger>
      <ToolTip.Content>
        <div className="rounded-md bg-black px-3 py-5 text-white shadow-md">
          Content
        </div>
      </ToolTip.Content>
    </ToolTip>
  )
}
Direction.args = {
  direction: 'top',
}

export function EnterDelay(args: ToolTipProps) {
  return (
    <ToolTip {...args}>
      <ToolTip.Trigger>
        <div className="rounded-md bg-gray-800 px-2 py-1 text-white">
          enterDelay
        </div>
      </ToolTip.Trigger>
      <ToolTip.Content>
        <div className="rounded-md bg-black px-3 py-5 text-white shadow-md">
          Content
        </div>
      </ToolTip.Content>
    </ToolTip>
  )
}
EnterDelay.args = {
  direction: 'top',
  enterDelay: 1000,
}

export function LeaveDelay(args: ToolTipProps) {
  return (
    <ToolTip {...args}>
      <ToolTip.Trigger>
        <div className="rounded-md bg-gray-800 px-2 py-1 text-white">
          leaveDelay
        </div>
      </ToolTip.Trigger>
      <ToolTip.Content>
        <div className="rounded-md bg-black px-3 py-5 text-white shadow-md">
          Content
        </div>
      </ToolTip.Content>
    </ToolTip>
  )
}
LeaveDelay.args = {
  direction: 'top',
  leaveDelay: 1000,
}

export function Disabled(args: ToolTipProps) {
  return (
    <ToolTip {...args}>
      <ToolTip.Trigger>
        <div className="rounded-md bg-gray-800 px-2 py-1 text-white">
          Trigger
        </div>
      </ToolTip.Trigger>
      <ToolTip.Content>
        <div className="rounded-md bg-black px-3 py-5 text-white shadow-md">
          Content
        </div>
      </ToolTip.Content>
    </ToolTip>
  )
}
Disabled.args = {
  direction: 'top',
  disabled: true,
}
