import type { Meta } from '@storybook/react'
import Box from './Box'
import { useRef } from 'react'

export default {
  title: 'COMPONENTS/Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    as: {
      description: '요소의 태그를 동적으로 지정합니다.',
      table: {
        type: { summary: 'IntrinsicElements' },
      },
    },
    ref: {
      description: '컴포넌트의 인스턴스에 직접 접근하는 방법을 제공합니다.',
      table: {
        type: { summary: 'RefObject<any>' },
      },
    },
    children: {
      description: '자식 요소들을 포함합니다.',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
  },
} as Meta

export function Normal() {
  const anchorRef = useRef<HTMLAnchorElement>(null)

  return (
    <Box
      as="a"
      target="_blank"
      ref={anchorRef}
      href="https://github.com/geonwooPark/ventileco-ui"
      className="inline-block rounded-md bg-black px-10 py-4 text-base font-bold text-white transition-all duration-200 hover:opacity-80"
    >
      Link
    </Box>
  )
}
