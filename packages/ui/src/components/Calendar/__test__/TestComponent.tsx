import React from 'react'
import Calendar from '../CalendarMain'

export default function TestComponent() {
  return (
    <Calendar monthFormat="YYYY년 MM월" className="text-2xl">
      <div className="flex items-center justify-between py-6">
        <div className="flex items-center gap-6">
          <Calendar.PrevYear>PrevYear</Calendar.PrevYear>
          <Calendar.PrevMonth>PrevMonth</Calendar.PrevMonth>
        </div>
        <Calendar.SelectedMonth className="text-3xl" />
        <div className="flex items-center gap-6">
          <Calendar.NextMonth>NextMonth</Calendar.NextMonth>
          <Calendar.NextYear>NextYear</Calendar.NextYear>
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
      <Calendar.Date selected={new Date()}>
        {({ date, isToday, isOtherMonth, isSaturday, isSunday }) => (
          <div
            onClick={(e) => console.log(e)}
            className={`${isToday && 'rounded-full bg-blue-600 text-white'}
            ${isOtherMonth && 'text-gray-200'}
            ${isSaturday && 'text-blue-400'} 
            ${isSunday && 'text-red-400'} 
            `}
          >
            {date.getDate()}
          </div>
        )}
      </Calendar.Date>
    </Calendar>
  )
}
