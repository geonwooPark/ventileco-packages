import { render, screen } from '@testing-library/react'
import { Normal } from './Radio.stories'
import userEvent from '@testing-library/user-event'

describe('Radio', () => {
  it('기본 라디오 그룹이 렌더링되는지 확인', () => {
    render(<Normal />)

    expect(screen.getByRole('radiogroup')).toBeInTheDocument()
  })
  it('마우스를 사용하여 옵션을 선택하는 케이스', async () => {
    render(<Normal />)
    const radioGroup = screen.getAllByRole('radio')
    const firstRadioButton = radioGroup[0]

    await userEvent.click(firstRadioButton)

    expect(firstRadioButton).toBeChecked()
  })
  it('키보드를 사용하여 옵션을 선택하는 케이스', async () => {
    render(<Normal />)
    const radioGroup = screen.getAllByRole('radio')
    const firstRadioButton = radioGroup[0]

    await userEvent.keyboard('[Tab][Enter]')

    expect(firstRadioButton).toBeChecked()
  })
})
