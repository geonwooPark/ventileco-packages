import { render, screen } from '@testing-library/react'
import { Normal } from './Accordion.stories'
import userEvent from '@testing-library/user-event'

describe('Accordion', () => {
  it('Accordion 컴포넌트가 렌더링되는지 확인', () => {
    render(<Normal />)
    expect(screen.getByRole('tablist')).toBeInTheDocument()
  })
  it('마우스를 사용하여 탭을 선택하는 케이스', async () => {
    render(<Normal />)

    const headings = screen.getAllByRole('heading')

    await userEvent.click(headings[0])
    const regions = screen.getAllByRole('region')

    expect(regions[0]).toBeInTheDocument()
  })
  it('Tab키를 사용하여 탭을 이동히는 케이스', async () => {
    render(<Normal />)

    await userEvent.tab()
    await userEvent.keyboard('{Enter}')
    const firstContent = screen.getByText('Content1')

    expect(firstContent).toBeInTheDocument()

    await userEvent.tab()
    await userEvent.keyboard('[Enter]')
    const secondContent = screen.getByText('Content2')

    expect(secondContent).toBeInTheDocument()
  })
})
