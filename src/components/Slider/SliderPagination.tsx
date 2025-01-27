import React from 'react'
import { useSliderContext } from './SliderMain'

interface SliderPaginationProps {
  children: ({
    active,
    numbering,
  }: {
    active: boolean
    numbering: number
  }) => React.ReactNode
  className?: string
}

export default function SliderPagination({
  children,
  className,
}: SliderPaginationProps) {
  const {
    pageRefs,
    page: currentPage,
    totalPage,
    loopEnabled,
    onPageClick,
    onKeyDown,
  } = useSliderContext()

  return (
    <div role="tablist" aria-label="Slider Pagination" className={className}>
      {Array.from({ length: totalPage }).map((_, idx) => (
        <button
          key={idx}
          ref={(el) => (pageRefs.current[idx] = el)}
          role="tab"
          aria-label={`Slider Page ${idx + 1}`}
          aria-current={currentPage === idx + 1 ? 'page' : undefined}
          onClick={() => onPageClick(idx + 1)}
          onKeyDown={(e) => onKeyDown(e, idx + 1)}
          onMouseDown={(e) => e.stopPropagation()}
          onMouseMove={(e) => e.stopPropagation()}
          onMouseUp={(e) => e.stopPropagation()}
          tabIndex={currentPage === idx + 1 ? 0 : -1}
          disabled={loopEnabled}
        >
          {children({ active: currentPage === idx + 1, numbering: idx + 1 })}
        </button>
      ))}
    </div>
  )
}
