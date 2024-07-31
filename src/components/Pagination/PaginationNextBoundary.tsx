import { usePaginationContext } from './PaginationMain'

interface PaginationNextBoundaryProps {
  nextBoundary?: number
  className?: string
}

export default function PaginationNextBoundary({
  nextBoundary,
  className,
}: PaginationNextBoundaryProps) {
  const { page, totalPage, numberingIndex, numberingCount, onClick } =
    usePaginationContext()

  const lastIndex = Math.ceil(totalPage / numberingCount)

  return numberingIndex !== lastIndex - 1 ? (
    <>
      ...
      {Array.from({ length: nextBoundary || 1 })
        .map((_, idx) => (
          <button
            key={idx}
            onClick={() => onClick(totalPage - idx - 1)}
            aria-label={`Page ${totalPage - idx}`}
            aria-current={page === totalPage - idx ? 'page' : undefined}
            className={className}
          >
            {totalPage - idx}
          </button>
        ))
        .reverse()}
    </>
  ) : null
}
