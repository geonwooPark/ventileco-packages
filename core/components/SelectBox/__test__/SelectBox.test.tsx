import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TestComponent from './TestComponent'
import React from 'react'

describe('SelectBox Component Tests', () => {
  test('renders SelectBox', () => {
    render(<TestComponent />)

    expect(screen.getByPlaceholderText('🐝 Fruits')).toBeInTheDocument()
  })

  test('click trigger to see the list box', async () => {
    render(<TestComponent />)

    await userEvent.click(screen.getByPlaceholderText('🐝 Fruits'))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  test('selecting an option using mouse interaction', async () => {
    render(<TestComponent />)

    const trigger = screen.getByPlaceholderText('🐝 Fruits')
    await userEvent.click(trigger)
    await userEvent.click(screen.getByText('🍑 Peach'))

    await waitFor(() => {
      expect(screen.getByText('🍑 Peach')).toBeInTheDocument()
    })
  })

  test('selecting an option using keyboard interaction', async () => {
    render(<TestComponent />)

    const trigger = screen.getByPlaceholderText('🐝 Fruits') as HTMLInputElement
    await userEvent.click(trigger)
    await userEvent.keyboard('[ArrowDown][Enter]')

    await waitFor(() => {
      expect(trigger.value).toBe('🥝 Kiwi')
    })
  })
})
