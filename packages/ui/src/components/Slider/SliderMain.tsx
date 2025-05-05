import React, {
  CSSProperties,
  PropsWithChildren,
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import SliderContent from './SliderContent'
import SliderNextButton from './SliderNextButton'
import { _createContext } from '../../utils/_createContext'
import { throttle } from '../../utils/throttle'
import SliderItem from './SliderItem'
import SliderPagination from './SliderPagination'
import SliderPrevButton from './SliderPrevButton'

type SliderContextState = {
  slideContainer: React.RefObject<HTMLDivElement>
  pageRefs: React.MutableRefObject<(HTMLButtonElement | null)[]>
  gap: number
  perPage: number
  page: number
  startOffset: number
  totalPage: number
  width: number
  loopEnabled: boolean
  onNextClick: () => void
  onPrevClick: () => void
  onPageClick: (page: number) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>, page: number) => void
}

export const [useSliderContext, SliderProvider] =
  _createContext<SliderContextState>()

interface SliderBaseProps {
  gap?: number
  perPage?: number
  autoplay?: boolean
  delay?: number
  onChange?: (page: number) => void
  className?: string
}

type SliderProps =
  | (SliderBaseProps & { loop: true; startOffset?: never })
  | (SliderBaseProps & { loop?: false; startOffset?: number })

const SliderMain = forwardRef<HTMLDivElement, PropsWithChildren<SliderProps>>(
  function SliderMain(
    {
      children,
      gap = 0,
      startOffset = 0,
      perPage = 1,
      autoplay = false,
      delay = 1000,
      loop = false,
      onChange,
      className,
    },
    ref,
  ) {
    const slideContainer = useRef<HTMLDivElement>(null)

    const pageRefs = useRef<(HTMLButtonElement | null)[]>([])

    const isDragging = useRef(false)

    const isScrolling = useRef(false)

    const startX = useRef(0)

    const translateX = useRef(0)

    const [width, setWidth] = useState(0)

    const [page, setPage] = useState(1)

    const [totalPage, setTotalPage] = useState(0)

    const canLoop =
      slideContainer.current &&
      perPage <= slideContainer.current.childNodes.length

    const loopEnabled = (loop && canLoop) || false

    const onNextClick = useCallback(() => {
      if (isScrolling.current) return
      if (!slideContainer.current) return
      if (!loopEnabled && page >= totalPage) return

      isScrolling.current = true

      const childNodes = slideContainer.current.childNodes

      if (loopEnabled) {
        for (let i = 0; i < perPage; i++) {
          if (childNodes[i]) {
            const clone = childNodes[i].cloneNode(true)
            slideContainer.current.appendChild(clone)
          }
        }
      }

      if (translateX.current === startOffset) {
        translateX.current -= startOffset
      }

      translateX.current -= (width + gap) * perPage

      slideContainer.current.style.transition = 'transform 0.1s ease'
      slideContainer.current.style.transform = `translateX(${translateX.current}px)`

      const handleTransitionEnd = () => {
        if (!slideContainer.current) return

        slideContainer.current.style.transition = ''

        if (loopEnabled) {
          for (let i = 0; i < perPage; i++) {
            if (slideContainer.current.firstChild) {
              slideContainer.current.removeChild(
                slideContainer.current.firstChild,
              )
            }
          }

          translateX.current += (width + gap) * perPage
          slideContainer.current.style.transform = `translateX(${translateX.current}px)`
        }

        isScrolling.current = false

        slideContainer.current.removeEventListener(
          'transitionend',
          handleTransitionEnd,
        )
      }

      slideContainer.current.addEventListener(
        'transitionend',
        handleTransitionEnd,
      )

      setPage((prev) => (prev >= totalPage ? 1 : prev + 1))
    }, [perPage, loopEnabled, page, totalPage, width, gap, startOffset])

    const onPrevClick = useCallback(() => {
      if (isScrolling.current) return
      if (!slideContainer.current) return
      if (!loopEnabled && page <= 1) return

      isScrolling.current = true

      const childNodes = slideContainer.current.childNodes
      const totalNodes = childNodes.length

      if (loopEnabled) {
        // 앞에 붙이고
        let clones: Node[] = []
        for (let i = 0; i < perPage; i++) {
          const clone = childNodes[totalNodes - 1 - i].cloneNode(true)
          clones = [...clones, clone]
        }

        clones.forEach((clone) => {
          if (!slideContainer.current) return

          slideContainer.current.insertBefore(
            clone,
            slideContainer.current.firstChild,
          )
        })

        // 위치 찾고
        translateX.current -= (width + gap) * perPage
        slideContainer.current.style.transform = `translateX(${translateX.current}px)`
        slideContainer.current.getBoundingClientRect()
      }

      // 위치 이동
      translateX.current += (width + gap) * perPage

      if (translateX.current === 0) {
        translateX.current += startOffset
      }

      slideContainer.current.style.transition = 'transform 0.1s ease'
      slideContainer.current.style.transform = `translateX(${translateX.current}px)`

      const handleTransitionEnd = () => {
        if (!slideContainer.current) return

        slideContainer.current.style.transition = ''

        if (loopEnabled) {
          // 뒤 제거
          for (let i = 0; i < perPage; i++) {
            if (slideContainer.current.lastChild) {
              slideContainer.current.removeChild(
                slideContainer.current.lastChild,
              )
            }
          }

          // 위치 찾기
          if (Math.floor(totalNodes / 2) >= perPage) {
            translateX.current = -(width + gap) * perPage
          }
          slideContainer.current.style.transform = `translateX(${translateX.current}px)`
        }

        isScrolling.current = false

        slideContainer.current.removeEventListener(
          'transitionend',
          handleTransitionEnd,
        )
      }

      slideContainer.current.addEventListener(
        'transitionend',
        handleTransitionEnd,
      )

      setPage((prev) => (prev <= 1 ? totalPage : prev - 1))
    }, [loopEnabled, perPage, page, totalPage, width, gap, startOffset])

    const onReset = useCallback(() => {
      if (isScrolling.current) return
      if (!slideContainer.current) return

      const currentX = translateX.current

      const slideWidth = (width + gap) * perPage
      const closestIndex = Math.round(-currentX / slideWidth)

      translateX.current = -closestIndex * slideWidth

      if (translateX.current === 0) {
        translateX.current += startOffset
      }

      slideContainer.current.style.transition = 'transform 0.1s ease'
      slideContainer.current.style.transform = `translateX(${translateX.current}px)`

      const handleTransitionEnd = () => {
        if (!slideContainer.current) return

        isScrolling.current = false
        slideContainer.current.style.transition = ''

        slideContainer.current.removeEventListener(
          'transitionend',
          handleTransitionEnd,
        )
      }

      slideContainer.current.addEventListener(
        'transitionend',
        handleTransitionEnd,
      )
    }, [perPage, width, gap, startOffset])

    const onPageClick = useCallback(
      (page: number) => {
        if (loopEnabled || isScrolling.current) return
        if (!slideContainer.current) return

        isScrolling.current = true

        let newTranslateX = -(page - 1) * (width + gap) * perPage

        if (newTranslateX === 0) {
          newTranslateX += startOffset
        }

        slideContainer.current.style.transition = 'transform 0.1s ease'
        slideContainer.current.style.transform = `translateX(${newTranslateX}px)`

        const handleTransitionEnd = () => {
          if (!slideContainer.current) return

          slideContainer.current.style.transition = ''
          translateX.current = newTranslateX
          isScrolling.current = false

          slideContainer.current.removeEventListener(
            'transitionend',
            handleTransitionEnd,
          )
        }

        slideContainer.current.addEventListener(
          'transitionend',
          handleTransitionEnd,
        )

        setPage(page)
      },
      [width, loopEnabled, gap, perPage, startOffset],
    )

    const onKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLButtonElement>, page: number) => {
        if (loopEnabled || isScrolling.current) return

        if (e.key === 'ArrowRight' && page < totalPage) {
          onPageClick(page + 1)
          pageRefs.current[page]?.focus()
        } else if (e.key === 'ArrowLeft' && page - 1 > 0) {
          onPageClick(page - 1)
          pageRefs.current[page - 2]?.focus()
        }
      },
      [loopEnabled, totalPage, onPageClick],
    )

    // 문제 - 왼쪽으로 드래그 이동 시 translate가 현재 드래그된 위치를 못잡음
    const onDragStart = useCallback(
      (
        e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
      ) => {
        if (isScrolling.current) return

        isDragging.current = true
        if ('touches' in e) {
          startX.current = e.touches[0].clientX // TouchEvent
        } else {
          startX.current = e.clientX // MouseEvent
        }

        if (slideContainer.current) {
          const currentTransform = getComputedStyle(
            slideContainer.current,
          ).transform

          const matrix = currentTransform.match(/matrix.*\((.+)\)/)

          translateX.current = matrix ? parseFloat(matrix[1].split(', ')[4]) : 0
        }
      },
      [],
    )

    const onDragMove = useCallback(
      throttle(
        (
          e:
            | React.MouseEvent<HTMLDivElement>
            | React.TouchEvent<HTMLDivElement>,
        ) => {
          if (!isDragging.current || !slideContainer.current) return

          const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
          const dragDistance = clientX - startX.current

          const canDragLeft = page > 1 || loop
          const canDragRight = page < totalPage || loop

          if (!canDragLeft && dragDistance > 0) return
          if (!canDragRight && dragDistance < 0) return

          slideContainer.current.style.transform = `translateX(${translateX.current + dragDistance}px)`
        },
        16,
      ),
      [page, totalPage, loop],
    )

    const onDragEnd = useCallback(() => {
      if (!slideContainer.current) return
      if (!isDragging.current) return

      const currentTransform = getComputedStyle(
        slideContainer.current,
      ).transform
      const matrix = currentTransform.match(/matrix.*\((.+)\)/)
      const finalTranslateX = matrix ? parseFloat(matrix[1].split(', ')[4]) : 0
      const dragDistance = finalTranslateX - translateX.current

      if (dragDistance < 0 && Math.abs(dragDistance) > 10) {
        onNextClick()
      } else if (dragDistance > 0 && Math.abs(dragDistance) > 10) {
        onPrevClick()
      } else if (dragDistance !== 0) {
        onReset()
      }

      isDragging.current = false
    }, [onNextClick, onPrevClick, onReset])

    useEffect(() => {
      if (!loopEnabled) return
      if (!width) return

      const initLoop = () => {
        if (!slideContainer.current) return

        const childNodes = slideContainer.current.childNodes
        const totalNodes = childNodes.length

        if (Math.floor(totalNodes / 2) >= perPage) {
          for (let i = 0; i < perPage; i++) {
            if (slideContainer.current.lastChild) {
              const child = slideContainer.current.lastChild
              slideContainer.current.removeChild(child)
              slideContainer.current.insertBefore(
                child,
                slideContainer.current.firstChild,
              )
            }
          }

          translateX.current -= (width + gap) * perPage
          slideContainer.current.style.transform = `translateX(${translateX.current}px)`
        }
      }

      initLoop()
    }, [loopEnabled, perPage, width, gap])

    useEffect(() => {
      if (!slideContainer.current) return

      const childNodes = slideContainer.current.childNodes
      const totalNodes = childNodes.length

      setWidth((childNodes[0] as HTMLElement).clientWidth || 0)
      setTotalPage(Math.ceil(totalNodes / perPage))
    }, [perPage])

    useEffect(() => {
      if (!autoplay) return

      const timer = setInterval(() => {
        if (!loopEnabled && page >= totalPage) {
          clearInterval(timer)
        } else {
          onNextClick()
        }
      }, delay)

      return () => clearInterval(timer)
    }, [loopEnabled, autoplay, page, totalPage, delay, onNextClick])

    useEffect(() => {
      if (onChange) {
        onChange(page)
      }
    }, [page])

    const providerValue = useMemo(
      () => ({
        slideContainer,
        pageRefs,
        gap,
        startOffset,
        perPage,
        width,
        page,
        totalPage,
        loopEnabled,
        onNextClick,
        onPrevClick,
        onPageClick,
        onKeyDown,
      }),
      [
        gap,
        startOffset,
        perPage,
        width,
        page,
        totalPage,
        loopEnabled,
        onNextClick,
        onPrevClick,
        onPageClick,
        onKeyDown,
      ],
    )

    const sliderStyle = useMemo<CSSProperties>(
      () => ({
        overflow: 'hidden',
        cursor: 'grab',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MsUserSelect: 'none',
      }),
      [],
    )

    return (
      <SliderProvider value={providerValue}>
        <div
          ref={ref}
          style={sliderStyle}
          className={className}
          onMouseDown={onDragStart}
          onMouseMove={onDragMove}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          onTouchStart={onDragStart}
          onTouchMove={onDragMove}
          onTouchEnd={onDragEnd}
        >
          {children}
        </div>
      </SliderProvider>
    )
  },
)

const Slider = Object.assign(SliderMain, {
  PrevButton: SliderPrevButton,
  Content: SliderContent,
  Item: SliderItem,
  NextButton: SliderNextButton,
  Pagination: SliderPagination,
})

export default Slider
