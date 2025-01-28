import React, { useState } from 'react'
import Pagination from '../PaginationMain'

export default function TestComponent() {
  const [page, setPage] = useState(1)

  const onNavigate = (value: number) => {
    setPage(value)
  }

  return (
    <Pagination
      page={page}
      listItemCount={5}
      totalItemCount={92}
      numberingCount={5}
      onNavigate={onNavigate}
    >
      <Pagination.PrevButton></Pagination.PrevButton>

      <Pagination.PrevBoundary prevBoundary={3} />

      <Pagination.Numbering>
        {({ active, numbering }) => <div>{numbering}</div>}
      </Pagination.Numbering>

      <Pagination.NextBoundary nextBoundary={3} />

      <Pagination.NextButton></Pagination.NextButton>
    </Pagination>
  )
}
