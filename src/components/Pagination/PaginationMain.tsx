import {
  ForwardedRef,
  PropsWithChildren,
  forwardRef,
  useCallback,
  useMemo,
  useState,
} from 'react'
import { getParameterByName } from '../../utils/getParameterByName'
import { _createContext } from '../../utils/_createContext'
import PaginationPrevButton from './PaginationPrevButton'
import PaginationNextButton from './PaginationNextButton'
import PaginationNumbering from './PaginationNumbering'
import PaginationPrevBoundary from './PaginationPrevBoundary'
import PaginationNextBoundary from './PaginationNextBoundary'

export interface PaginationProps {
  totalItemCount: number
  listItemCount: number
  numberingCount?: number
  className?: string
  onNavigate: any
}

type PaginationContextState = {
  page: number
  totalPage: number
  numberingCount: number
  numberingIndex: number
  onClick: (i: number) => void
  onNextClick: () => void
  onPrevClick: () => void
}

export const [usePaginationContext, PaginationProvider] =
  _createContext<PaginationContextState>()

function PaginationMain(
  {
    children,
    totalItemCount,
    numberingCount = 3,
    listItemCount,
    className,
    onNavigate,
  }: PropsWithChildren<PaginationProps>,
  forwardRef: ForwardedRef<HTMLDivElement>,
) {
  const currentPage = Number(getParameterByName('page'))
  const [page, setPage] = useState(currentPage || 1)

  const totalPage = useMemo(
    () => Math.ceil(totalItemCount / listItemCount),
    [totalItemCount, listItemCount],
  )

  const numberingIndex = useMemo(
    () => Math.floor((page - 1) / (numberingCount as number)),
    [page, numberingCount],
  )

  const onClick = useCallback((i: number) => {
    setPage(i + 1)
    onNavigate()
  }, [])

  const onNextClick = useCallback(() => {
    setPage((prev) => prev + 1)
    onNavigate()
  }, [])

  const onPrevClick = useCallback(() => {
    setPage((prev) => prev - 1)
    onNavigate()
  }, [])

  const providerValue = useMemo(
    () => ({
      page,
      totalPage,
      numberingCount,
      numberingIndex,
      onClick,
      onNextClick,
      onPrevClick,
    }),
    [page, totalPage, numberingCount, numberingIndex],
  )

  return (
    <PaginationProvider value={providerValue}>
      <div
        role="navigation"
        ref={forwardRef}
        aria-label="Pagination Navigation"
        className={className}
      >
        {children}
      </div>
    </PaginationProvider>
  )
}

const Pagination = Object.assign(forwardRef(PaginationMain), {
  PrevButton: PaginationPrevButton,
  PrevBoundary: PaginationPrevBoundary,
  NextButton: PaginationNextButton,
  NextBoundary: PaginationNextBoundary,
  Numbering: PaginationNumbering,
})

export default Pagination
