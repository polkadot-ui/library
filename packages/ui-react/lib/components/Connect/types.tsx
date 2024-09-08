import { Any } from "../../utils"

export type ConnectConfiguration = ConfigType & CommonConfigType

export type ConfigType = {
  notInstalled?: Any
  downloadIcon?: Any
  disconnectIcon?: Any
  accountColor?: string
}

export type CommonConfigType = {
  bg?: {
    color?: string
    selected?: string
  }
  hover?: {
    bg?: string
    color?: string
  }
  icon?: {
    width: number
    height: number
  }
  border?: {
    size: string
    type:
      | "dotted"
      | "dashed"
      | "solid"
      | "double"
      | "groove"
      | "ridge"
      | "inset"
      | "outset"
      | "none"
      | "hidden"
    color: string
  }
}

export type NameUrlType = {
  name: string
  url: string
}
