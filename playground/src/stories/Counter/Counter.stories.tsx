import React from 'react'
import VCounter from '.'

export default {
  title: 'COMPONENTS/Counter',
  component: VCounter,
  parameters: {
    layout: 'centered',
  },
}

export function Normal() {
  return <VCounter />
}
