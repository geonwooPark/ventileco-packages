import { PropsWithChildren, useContext } from 'react'
import { PaginationContext } from './Pagination'
import { getQueries } from '../../utils/getQueries'

function PaginationPrevButton({ children }: PropsWithChildren) {
  const { page, queries, setPage, onNavigate } = useContext(PaginationContext)

  const onClick = () => {
    setPage((prev) => prev - 1)
    onNavigate(`?page=${page - 1}${queries ? `${getQueries(queries)}` : ''}`)
  }

  return (
    <button
      disabled={page === 1}
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: page === 1 ? '0.3' : '1',
      }}
    >
      {children}
    </button>
  )
}

export default PaginationPrevButton
