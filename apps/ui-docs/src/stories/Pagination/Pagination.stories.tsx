import React from 'react'
import VPagination from '.'

export default {
  title: 'COMPONENTS/Pagination',
  component: VPagination,
  parameters: {
    layout: 'centered',
  },
}

export function Normal() {
  return <VPagination />
}
