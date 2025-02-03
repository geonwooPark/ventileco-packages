import React, { InputHTMLAttributes, PropsWithChildren } from 'react'

interface SliderItemProps extends InputHTMLAttributes<HTMLDivElement> {}

function SliderItem({
  children,
  ...otherProps
}: PropsWithChildren<SliderItemProps>) {
  return <div {...otherProps}>{children}</div>
}

export default SliderItem
