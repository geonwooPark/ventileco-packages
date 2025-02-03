import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TestComponent from './TestComponent'
import React from 'react'

describe('Switch Component Tests', () => {
  test('renders Switch', () => {
    render(<TestComponent />)

    expect(screen.getByRole('switch')).toBeInTheDocument()
  })

  test('selecting an option using mouse interaction', async () => {
    render(<TestComponent />)

    const switchButton = screen.getByRole('switch')

    await userEvent.click(switchButton)

    expect(switchButton).toHaveAttribute('aria-checked', 'true')
  })

  test('selecting an option using keyboard interaction', async () => {
    render(<TestComponent />)

    const switchButton = screen.getByRole('switch')

    await userEvent.keyboard('[Tab][Enter]')

    expect(switchButton).toHaveAttribute('aria-checked', 'true')
  })
})
