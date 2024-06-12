import React, {
  ForwardedRef,
  PropsWithChildren,
  forwardRef,
  useMemo,
  useState,
} from 'react'
import { getParameterByName } from '../../utils/getParameterByName'
import PaginationPrevButton from './PaginationPrevButton'
import PaginationNextButton from './PaginationNextButton'
import PaginationNumbering from './PaginationNumbering'
import { _createContext } from '../../utils/_createContext'

export interface PaginationProps {
  /** 페이지 이동을 위해 실행하는 콜백함수 */
  onNavigate: (path: string) => void
  /** 페이지로 나눌 전체 아이템 갯수를 설정 */
  totalItemCount: number
  /** 한 페이지에 보여지는 아이템의 갯수를 설정 */
  listItemCount: number
  /** 페이지네이션 UI에 한번에 보여지는 페이지 갯수를 설정 */
  numberingCount?: number
  /** 페이지 외 필터, 정렬 등의 쿼리를 설정 */
  queries?: Record<string, string>
  className?: string
}

type PaginationContextState = {
  page: number
  totalPage: number
  numberingCount?: number
  queries?: Record<string, string>
  setPage: React.Dispatch<React.SetStateAction<number>>
  onNavigate: (path: string) => void
}

export const [usePaginationContext, PaginationProvider] =
  _createContext<PaginationContextState>()

function PaginationMain(
  {
    children,
    onNavigate,
    totalItemCount,
    numberingCount = 3,
    queries,
    listItemCount,
    className,
  }: PropsWithChildren<PaginationProps>,
  forwardRef: ForwardedRef<HTMLDivElement>,
) {
  const currentPage = Number(getParameterByName('page'))
  const [page, setPage] = useState(currentPage || 1)

  const totalPage = useMemo(
    () => Math.ceil(totalItemCount / listItemCount),
    [totalItemCount, listItemCount],
  )

  const providerValue = useMemo(
    () => ({
      page,
      totalPage,
      numberingCount,
      queries,
      setPage,
      onNavigate,
    }),
    [page, totalPage, numberingCount, queries, onNavigate],
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
  NextButton: PaginationNextButton,
  Numbering: PaginationNumbering,
})

export default Pagination
