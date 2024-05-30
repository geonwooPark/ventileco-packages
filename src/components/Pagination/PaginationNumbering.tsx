import React, { useContext, useMemo } from 'react'
import { PaginationContext } from './Pagination'
import { getChunk } from '../../utils/getChunk'
import { getQueries } from '../../utils/getQueries'

interface PaginationNumberingProps {
  children: (props: { active: boolean; numbering: number }) => React.ReactNode
}

function PaginationNumbering({
  children,
}: PaginationNumberingProps): React.ReactNode {
  const { page, totalPage, numberingCount, queries, setPage, onNavigate } =
    useContext(PaginationContext)

  const onClick = (i: number) => {
    setPage(i + 1)
    onNavigate(`?page=${i + 1}${queries ? `${getQueries(queries)}` : ''}`)
  }

  const pageNumbers = Array.from({ length: totalPage }).map((_, idx) => (
    <button key={idx} onClick={() => onClick(idx)}>
      {children({ active: page === idx + 1, numbering: idx + 1 })}
    </button>
  ))

  const chunkedTotalPageArr = getChunk(pageNumbers, numberingCount)
  const numberingIndex = useMemo(
    () => Math.floor((page - 1) / (numberingCount as number)),
    [page, numberingCount],
  )

  return chunkedTotalPageArr[numberingIndex]
}

export default PaginationNumbering
