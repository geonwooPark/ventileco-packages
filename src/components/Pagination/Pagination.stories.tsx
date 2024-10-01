import type { Meta } from '@storybook/react'
import Pagination from './PaginationMain'
import { useState } from 'react'

export default {
  title: 'COMPONENTS/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    ref: {
      description: '컴포넌트의 인스턴스에 직접 접근하는 방법을 제공합니다.',
      table: {
        type: { summary: 'RefObject<HTMLDivElement>' },
        category: 'Pagination',
      },
    },
    totalItemCount: {
      description: '전체 아이템 갯수를 설정합니다.',
      table: {
        type: { summary: 'number' },
        category: 'Pagination',
      },
    },
    listItemCount: {
      description: '한 페이지에 보여지는 아이템의 갯수를 설정합니다.',
      table: {
        type: { summary: 'boolean' },
        category: 'Pagination',
      },
    },
    numberingCount: {
      description:
        '페이지네이션 UI에 한번에 보여지는 페이지 갯수를 설정합니다.',
      table: {
        type: { summary: 'boolean' },
        category: 'Pagination',
      },
    },
    onNavigate: {
      description: '페이지 이동을 위해 실행하는 콜백함수입니다.',
      table: {
        type: { summary: '(path: string) => void' },
        category: 'Pagination',
      },
    },
    prevBoundary: {
      description: '시작에 항상 표시되는 페이지의 수를 설정합니다.',
      table: {
        type: { summary: 'boolean' },
        category: 'Pagination.PrevBoundary',
      },
    },
    nextBoundary: {
      description: '끝에 항상 표시되는 페이지의 수를 설정합니다.',
      table: {
        type: { summary: 'boolean' },
        category: 'Pagination.NextBoundary',
      },
    },
  },
} as Meta

export function Normal() {
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
      className="flex items-center gap-3 text-lg"
    >
      <Pagination.PrevButton>
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
      </Pagination.PrevButton>

      <Pagination.PrevBoundary prevBoundary={3} className="size-8" />

      <Pagination.Numbering>
        {({ active, numbering }) => (
          <div
            className={`flex size-8 items-center justify-center rounded-full border ${active ? 'border-blue-600 text-blue-600' : 'border-transparent text-black'} `}
          >
            {numbering}
          </div>
        )}
      </Pagination.Numbering>

      <Pagination.NextBoundary nextBoundary={3} className="size-8" />

      <Pagination.NextButton>
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
      </Pagination.NextButton>
    </Pagination>
  )
}
