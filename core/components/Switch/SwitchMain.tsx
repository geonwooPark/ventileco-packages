import React, {
  CSSProperties,
  KeyboardEventHandler,
  PropsWithChildren,
  useCallback,
  useMemo,
  useRef,
} from 'react'
import { _createContext } from '../../utils/_createContext'
import SwitchBall from './SwitchBall'

type SwitchContextState = {
  marginInline: number
  duration: number
}

export const [useSwitchContext, SwitchProvider] =
  _createContext<SwitchContextState>()

interface SwitchMainProps {
  value: boolean
  onChange: (value: boolean) => void
  marginInline?: number
  duration?: number
  className?: string
}

function SwitchMain({
  children,
  value,
  onChange,
  marginInline = 0,
  duration = 200,
  className,
}: PropsWithChildren<SwitchMainProps>) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const handleChange = useCallback(() => {
    const container = containerRef.current as HTMLElement
    const ball = container.firstChild as HTMLElement

    const { width: containerWidth } = container.getBoundingClientRect()
    const { width: ballWidth } = ball.getBoundingClientRect()

    ball.style.transform = `translate(${value ? 0 : containerWidth - ballWidth - marginInline * 2}px, -50%)`

    onChange(!value)
  }, [value, marginInline, onChange])

  const onKeyDown: KeyboardEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        handleChange()
      }
    },
    [handleChange],
  )

  const containerStyle = useMemo<CSSProperties>(
    () => ({
      position: 'relative',
      cursor: 'pointer',
    }),
    [],
  )

  const providerValue = useMemo(
    () => ({
      marginInline,
      duration,
    }),
    [marginInline, duration],
  )

  return (
    <SwitchProvider value={providerValue}>
      <div
        ref={containerRef}
        role="switch"
        aria-checked={value}
        tabIndex={0}
        style={containerStyle}
        className={className}
        onClick={handleChange}
        onKeyDown={onKeyDown}
      >
        {children}
      </div>
    </SwitchProvider>
  )
}

const Switch = Object.assign(SwitchMain, {
  Ball: SwitchBall,
})

export default Switch
