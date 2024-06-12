import React, { useMemo } from 'react'
import { usePaginationContext } from './PaginationMain'
import { getChunk } from '../../utils/getChunk'
import { getQueries } from '../../utils/getQueries'

interface PaginationNumberingProps {
  children: (props: { active: boolean; numbering: number }) => React.ReactNode
}

function PaginationNumbering({
  children,
}: PaginationNumberingProps): React.ReactNode {
  const { page, totalPage, numberingCount, queries, setPage, onNavigate } =
    usePaginationContext()

  const onClick = (i: number) => {
    setPage(i + 1)
    onNavigate(`?page=${i + 1}${queries ? `${getQueries(queries)}` : ''}`)
  }

  const pageNumbers = Array.from({ length: totalPage }).map((_, idx) => (
    <button
      key={idx}
      onClick={() => onClick(idx)}
      aria-label={`Page ${idx + 1}`}
      aria-current={page === idx + 1 ? 'page' : undefined}
    >
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
