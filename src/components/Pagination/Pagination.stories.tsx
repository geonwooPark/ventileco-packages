import type { Meta } from '@storybook/react'
import Pagination, { PaginationProps } from './Pagination'

const meta: Meta<typeof Pagination> = {
  title: 'COMPONENTS/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
}

export default meta

export function Normal(args: PaginationProps) {
  return (
    <Pagination {...args}>
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
Normal.args = {
  listItemCount: 5,
  totalItemCount: 24,
  numberingCount: 3,
}
