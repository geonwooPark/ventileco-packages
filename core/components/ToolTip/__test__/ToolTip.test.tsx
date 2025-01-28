import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TestComponent from './TestComponent'
import React from 'react'

describe('ToolTip Component Tests', () => {
  test('hover and unhover behavior on the basic tooltip', async () => {
    render(<TestComponent />)

    const triggerElement = screen.getByText('Trigger')

    // 마우스를 올렸을 때 툴팁이 보임
    await userEvent.hover(triggerElement)
    await waitFor(() => {
      expect(screen.getByText('Content')).toBeVisible()
    })

    // 마우스를 내렸을 때 툴팁이 사라짐
    await userEvent.unhover(triggerElement)
    await waitFor(() => {
      const tooltip = screen.queryByText('Content')
      expect(tooltip).not.toBeInTheDocument()
    })
  })
})
