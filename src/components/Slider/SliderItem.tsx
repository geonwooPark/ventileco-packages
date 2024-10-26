import {
  CSSProperties,
  InputHTMLAttributes,
  PropsWithChildren,
  useMemo,
} from 'react'
import { useSliderContext } from './SliderMain'

interface SliderItemProps extends InputHTMLAttributes<HTMLDivElement> {}

function SliderItem({
  children,
  ...otherProps
}: PropsWithChildren<SliderItemProps>) {
  const { perPage, gap, width } = useSliderContext()

  const itemStyle = useMemo<CSSProperties>(
    () => ({ width: (width - (perPage - 1) * gap) / perPage }),

    [width, perPage, gap],
  )

  return (
    <div style={itemStyle} {...otherProps}>
      {children}
    </div>
  )
}

export default SliderItem
