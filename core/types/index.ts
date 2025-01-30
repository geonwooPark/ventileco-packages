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
