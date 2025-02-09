import { render, screen } from '@testing-library/react'
import TestComponent from './TestComponent'
import React from 'react'

describe('Pagination Component Tests', () => {
  test('renders Pagination', () => {
    render(<TestComponent />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.queryByText('6')).not.toBeInTheDocument()
  })
})
