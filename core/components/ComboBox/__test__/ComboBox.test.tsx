import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import TestComponent from './TestComponent'

describe('ComboBox Component Tests', () => {
  test('renders ComboBox', () => {
    render(<TestComponent />)

    expect(screen.getByPlaceholderText('🐝 Fruits')).toBeInTheDocument()
  })

  test('click trigger to see the list box', async () => {
    render(<TestComponent />)

    const combobox = screen.getByRole('combobox')

    await userEvent.click(combobox)

    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  test('selecting an option using mouse interaction', async () => {
    render(<TestComponent />)

    const combobox = screen.getByRole('combobox') as HTMLInputElement
    await userEvent.click(combobox)
    await userEvent.click(screen.getByText('🥝 Kiwi'))

    await waitFor(() => {
      expect(combobox.value).toBe('🥝 Kiwi')
    })
  })

  test('selecting an option using keyboard interaction', async () => {
    render(<TestComponent />)

    const combobox = screen.getByRole('combobox') as HTMLInputElement
    await userEvent.click(combobox)
    await userEvent.keyboard('[ArrowDown][Enter]')

    await waitFor(() => {
      expect(combobox.value).toBe('🥝 Kiwi')
    })
  })

  test('searching options using a keyword', async () => {
    render(<TestComponent />)

    const combobox = screen.getByRole('combobox') as HTMLInputElement
    await userEvent.type(combobox, 'ki')

    expect(screen.getByText('🥝 Kiwi')).toBeInTheDocument()
    expect(screen.getByText('🥝 Kiwi2')).toBeInTheDocument()
  })
})
