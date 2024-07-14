import type { Meta } from '@storybook/react'
import Pagination from './PaginationMain'

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
      },
    },
    className: {
      description: '최상위 요소의 클래스를 지정합니다.',
      table: {
        type: { summary: 'string' },
      },
    },
    totalItemCount: {
      description: '전체 아이템 갯수를 설정합니다.',
      table: {
        type: { summary: 'number' },
      },
    },
    listItemCount: {
      description: '한 페이지에 보여지는 아이템의 갯수를 설정합니다.',
      table: {
        type: { summary: 'number' },
      },
    },
    numberingCount: {
      description:
        '페이지네이션 UI에 한번에 보여지는 페이지 갯수를 설정합니다.',
      table: {
        type: { summary: 'number' },
      },
    },
    queries: {
      description: '페이지 외 필터, 정렬 등의 쿼리를 설정합니다.',
      table: {
        type: { summary: 'Record<string, string>' },
      },
    },
    onNavigate: {
      description: '페이지 이동을 위해 실행하는 콜백함수입니다.',
      table: {
        type: { summary: '(path: string) => void' },
      },
    },
  },
} as Meta

export function Normal() {
  return (
    <Pagination
      className="flex items-center gap-4"
      listItemCount={5}
      totalItemCount={24}
      numberingCount={3}
      onNavigate={() => null}
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
      <Pagination.Numbering>
        {({ active, numbering }) => (
          <div
            className={`flex size-6 items-center justify-center rounded-full border ${active ? 'border-blue-600 text-blue-600' : 'border-transparent text-black'} `}
          >
            {numbering}
          </div>
        )}
      </Pagination.Numbering>
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
