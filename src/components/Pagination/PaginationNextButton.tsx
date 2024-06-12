import { PropsWithChildren, useMemo } from 'react'
import { usePaginationContext } from './PaginationMain'
import { getQueries } from '../../utils/getQueries'

function PaginationNextButton({ children }: PropsWithChildren) {
  const { page, totalPage, queries, setPage, onNavigate } =
    usePaginationContext()

  const onClick = () => {
    setPage((prev) => prev + 1)
    onNavigate(`?page=${page + 1}${queries ? `${getQueries(queries)}` : ''}`)
  }

  const nextButtonStyle = useMemo(
    () => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: page === totalPage ? '0.3' : '1',
    }),
    [page, totalPage],
  )

  return (
    <button
      disabled={page === totalPage}
      onClick={onClick}
      style={nextButtonStyle}
      aria-label="Next Page"
      aria-disabled={page === totalPage}
    >
      {children}
    </button>
  )
}

export default PaginationNextButton
