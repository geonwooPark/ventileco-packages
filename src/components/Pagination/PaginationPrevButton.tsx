import React, { PropsWithChildren, useContext } from 'react'
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
      className={`flex items-center justify-center ${page === 1 && 'opacity-30'}`}
    >
      {children}
    </button>
  )
}

export default PaginationPrevButton
