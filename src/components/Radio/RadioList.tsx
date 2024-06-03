import React, { PropsWithChildren } from 'react'

interface RadioListProps {
  className?: string
}

function RadioList({ children, className }: PropsWithChildren<RadioListProps>) {
  return <div className={className}>{children}</div>
}

export default RadioList
