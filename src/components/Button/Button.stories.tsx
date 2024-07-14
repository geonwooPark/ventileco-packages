import { Meta } from '@storybook/react'
import Button, { ButtonProps } from './Button'

export default {
  title: 'COMPONENTS/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      description: '버튼의 타입을 지정합니다.',
      table: {
        type: { summary: 'submit | button' },
      },
    },
    ref: {
      description: '컴포넌트의 인스턴스에 직접 접근하는 방법을 제공합니다.',
      table: {
        type: { summary: 'RefObject<HTMLButtonElement>' },
      },
    },
    children: {
      description: '자식 요소들을 포함합니다.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    className: {
      description: '요소의 클래스를 지정합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      description: '버튼의 활성화 상태를 조절합니다.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    isLoading: {
      description: '버튼의 로딩 상태를 조절합니다.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    onClick: {
      description: '버튼 클릭 시 호출되는 함수입니다.',
      table: {
        type: { summary: '() => void' },
      },
    },
    loadingIcon: {
      description: '버튼의 로딩에 사용되는 아이콘을 지정합니다.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
} as Meta

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
