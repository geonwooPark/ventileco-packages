import { render, screen } from '@testing-library/react'
import { Normal } from './Pagination.stories'

describe('Pagination', () => {
  it('기본 페이지네이션이 렌더링되는지 확인', () => {
    render(<Normal />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.queryByText('4')).not.toBeInTheDocument()
  })
})
