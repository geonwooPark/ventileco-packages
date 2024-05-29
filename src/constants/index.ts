export const focusedStyle = `bg-primary-light`
export const selectedStyle = `text-primary-main`
export const hoveredStyle = `hover:bg-gray-100`

export const TOOLTIP_TRIANGLE_DIRECTION: Record<string, string> = {
  topLeft: 'bottom-[-4.5px] left-[6px]',
  top: 'bottom-[-4.5px] left-[50%] translate-x-[-50%]',
  topRight: 'bottom-[-4.5px] right-[6px]',
  bottomLeft: 'top-[-4.5px] left-[6px]',
  bottom: 'top-[-4.5px] left-[50%] translate-x-[-50%]',
  bottomRight: 'top-[-4.5px] right-[6px]',
  leftTop: 'top-[6px] right-[-4.5px]',
  left: 'top-[50%] right-[-4.5px] translate-y-[-50%]',
  leftBottom: 'bottom-[6px] right-[-4.5px]',
  rightTop: 'top-[6px] left-[-4.5px]',
  right: 'top-[50%] left-[-4.5px] translate-y-[-50%]',
  rightBottom: 'bottom-[6px] left-[-4.5px]',
}
