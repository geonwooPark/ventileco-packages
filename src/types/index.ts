import { ElementType } from 'react'

export type Option =
  | {
      value: any
      label: string
      disabled?: undefined
    }
  | {
      value: any
      label: string
      disabled: boolean
    }

export type OptionList = Option[]

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

export type PolymorphicRef<T extends ElementType> =
  React.ComponentPropsWithRef<T>['ref']

export interface CustomFile extends File {
  path?: string
  preview?: string
}
