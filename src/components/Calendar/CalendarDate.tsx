import { useMemo } from 'react'
import { useCalendarContext } from './CalendarMain'

interface CalendarDateProps {
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
  rowGap = 4,
  columnGap = 4,
}: CalendarDateProps) {
  const { days } = useCalendarContext()

  const today = new Date()

  const thisDay = today.getDate()

  const thisMonth = today.getMonth()

  const containerStyle = useMemo<React.CSSProperties>(
    () => ({
      display: 'grid',
      gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
      rowGap,
      columnGap,
    }),
    [rowGap, columnGap],
  )

  const boxStyle = useMemo<React.CSSProperties>(
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
        <div key={idx} style={boxStyle}>
          {children({
            date,
            isToday: date.getDate() === thisDay,
            isOtherMonth: date.getMonth() !== thisMonth,
            isSaturday: date.getDay() === 6,
            isSunday: date.getDay() === 0,
          })}
        </div>
      ))}
    </div>
  )
}
