import React, { useMemo } from 'react'

interface CalendarDayOfTheWeekProps {
  dayOfTheWeek: string[]
  className?: string
  children: ({ item }: { item: string }) => React.ReactNode
}

export default function CalendarDayOfTheWeek({
  dayOfTheWeek,
  className,
  children,
}: CalendarDayOfTheWeekProps) {
  const containerStyle = useMemo<React.CSSProperties>(
    () => ({
      display: 'grid',
      gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
      justifyItems: 'center',
      alignItems: 'center',
    }),
    [],
  )

  return (
    <div style={containerStyle} className={className}>
      {dayOfTheWeek.map((item, idx) => (
        <React.Fragment key={idx}>
          {children({
            item,
          })}
        </React.Fragment>
      ))}
    </div>
  )
}
