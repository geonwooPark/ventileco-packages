import React from 'react'
import { usePaginationContext } from './PaginationMain'

interface PaginationPrevBoundaryProps {
  prevBoundary?: number
  className?: string
}

export default function PaginationPrevBoundary({
  prevBoundary = 1,
  className,
}: PaginationPrevBoundaryProps) {
  const { page, numberingIndex, onClick } = usePaginationContext()

  return numberingIndex !== 0 ? (
    <>
      {Array.from({ length: prevBoundary }).map((_, idx) => (
        <button
          key={idx}
          onClick={(e) => onClick(Number(e.currentTarget.value))}
          value={idx + 1}
          aria-label={`Page ${idx + 1}`}
          aria-current={page === idx + 1 ? 'page' : undefined}
          className={className}
        >
          {idx + 1}
        </button>
      ))}
      ...
    </>
  ) : null
}
