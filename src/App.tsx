import Calendar from './components/Calendar/CalendarMain'
import { formatDate } from './components/Calendar/utils'

export default function App() {
  return (
    <Calendar monthFormat="YYYY년 MM월" className="text-2xl">
      <div className="flex items-center justify-between py-6">
        <div className="flex items-center gap-6">
          <Calendar.PrevYear>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-8"
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
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </Calendar.PrevMonth>
        </div>
        <Calendar.SelectedMonth className="text-3xl" />
        <div className="flex items-center gap-6">
          <Calendar.NextMonth>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-8"
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
              className="size-8"
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
            className={`${isToday && 'font-bold'}
            ${isOtherMonth && 'text-gray-200'}
            ${isSaturday && 'text-blue-400'} 
            ${isSunday && 'text-red-400'} 
            size-10`}
          >
            {formatDate(date, 'DD')}
          </button>
        )}
      </Calendar.Date>
    </Calendar>
  )
}
