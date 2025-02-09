import React from 'react'
import { Calendar as VCalendar } from 'ventileco-ui'

export default function Calendar() {
  return (
    <VCalendar monthFormat="YYYY년 MM월" className="text-2xl w-[320px]">
      <div className="flex items-center justify-between py-6">
        <div className="flex items-center gap-2">
          <VCalendar.PrevYear>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
              />
            </svg>
          </VCalendar.PrevYear>
          <VCalendar.PrevMonth>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </VCalendar.PrevMonth>
        </div>
        <VCalendar.SelectedMonth className="text-xl" />
        <div className="flex items-center gap-2">
          <VCalendar.NextMonth>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </VCalendar.NextMonth>
          <VCalendar.NextYear>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg>
          </VCalendar.NextYear>
        </div>
      </div>
      <VCalendar.DayOfTheWeek
        dayOfTheWeek={['일', '월', '화', '수', '목', '금', '토']}
        className="mb-4"
      >
        {({ item }) => (
          <div
            className={`text-lg
        ${item === '토' && 'text-blue-400'}
        ${item === '일' && 'text-red-400'}
      `}
          >
            {item}
          </div>
        )}
      </VCalendar.DayOfTheWeek>
      <VCalendar.Date selected={new Date()}>
        {({ date, isToday, isOtherMonth, isSaturday, isSunday }) => (
          <div
            onClick={(e) => console.log(e)}
            className={`text-lg
                        ${isToday && 'size-7 flex justify-center items-center rounded-full bg-blue-600 text-white'}
                        ${isOtherMonth && 'text-gray-200'}
                        ${isSaturday && 'text-blue-400'} 
                        ${isSunday && 'text-red-400'}  
            `}
          >
            {date.getDate()}
          </div>
        )}
      </VCalendar.Date>
    </VCalendar>
  )
}
