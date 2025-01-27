import React from 'react'
import ToolTip, { ToolTipProps } from './ToolTipMain'

export default {
  title: 'COMPONENTS/ToolTip',
  component: ToolTip,
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
    direction: {
      description: '툴팁이 생성되는 방향을 결정합니다.',
      table: {
        type: {
          summary:
            'top|topLeft|topRight|bottom|bottomLeft|bottomRight|left|leftTop|leftBottom|right|rightTop|rightBottom',
        },
      },
    },
    enterDelay: {
      description: '툴팁이 나타나기까지의 타임을 조절합니다.',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    leaveDelay: {
      description: '툴팁이 나타나기까지의 타임을 조절합니다.',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    disabled: {
      description: '툴팁의 사용 여부를 결정합니다.',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    gap: {
      description: '툴팁과 컨텐츠 사이의 간격을 조절합니다.',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    triangle: {
      description: '삼각형 모양의 말풍선 꼬리를 렌더링 여부를 결정합니다.',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
  },
}

export function Normal() {
  return (
    <ToolTip direction="bottom">
      <ToolTip.Trigger>
        <div className="rounded-md bg-gray-800 px-2 py-1 text-white">
          Trigger
        </div>
      </ToolTip.Trigger>
      <ToolTip.Content>
        <div className="rounded-md bg-black px-3 py-5 text-white shadow-md">
          Content
        </div>
        <ToolTip.Triangle className="size-2.5 bg-black" />
      </ToolTip.Content>
    </ToolTip>
  )
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
