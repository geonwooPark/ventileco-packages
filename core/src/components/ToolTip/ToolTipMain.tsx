import React, {
  PropsWithChildren,
  forwardRef,
  memo,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import ToolTipTrigger from './ToolTipTrigger'
import ToolTipContent from './ToolTipContent'
import { _createContext } from '../../utils/_createContext'
import ToolTipTriangle from './ToolTipTriangle'
import { ToolTipDirection } from './types'

type RestContextState = {
  direction: ToolTipDirection
  triggerRef: React.RefObject<HTMLDivElement> | null
  tooltipRef: React.RefObject<HTMLDivElement> | null
  onMouseOver: () => void
  onMouseOut: () => void
}

export const [useIsOpenContext, IsOpenProvider] = _createContext<boolean>()
export const [useRestContext, RestProvider] = _createContext<RestContextState>()

interface ToolTipProps {
  direction: ToolTipDirection
  enterDelay?: number
  leaveDelay?: number
  disabled?: boolean
  gap?: number
}

const ToolTipMain = forwardRef<HTMLDivElement, PropsWithChildren<ToolTipProps>>(
  function ToolTipMain(
    {
      children,
      direction,
      enterDelay,
      leaveDelay,
      disabled,
      gap = 16,
      ...otherProps
    },
    ref,
  ) {
    const [isOpen, setIsOpen] = useState(false)

    const triggerRef = useRef<HTMLDivElement>(null)

    const tooltipRef = useRef<HTMLDivElement>(null)

    const enterTimer = useRef<number | undefined>(undefined)

    const leaveTimer = useRef<number | undefined>(undefined)

    const onMouseOver = useCallback(() => {
      if (disabled) return

      clearTimeout(leaveTimer.current)

      if (enterDelay) {
        enterTimer.current = window.setTimeout(
          () => setIsOpen(true),
          enterDelay,
        )
      } else {
        setIsOpen(true)
      }
    }, [disabled, enterDelay])

    const onMouseOut = useCallback(() => {
      if (disabled) return

      clearTimeout(enterTimer.current)

      if (leaveDelay) {
        leaveTimer.current = window.setTimeout(
          () => setIsOpen(false),
          leaveDelay,
        )
      } else {
        setIsOpen(false)
      }
    }, [disabled, leaveDelay])

    useLayoutEffect(() => {
      if (!isOpen) return
      if (disabled) return

      const triggerNode = triggerRef.current as HTMLElement
      const tooltipNode = tooltipRef.current as HTMLElement

      const { left, right, top, bottom, width, height } =
        triggerNode.getBoundingClientRect()

      const { width: tooltipWidth, height: tooltipHeight } =
        tooltipNode.getBoundingClientRect()

      const position: Record<string, Record<string, string>> = {
        topLeft: {
          left: `${left}px`,
          top: `${top - tooltipHeight - gap}px`,
        },
        top: {
          left: `${left + width / 2 - tooltipWidth / 2}px`,
          top: `${top - tooltipHeight - gap}px`,
        },
        topRight: {
          left: `${right - tooltipWidth}px`,
          top: `${top - tooltipHeight - gap}px`,
        },
        bottomLeft: {
          left: `${left}px`,
          top: `${bottom + gap}px`,
        },
        bottom: {
          left: `${left + width / 2 - tooltipWidth / 2}px`,
          top: `${bottom + gap}px`,
        },
        bottomRight: {
          left: `${right - tooltipWidth}px`,
          top: `${bottom + gap}px`,
        },
        leftTop: {
          left: `${left - tooltipWidth - gap}px`,
          top: `${top}px`,
        },
        left: {
          left: `${left - tooltipWidth - gap}px`,
          top: `${top + height / 2 - tooltipHeight / 2}px`,
        },
        leftBottom: {
          left: `${left - tooltipWidth - gap}px`,
          top: `${bottom - tooltipHeight}px`,
        },
        rightTop: {
          left: `${right + gap}px`,
          top: `${top}px`,
        },
        right: {
          left: `${right + gap}px`,
          top: `${top + height / 2 - tooltipHeight / 2}px`,
        },
        rightBottom: {
          left: `${right + gap}px`,
          top: `${bottom - tooltipHeight}px`,
        },
      }

      Object.assign(tooltipNode.style, position[direction])
    }, [isOpen, gap, direction, disabled])

    const providerValue = useMemo(
      () => ({
        direction,
        tooltipRef,
        triggerRef,
        onMouseOver,
        onMouseOut,
      }),
      [direction, tooltipRef, triggerRef, onMouseOver, onMouseOut],
    )

    return (
      <RestProvider value={providerValue}>
        <IsOpenProvider value={isOpen}>
          <div ref={ref} {...otherProps}>
            {children}
          </div>
        </IsOpenProvider>
      </RestProvider>
    )
  },
)

const ToolTip = Object.assign(ToolTipMain, {
  Trigger: ToolTipTrigger,
  Content: ToolTipContent,
  Triangle: ToolTipTriangle,
})

export default ToolTip
