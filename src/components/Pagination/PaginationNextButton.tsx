import React, { PropsWithChildren, useContext } from 'react'
import { PaginationContext } from './Pagination'
import { getQueries } from '../../utils/getQueries'

function PaginationNextButton({ children }: PropsWithChildren) {
  const { page, totalPage, queries, setPage, onNavigate } =
    useContext(PaginationContext)

  const onClick = () => {
    setPage((prev) => prev + 1)
    onNavigate(`?page=${page + 1}${queries ? `${getQueries(queries)}` : ''}`)
  }

  return (
    <button
      disabled={page === totalPage}
      onClick={onClick}
      className={`flex items-center justify-center ${page === totalPage && 'opacity-30'}`}
    >
      {children}
    </button>
  )
}

export default PaginationNextButton
