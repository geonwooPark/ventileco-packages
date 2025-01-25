import React from 'react'
import { usePaginationContext } from './PaginationMain'
import { getChunk } from './utils'

interface PaginationNumberingProps {
  children: (props: { active: boolean; numbering: number }) => React.ReactNode
}

function PaginationNumbering({
  children,
}: PaginationNumberingProps): React.ReactNode {
  const { page, totalPage, numberingCount, numberingIndex, onClick } =
    usePaginationContext()

  const pageNumbers = Array.from({ length: totalPage }).map((_, idx) => (
    <button
      key={idx}
      onClick={(e) => onClick(Number(e.currentTarget.value))}
      value={idx + 1}
      aria-label={`Page ${idx + 1}`}
      aria-current={page === idx + 1 ? 'page' : undefined}
    >
      {children({ active: page === idx + 1, numbering: idx + 1 })}
    </button>
  ))

  const chunkedTotalPageArr = getChunk(pageNumbers, numberingCount)

  return chunkedTotalPageArr[numberingIndex]
}

export default PaginationNumbering
