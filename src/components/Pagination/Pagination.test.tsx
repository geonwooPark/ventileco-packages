import { render, screen } from '@testing-library/react'
import Pagination from './Pagination'

describe('Pagination', () => {
  it('기본 페이지네이션이 렌더링되는지 확인', () => {
    render(
      <Pagination listItemCount={5} totalItemCount={24} onNavigate={() => {}}>
        <Pagination.PrevButton></Pagination.PrevButton>
        <Pagination.Numbering>
          {({ active, numbering }) => (
            <div
              className={`flex size-6 items-center justify-center rounded-full border ${active ? 'border-blue-600 text-blue-600' : 'border-transparent text-black'} `}
            >
              {numbering}
            </div>
          )}
        </Pagination.Numbering>
        <Pagination.NextButton></Pagination.NextButton>
      </Pagination>,
    )
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.queryByText('4')).not.toBeInTheDocument()
  })
})
