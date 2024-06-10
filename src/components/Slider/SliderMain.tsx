import React, {
  ForwardedRef,
  PropsWithChildren,
  createContext,
  forwardRef,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react'
import SliderPrevButton from './SliderPrevButton'
import SliderContent from './SliderContent'
import SliderNextButton from './SliderNextButton'

export interface SliderProps {
  /** 슬라이드 아이템 간의 간격을 설정 */
  gap: number
  /** 버튼을 사용한 슬라이드 조작 시 건너뛰는 아이템의 갯수를 설정 */
  step?: number
}

type SliderContextState = {
  slideContainer: React.RefObject<HTMLDivElement> | null
  gap: number
  onDragStart: (e: React.MouseEvent<HTMLDivElement>) => void
  onThrottleDragMove: (...args: any) => void
  onDragEnd: (e: React.MouseEvent<HTMLDivElement>) => void
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
}

export const SliderContext = createContext<SliderContextState>({
  slideContainer: null,
  gap: 0,
  onDragStart: () => {},
  onThrottleDragMove: () => {},
  onDragEnd: () => {},
  onPrevButtonClick: () => {},
  onNextButtonClick: () => {},
})

function SliderMain(
  { children, gap, step = 1 }: PropsWithChildren<SliderProps>,
  forwardRef: ForwardedRef<HTMLDivElement>,
) {
  const slideContainer = useRef<HTMLDivElement>(null)

  const [isDragging, setIsDragging] = useState(false)
  const [startPoint, setStartPoint] = useState(0)
  const [totalX, setTotalX] = useState(0)

  const preventUnexpectedEffects = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault()
      e.stopPropagation()
    },
    [],
  )

  const onDragStart = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true)
    const x = e.clientX
    setStartPoint(x)
    if (slideContainer.current && 'scrollLeft' in slideContainer.current) {
      setTotalX(x + slideContainer.current.scrollLeft)
    }
  }, [])

  const onDragMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDragging) return
      preventUnexpectedEffects(e)

      const scrollLeft = totalX - e.clientX

      if (slideContainer.current && 'scrollLeft' in slideContainer.current) {
        slideContainer.current.scrollLeft = scrollLeft
      }
    },
    [isDragging, preventUnexpectedEffects, totalX],
  )

  const onDragEnd = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDragging) return
      if (!slideContainer.current) return

      setIsDragging(false)

      const endX = e.clientX
      const childNodes = slideContainer.current?.childNodes
      const dragDiff = Math.abs(startPoint - endX)

      if (dragDiff > 10) {
        childNodes.forEach((child) => {
          child.addEventListener('click', preventUnexpectedEffects as any)
        })
      } else {
        childNodes.forEach((child) => {
          child.removeEventListener('click', preventUnexpectedEffects as any)
        })
      }
    },
    [isDragging, preventUnexpectedEffects, startPoint],
  )

  const onPrevButtonClick = useCallback(() => {
    if (!slideContainer.current) return
    if (!gap) return

    const childNodes = slideContainer.current
      .childNodes as NodeListOf<HTMLElement>
    const width = childNodes[0].offsetWidth

    const firstViewChildIndex = Math.floor(
      slideContainer.current.scrollLeft / (width + gap),
    )

    if (
      firstViewChildIndex > 0 &&
      Number.isInteger(slideContainer.current.scrollLeft / (width + gap))
    ) {
      slideContainer.current.scrollLeft =
        firstViewChildIndex > step
          ? childNodes[firstViewChildIndex - step].offsetLeft
          : 0
    } else {
      slideContainer.current.scrollLeft =
        childNodes[firstViewChildIndex].offsetLeft
    }
  }, [gap, step])

  const onNextButtonClick = useCallback(() => {
    if (!slideContainer.current) return
    if (!gap) return

    const childNodes = slideContainer.current
      .childNodes as NodeListOf<HTMLElement>
    const width = childNodes[0].offsetWidth

    const firstViewChildIndex = Math.floor(
      slideContainer.current.scrollLeft / (width + gap),
    )

    slideContainer.current.scrollLeft =
      firstViewChildIndex + step < childNodes.length
        ? childNodes[firstViewChildIndex + step].offsetLeft
        : 9999
  }, [gap, step])

  const throttle = useCallback((callback: any, delay: number) => {
    let throttled = false
    return (...args: any) => {
      if (!throttled) {
        throttled = true
        setTimeout(() => {
          callback(...args)
          throttled = false
        }, delay)
      }
    }
  }, [])

  const onThrottleDragMove = useMemo(
    () => throttle(onDragMove, 50),
    [throttle, onDragMove],
  )

  const providerValue = useMemo(
    () => ({
      slideContainer,
      gap,
      onDragStart,
      onThrottleDragMove,
      onDragEnd,
      onPrevButtonClick,
      onNextButtonClick,
    }),
    [
      slideContainer,
      gap,
      onDragStart,
      onThrottleDragMove,
      onDragEnd,
      onPrevButtonClick,
      onNextButtonClick,
    ],
  )

  const sliderContainerStyle = useMemo(
    () => ({ position: 'relative', width: '100%' }) as React.CSSProperties,
    [],
  )

  return (
    <SliderContext.Provider value={providerValue}>
      <div role="group" ref={forwardRef} style={sliderContainerStyle}>
        {children}
      </div>
    </SliderContext.Provider>
  )
}

const Slider = Object.assign(forwardRef(SliderMain), {
  PrevButton: SliderPrevButton,
  Content: SliderContent,
  NextButton: SliderNextButton,
})

export default Slider
