import { PropsWithChildren, useMemo } from 'react'
import { usePaginationContext } from './PaginationMain'

function PaginationNextButton({ children }: PropsWithChildren) {
  const { page, totalPage, onNextClick } = usePaginationContext()

  const nextButtonStyle = useMemo(
    () => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: page === totalPage ? '0.3' : '1',
    }),
    [page, totalPage],
  )

  return (
    <button
      disabled={page === totalPage}
      onClick={onNextClick}
      style={nextButtonStyle}
      aria-label="Next Page"
      aria-disabled={page === totalPage}
    >
      {children}
    </button>
  )
}

export default PaginationNextButton
