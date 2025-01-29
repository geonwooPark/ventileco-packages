import React, { CSSProperties, PropsWithChildren, useMemo } from 'react'
import { usePaginationContext } from './PaginationMain'

function PaginationPrevButton({ children }: PropsWithChildren) {
  const { page, onPrevClick } = usePaginationContext()

  const prevButtonStyle = useMemo<CSSProperties>(
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
      onClick={onPrevClick}
      style={prevButtonStyle}
      aria-label="Previous Page"
      aria-disabled={page === 1}
    >
      {children}
    </button>
  )
}

export default PaginationPrevButton
