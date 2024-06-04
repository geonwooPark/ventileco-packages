import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Normal } from './SelectBox.stories'

describe('SelectBox', () => {
  it('SelectBox 컴포넌트가 렌더링되는지 확인', () => {
    render(<Normal />)

    expect(screen.getByText('메뉴를 선택하세요')).toBeInTheDocument()
  })

  it('트리거를 클릭하여 리스트박스가 보이는지 확인', async () => {
    render(<Normal />)

    await userEvent.click(screen.getByText('메뉴를 선택하세요'))
    expect(screen.getByRole('list')).toBeInTheDocument()
  })

  it('마우스를 사용하여 옵션을 선택하는 케이스', async () => {
    render(<Normal />)

    const trigger = screen.getByText('메뉴를 선택하세요')
    await userEvent.click(trigger)
    await userEvent.click(screen.getByText('Kiwi'))

    await waitFor(() => {
      expect(screen.getByText('Kiwi')).toBeInTheDocument()
    })
  })

  it('키보드를 사용하여 옵션을 선택하는 케이스', async () => {
    render(<Normal />)

    const trigger = screen.getByText('메뉴를 선택하세요')
    await userEvent.click(trigger)
    await userEvent.keyboard('[ArrowDown]')
    await userEvent.keyboard('[Enter]')

    await waitFor(() => {
      expect(screen.getByText('Kiwi')).toBeInTheDocument()
    })
  })
})
