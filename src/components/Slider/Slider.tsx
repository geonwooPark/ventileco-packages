import React, {
  PropsWithChildren,
  createContext,
  useCallback,
  useRef,
  useState,
} from 'react'
import SliderPrevButton from './SliderPrevButton'
import SliderContent from './SliderContent'
import SliderNextButton from './SliderNextButton'

interface SliderProps {
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

function Slider({ children, gap, step = 1 }: PropsWithChildren<SliderProps>) {
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

  const onDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    // preventUnexpectedEffects(e)
    setIsDragging(true)
    const x = e.clientX
    setStartPoint(x)
    if (slideContainer.current && 'scrollLeft' in slideContainer.current) {
      setTotalX(x + slideContainer.current.scrollLeft)
    }
  }

  const onDragMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    preventUnexpectedEffects(e)

    const scrollLeft = totalX - e.clientX

    if (slideContainer.current && 'scrollLeft' in slideContainer.current) {
      slideContainer.current.scrollLeft = scrollLeft
    }
  }

  const onDragEnd = (e: React.MouseEvent<HTMLDivElement>) => {
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
  }

  const onPrevButtonClick = () => {
    if (!slideContainer.current) return
    if (!gap) return

    const childNodes = slideContainer.current
      .childNodes as NodeListOf<HTMLElement>

    const width = childNodes[0].offsetWidth

    const firstViewChildIndex = Math.floor(
      slideContainer.current?.scrollLeft / (width + gap),
    )

    if (
      firstViewChildIndex > 0 &&
      Number.isInteger(slideContainer.current?.scrollLeft / (width + gap))
    ) {
      slideContainer.current.scrollLeft =
        firstViewChildIndex > step
          ? childNodes[firstViewChildIndex - step].offsetLeft
          : 0
    } else {
      slideContainer.current.scrollLeft =
        childNodes[firstViewChildIndex].offsetLeft
    }
  }

  const onNextButtonClick = () => {
    if (!slideContainer.current) return
    if (!gap) return

    const childNodes = slideContainer.current
      .childNodes as NodeListOf<HTMLElement>

    const width = childNodes[0].offsetWidth

    const firstViewChildIndex = Math.floor(
      slideContainer.current?.scrollLeft / (width + gap),
    )

    slideContainer.current.scrollLeft =
      firstViewChildIndex + step < childNodes.length
        ? childNodes[firstViewChildIndex + step].offsetLeft
        : 9999
  }

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

  const onThrottleDragMove = throttle(onDragMove, 50)

  const providerValue = {
    slideContainer,
    gap,
    onDragStart,
    onThrottleDragMove,
    onDragEnd,
    onPrevButtonClick,
    onNextButtonClick,
  }

  return (
    <SliderContext.Provider value={providerValue}>
      <div className="relative w-full">{children}</div>
    </SliderContext.Provider>
  )
}

Slider.PrevButton = SliderPrevButton
Slider.Content = SliderContent
Slider.NextButton = SliderNextButton

export default Slider
