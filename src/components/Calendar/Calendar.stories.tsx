import type { Meta } from '@storybook/react'
import Calendar from './CalendarMain'
import { formatDate } from './utils'
import useDatePicker from './hooks/useDatePicker'
import useDateRange from './hooks/useDateRange'

export default {
  title: 'COMPONENTS/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    ref: {
      description: '컴포넌트의 인스턴스에 직접 접근하는 방법을 제공합니다.',
      table: {
        type: { summary: 'RefObject<HTMLDivElement>' },
        category: 'Calendar',
      },
    },
    children: {
      description: '자식 요소들을 포함합니다.',
      table: {
        type: { summary: 'ReactNode' },
        category: 'Calendar',
      },
    },
    className: {
      description: '클래스를 지정합니다.',
      table: {
        type: { summary: 'string' },
        category: 'Calendar',
      },
    },
    monthFormat: {
      description: '달력의 현재 달을 표시하는 문자열 포맷을 결정합니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { detail: 'YYYY-MM' },
        category: 'Calendar',
      },
    },
    dayOfTheWeek: {
      description: '요일로 사용 될 문자열을 지정합니다.',
      table: {
        type: { summary: 'string[]' },
        category: 'Calendar.DayOfTheWeek',
      },
    },
    selected: {
      description:
        'DatePicker나 DateRange 사용 시 현재 선택된 날짜를 지정합니다.',
      table: {
        type: { summary: 'Date | Date[] | undefined' },
        category: 'Calendar.Date',
      },
    },
    rowColumn: {
      description: '달력의 행 간격를 지정합니다.',
      table: {
        type: { summary: 'number' },
        category: 'Calendar.Date',
      },
    },
  },
} as Meta

export function Normal() {
  return (
    <Calendar monthFormat="YYYY년 MM월" className="w-[360px] text-xl">
      <div className="flex items-center justify-between py-6">
        <div className="flex items-center gap-2">
          <Calendar.PrevYear>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
              />
            </svg>
          </Calendar.PrevYear>
          <Calendar.PrevMonth>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </Calendar.PrevMonth>
        </div>
        <Calendar.SelectedMonth className="text-xl" />
        <div className="flex items-center gap-2">
          <Calendar.NextMonth>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Calendar.NextMonth>
          <Calendar.NextYear>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Calendar.NextYear>
        </div>
      </div>
      <Calendar.DayOfTheWeek
        dayOfTheWeek={['일', '월', '화', '수', '목', '금', '토']}
        className="mb-4"
      >
        {({ item }) => (
          <div
            className={`
            ${item === '토' && 'text-blue-400'}
            ${item === '일' && 'text-red-400'}
          `}
          >
            {item}
          </div>
        )}
      </Calendar.DayOfTheWeek>
      <Calendar.Date>
        {({ date, isToday, isOtherMonth, isSaturday, isSunday }) => (
          <button
            className={`
            cursor-default
            ${isToday && 'w-full rounded-full bg-blue-600 text-white'}
            ${isOtherMonth && 'text-gray-200'}
            ${isSaturday && 'text-blue-400'} 
            ${isSunday && 'text-red-400'} 
            `}
          >
            {formatDate(date, 'D')}
          </button>
        )}
      </Calendar.Date>
    </Calendar>
  )
}

export function DatePicker() {
  const { date: selectedDate, onChange } = useDatePicker()

  return (
    <Calendar monthFormat="YYYY년 MM월" className="w-[360px] text-xl">
      <div className="flex items-center justify-between py-6">
        <div className="flex items-center gap-2">
          <Calendar.PrevYear>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
              />
            </svg>
          </Calendar.PrevYear>
          <Calendar.PrevMonth>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </Calendar.PrevMonth>
        </div>
        <Calendar.SelectedMonth className="text-xl" />
        <div className="flex items-center gap-2">
          <Calendar.NextMonth>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Calendar.NextMonth>
          <Calendar.NextYear>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Calendar.NextYear>
        </div>
      </div>
      <Calendar.DayOfTheWeek
        dayOfTheWeek={['일', '월', '화', '수', '목', '금', '토']}
        className="mb-4"
      >
        {({ item }) => (
          <div
            className={`
            ${item === '토' && 'text-blue-400'}
            ${item === '일' && 'text-red-400'}
          `}
          >
            {item}
          </div>
        )}
      </Calendar.DayOfTheWeek>
      <Calendar.Date selected={selectedDate}>
        {({
          date,
          isToday,
          isOtherMonth,
          isSaturday,
          isSunday,
          isSelected,
        }) => (
          <button
            onClick={() => onChange(date)}
            className={`
            ${isToday && 'w-full rounded-full bg-blue-600 text-white'}
            ${isOtherMonth && 'text-gray-200'}
            ${isSaturday && 'text-blue-400'} 
            ${isSunday && 'text-red-400'}
            ${isSelected && 'w-full rounded-full bg-green-600 text-white'} 
            `}
          >
            {formatDate(date, 'D')}
          </button>
        )}
      </Calendar.Date>
    </Calendar>
  )
}

export function DateRange() {
  const { dateRange, onRangeChange } = useDateRange()

  return (
    <Calendar monthFormat="YYYY년 MM월" className="w-[360px] text-xl">
      <div className="flex items-center justify-between py-6">
        <div className="flex items-center gap-2">
          <Calendar.PrevYear>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
              />
            </svg>
          </Calendar.PrevYear>
          <Calendar.PrevMonth>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </Calendar.PrevMonth>
        </div>
        <Calendar.SelectedMonth className="text-xl" />
        <div className="flex items-center gap-2">
          <Calendar.NextMonth>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Calendar.NextMonth>
          <Calendar.NextYear>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Calendar.NextYear>
        </div>
      </div>
      <Calendar.DayOfTheWeek
        dayOfTheWeek={['일', '월', '화', '수', '목', '금', '토']}
        className="mb-4"
      >
        {({ item }) => (
          <div
            className={`
            ${item === '토' && 'text-blue-400'}
            ${item === '일' && 'text-red-400'}
          `}
          >
            {item}
          </div>
        )}
      </Calendar.DayOfTheWeek>
      <Calendar.Date selected={dateRange} rowGap={6}>
        {({
          date,
          isToday,
          isOtherMonth,
          isSaturday,
          isSunday,
          isBetween,
          isStartDate,
          isEndDate,
        }) => (
          <button
            onClick={() => onRangeChange(date)}
            className={`
            ${isToday && 'w-full rounded-full bg-blue-600 text-white'}
            ${isOtherMonth && 'text-gray-200'}
            ${isSaturday && 'text-blue-400'} 
            ${isSunday && 'text-red-400'}
            ${isBetween && 'w-full rounded-none bg-purple-400'}
            ${isStartDate && 'w-full rounded-l-full bg-purple-600 text-white'}
            ${isEndDate && 'w-full rounded-r-full bg-purple-600 text-white'}
            `}
          >
            {formatDate(date, 'D')}
          </button>
        )}
      </Calendar.Date>
    </Calendar>
  )
}
