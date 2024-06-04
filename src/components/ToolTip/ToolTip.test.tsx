import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Direction } from './ToolTip.stories'

describe('ToolTip', () => {
  it('기본 툴팁에 마우스를 호버, 언호버하는 케이스', async () => {
    render(<Direction direction="top" />)

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
