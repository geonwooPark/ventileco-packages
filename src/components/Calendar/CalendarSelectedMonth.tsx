import { useCalendarContext } from './CalendarMain'

interface CalendarSelectedMonthProps {
  className?: string
}

export default function CalendarSelectedMonth({
  className,
}: CalendarSelectedMonthProps) {
  const { selectedMonth } = useCalendarContext()

  return <p className={className}>{selectedMonth}</p>
}
