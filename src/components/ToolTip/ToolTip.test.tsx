import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ToolTip from './ToolTip'

describe('ToolTip', () => {
  it('기본 툴팁에 마우스를 호버, 언호버하는 케이스', async () => {
    render(
      <ToolTip direction={'top'} enterDelay={0} leaveDelay={0}>
        <div>
          <ToolTip.Trigger>Hover me</ToolTip.Trigger>
          <ToolTip.Content>Tooltip content</ToolTip.Content>
        </div>
      </ToolTip>,
    )

    const triggerElement = screen.getByText('Hover me')

    // 마우스를 올렸을 때 툴팁이 보임
    await userEvent.hover(triggerElement)
    await waitFor(() => {
      expect(screen.getByText('Tooltip content')).toBeVisible()
    })

    // 마우스를 내렸을 때 툴팁이 사라짐
    await userEvent.unhover(triggerElement)
    await waitFor(() => {
      const tooltip = screen.queryByText('Tooltip content')
      expect(tooltip).not.toBeInTheDocument()
    })
  })
})
