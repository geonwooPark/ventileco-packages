import { useMemo } from 'react'
import { useCalendarContext } from './CalendarMain'
import { isSameDate, isSameMonth } from './utils'

interface CalendarDateProps {
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    date: Date,
  ) => void
  rowGap?: number
  columnGap?: number
  children: ({
    date,
    isToday,
    isOtherMonth,
    isSaturday,
    isSunday,
  }: {
    date: Date
    isToday: boolean
    isOtherMonth: boolean
    isSaturday: boolean
    isSunday: boolean
  }) => React.ReactNode
}

export default function CalendarDate({
  children,
  onClick,
  rowGap = 4,
  columnGap = 4,
}: CalendarDateProps) {
  const today = new Date()

  const { parsedMonth, days } = useCalendarContext()

  const containerStyle = useMemo<React.CSSProperties>(
    () => ({
      display: 'grid',
      gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
      rowGap,
      columnGap,
    }),
    [rowGap, columnGap],
  )

  const buttonStyle = useMemo<React.CSSProperties>(
    () => ({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }),
    [],
  )

  return (
    <div style={containerStyle}>
      {days.map((date, idx) => (
        <button
          key={idx}
          style={buttonStyle}
          onClick={(e) => {
            if (onClick) {
              onClick(e, date)
            }
          }}
        >
          {children({
            date,
            isToday: isSameDate(date, today),
            isOtherMonth: !isSameMonth(date, parsedMonth),
            isSaturday: isSameMonth(date, parsedMonth) && date.getDay() === 6,
            isSunday: isSameMonth(date, parsedMonth) && date.getDay() === 0,
          })}
        </button>
      ))}
    </div>
  )
}
