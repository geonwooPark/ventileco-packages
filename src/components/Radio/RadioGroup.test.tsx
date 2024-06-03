import { render, screen } from '@testing-library/react'
import { Uncontrolled } from './RadioGroup.stories'

describe('RadioGroup', () => {
  it('기본 라디오 그룹이 렌더링되는지 확인', () => {
    render(<Uncontrolled />)

    expect(screen.getByRole('radiogroup')).toBeInTheDocument()
  })
})
