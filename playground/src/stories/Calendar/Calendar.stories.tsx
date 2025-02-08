import React from 'react'
import VCalendar from '.'
import VDatePicker from './DatePicker'
import VDateRange from './DateRange'

export default {
  title: 'COMPONENTS/Calendar',
  component: VCalendar,
  parameters: {
    layout: 'centered',
  },
}

export function Normal() {
  return <VCalendar />
}

export function DatePicker() {
  return <VDatePicker />
}

export function DateRange() {
  return <VDateRange />
}
