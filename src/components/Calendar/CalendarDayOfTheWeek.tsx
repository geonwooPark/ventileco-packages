import { useMemo } from 'react'

interface CalendarDayOfTheWeekProps {
  dayOfTheWeek: string[]
  rowGap?: number
  className?: string
  children: ({ item }: { item: string }) => React.ReactNode
}

export default function CalendarDayOfTheWeek({
  dayOfTheWeek,
  rowGap = 4,
  className,
  children,
}: CalendarDayOfTheWeekProps) {
  const containerStyle = useMemo<React.CSSProperties>(
    () => ({
      display: 'grid',
      gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
      rowGap,
    }),
    [rowGap],
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
    <div style={containerStyle} className={className}>
      {dayOfTheWeek.map((item, idx) => (
        <div key={idx} style={boxStyle}>
          {children({
            item,
          })}
        </div>
      ))}
    </div>
  )
}
