import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TestComponent from './TestComponent'
import React from 'react'

describe('Tabs Component Tests', () => {
  test('renders Tabs', () => {
    render(<TestComponent />)

    expect(screen.getByRole('tablist')).toBeInTheDocument()
  })

  test('selecting an option using mouse interaction', async () => {
    render(<TestComponent />)

    const secondTab = screen.getByText('🍒 Cherry')

    await userEvent.click(secondTab)

    const secondContent = screen.getByText('Content4')
    expect(secondContent).toBeInTheDocument()
  })

  test('selecting an option using keyboard interaction', async () => {
    render(<TestComponent />)

    await userEvent.keyboard('[Tab][Tab][Enter]')

    const secondContent = screen.getByText('🍒 Cherry')
    expect(secondContent).toBeInTheDocument()
  })
})
