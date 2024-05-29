export type OptionList = (
  | {
      value: string
      label: string
      disabled?: undefined
    }
  | {
      value: string
      label: string
      disabled: boolean
    }
)[]

export type ToolTipDirection =
  | 'left'
  | 'right'
  | 'bottom'
  | 'top'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom'
