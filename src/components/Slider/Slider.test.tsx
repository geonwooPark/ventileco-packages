import { render, screen } from '@testing-library/react'
import { Normal } from './Slider.stories'

describe('Slider', () => {
  it('기본 슬라이더가 렌더링되는지 확인', () => {
    render(<Normal gap={16} />)
    expect(screen.getByRole('slider')).toBeInTheDocument()
  })
})
