import React, { useState } from 'react'
import { Pagination as VPagination } from 'ventileco-ui'

export default function Pagination() {
  const [page, setPage] = useState(1)

  const onNavigate = (value: number) => {
    setPage(value)
  }

  return (
    <VPagination
      page={page}
      listItemCount={5}
      totalItemCount={92}
      numberingCount={5}
      onNavigate={onNavigate}
      className="flex items-center gap-3 text-lg"
    >
      <VPagination.PrevButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </VPagination.PrevButton>

      <VPagination.PrevBoundary prevBoundary={3} className="size-8" />

      <VPagination.Numbering>
        {({ active, numbering }) => (
          <div
            className={`flex size-8 items-center justify-center rounded-full border ${active ? 'border-blue-600 text-blue-600' : 'border-transparent text-black'} `}
          >
            {numbering}
          </div>
        )}
      </VPagination.Numbering>

      <VPagination.NextBoundary nextBoundary={3} className="size-8" />

      <VPagination.NextButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </VPagination.NextButton>
    </VPagination>
  )
}
