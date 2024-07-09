import { render, screen } from '@testing-library/react'
import { Controlled } from './CheckBox.stories'
import userEvent from '@testing-library/user-event'

describe('CheckBox', () => {
  it('기본 체크박스 그룹이 렌더링되는지 확인', () => {
    render(<Controlled />)
    const checkbox = screen.getByRole('group')

    expect(checkbox).toBeInTheDocument()
  })
  it('마우스를 사용하여 옵션을 선택하는 케이스', async () => {
    render(<Controlled />)
    const checkboxes = screen.getAllByRole('checkbox')
    const firstCheckbox = checkboxes[0]

    await userEvent.click(firstCheckbox)

    expect(firstCheckbox).toBeChecked()
  })
  it('키보드를 사용하여 옵션을 선택하는 케이스', async () => {
    render(<Controlled />)
    const checkboxes = screen.getAllByRole('checkbox')
    const firstCheckbox = checkboxes[0]

    await userEvent.keyboard('[Tab][Enter]')

    expect(firstCheckbox).toBeChecked()
  })
})
