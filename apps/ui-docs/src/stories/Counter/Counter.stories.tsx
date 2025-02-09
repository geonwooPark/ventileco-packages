import React from 'react'
import Counter from '.'

export default {
  title: 'COMPONENTS/Counter',
  component: Counter,
  parameters: {
    layout: 'centered',
  },
}

export function Normal() {
  return <Counter />
}
