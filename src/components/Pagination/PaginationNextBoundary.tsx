import { usePaginationContext } from './PaginationMain'

interface PaginationNextBoundaryProps {
  nextBoundary?: number
  className?: string
}

export default function PaginationNextBoundary({
  nextBoundary = 1,
  className,
}: PaginationNextBoundaryProps) {
  const { page, totalPage, numberingIndex, numberingCount, onClick } =
    usePaginationContext()

  const lastIndex = Math.ceil(totalPage / numberingCount)

  return numberingIndex !== lastIndex - 1 ? (
    <>
      ...
      {Array.from({ length: nextBoundary })
        .map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => onClick(Number(e.currentTarget.value))}
            value={totalPage - idx}
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
