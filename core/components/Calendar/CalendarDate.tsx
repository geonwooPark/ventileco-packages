import React, { CSSProperties, useMemo } from 'react'
import { useCalendarContext } from './CalendarMain'
import { isBetweenDate, isSameDate, isSameMonth } from './utils'

interface CalendarDateProps {
  selected?: Date | Date[]
  rowGap?: number
  children: ({
    date,
    isToday,
    isOtherMonth,
    isSaturday,
    isSunday,
    isSelected,
    isBetween,
    isStartDate,
    isEndDate,
  }: {
    date: Date
    isToday: boolean
    isOtherMonth: boolean
    isSaturday: boolean
    isSunday: boolean
    isSelected: boolean
    isBetween: boolean
    isStartDate: boolean
    isEndDate: boolean
  }) => React.ReactNode
}

export default function CalendarDate({
  children,
  selected,
  rowGap = 4,
}: CalendarDateProps) {
  const today = useMemo(() => new Date(), [])

  const { parsedMonth, days } = useCalendarContext()

  const [startDate, endDate] = useMemo(() => {
    if (Array.isArray(selected)) {
      return [selected[0], selected[1]]
    }
    return [selected, null]
  }, [selected])

  const computedDays = useMemo(
    () =>
      days.map((date) => ({
        date,
        isToday: isSameDate(date, today),
        isOtherMonth: !isSameMonth(date, parsedMonth),
        isSaturday: isSameMonth(date, parsedMonth) && date.getDay() === 6,
        isSunday: isSameMonth(date, parsedMonth) && date.getDay() === 0,
        isSelected: startDate ? isSameDate(date, startDate) : false,
        isBetween:
          startDate && endDate
            ? isBetweenDate(date, startDate, endDate)
            : false,
        isStartDate: startDate ? isSameDate(date, startDate) : false,
        isEndDate: endDate ? isSameDate(date, endDate) : false,
      })),
    [days, today, parsedMonth, startDate, endDate],
  )

  const containerStyle = useMemo<CSSProperties>(
    () => ({
      display: 'grid',
      gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
      justifyItems: 'center',
      alignItems: 'center',
      rowGap,
    }),
    [rowGap],
  )

  return (
    <div style={containerStyle}>
      {computedDays.map((info, idx) => (
        <React.Fragment key={idx}>{children(info)}</React.Fragment>
      ))}
    </div>
  )
}
