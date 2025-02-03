import React, { CSSProperties, useCallback, useMemo } from 'react'

interface AccordionTriggerProps {
  children: (props: { isActive: boolean }) => React.ReactNode
  className?: string
  id?: string
  isActive?: boolean
  handleOpen?: () => void
}

function AccordionTrigger({
  children,
  className,
  id,
  isActive,
  handleOpen,
}: AccordionTriggerProps) {
  const onMouseDown = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault()
      handleOpen!()
    },
    [handleOpen],
  )

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        handleOpen!()
      }
    },
    [handleOpen],
  )

  const triggerStyle = useMemo<CSSProperties>(() => ({ width: '100%' }), [])

  return (
    <button
      role="heading"
      id={`${id}-accordion-button`}
      aria-expanded={isActive}
      aria-controls={`${id}-accordion-region`}
      onMouseDown={onMouseDown}
      onKeyDown={onKeyDown}
      style={triggerStyle}
      className={className}
    >
      {children({ isActive: !!isActive })}
    </button>
  )
}

export default AccordionTrigger
