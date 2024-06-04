import { render, screen } from '@testing-library/react'
import { Controlled } from './CheckBox.stories'

describe('CheckBox', () => {
  it('기본 체크박스 그룹이 렌더링되는지 확인', () => {
    render(<Controlled />)

    expect(screen.getByRole('group')).toBeInTheDocument()
  })
})
