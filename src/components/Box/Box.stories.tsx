import type { Meta } from '@storybook/react'
import Box from './Box'
import { useRef } from 'react'

const meta: Meta<typeof Box> = {
  title: 'COMPONENTS/Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
}

export default meta

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
