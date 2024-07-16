import { render, screen } from '@testing-library/react'
import { Normal } from './Tabs.stories'
import userEvent from '@testing-library/user-event'

describe('Tabs', () => {
  it('기본 탭 컴포넌트가 렌더링되는지 확인', () => {
    render(<Normal />)
    expect(screen.getByRole('tablist')).toBeInTheDocument()
  })
  it('마우스를 사용하여 옵션을 선택하는 케이스', async () => {
    render(<Normal />)
    const secondTab = screen.getByText('🍒 Cherry')

    await userEvent.click(secondTab)

    const secondContent = screen.getByText('Content4')
    expect(secondContent).toBeInTheDocument()
  })
  it('키보드를 사용하여 옵션을 선택하는 케이스', async () => {
    render(<Normal />)

    await userEvent.keyboard('[Tab][Tab][Enter]')

    const secondContent = screen.getByText('🍒 Cherry')
    expect(secondContent).toBeInTheDocument()
  })
})
