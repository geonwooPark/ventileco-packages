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

export type PolymorphicRef<T extends ElementType> =
  React.ComponentPropsWithRef<T>['ref']
