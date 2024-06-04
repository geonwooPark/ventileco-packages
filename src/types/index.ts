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

export type ToastType = `success` | `error` | `info`

export type ToastPosition =
  | 'topCenter'
  | 'topLeft'
  | 'topRight'
  | 'bottomCenter'
  | 'bottomLeft'
  | 'bottomRight'
