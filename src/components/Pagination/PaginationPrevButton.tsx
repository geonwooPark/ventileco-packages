import { PropsWithChildren, useContext, useMemo } from 'react'
import { PaginationContext } from './PaginationMain'
import { getQueries } from '../../utils/getQueries'

function PaginationPrevButton({ children }: PropsWithChildren) {
  const { page, queries, setPage, onNavigate } = useContext(PaginationContext)

  const onClick = () => {
    setPage((prev) => prev - 1)
    onNavigate(`?page=${page - 1}${queries ? `${getQueries(queries)}` : ''}`)
  }

  const prevButtonStyle = useMemo(
    () => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: page === 1 ? '0.3' : '1',
    }),
    [page],
  )

  return (
    <button
      disabled={page === 1}
      onClick={onClick}
      style={prevButtonStyle}
      aria-label="Previous Page"
      aria-disabled={page === 1}
    >
      {children}
    </button>
  )
}

export default PaginationPrevButton
