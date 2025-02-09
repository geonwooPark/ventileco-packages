import React from 'react'
import Accordion from '.'

export default {
  title: 'COMPONENTS/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
}

export function Normal() {
  return <Accordion />
}
