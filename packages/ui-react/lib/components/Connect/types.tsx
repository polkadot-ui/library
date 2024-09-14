import {
  InjectedPolkadotAccount,
  InjectedExtension,
} from "polkadot-api/dist/reexports/pjs-signer"
import { Dispatch, SetStateAction } from "react"
import { Any } from "../../utils"

export type ConnectConfiguration = ConfigType & CommonConfigType

export type ConfigType = {
  notInstalled?: Any
  downloadIcon?: Any
  disconnectIcon?: Any
  accountColor?: string
}

export type CommonConfigType = {
  modal?: {
    areaColor?: string
    bgColor?: string
    titleColor?: string
    borderRadius?: string
    padding?: string
    margin?: string
    width?: string
    top?: string
  }
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

export interface ConnectIF {
  selected?: InjectedPolkadotAccount
  setSelected: Dispatch<SetStateAction<InjectedPolkadotAccount>>
  config?: ConnectConfiguration
  type?: "onepage" | "extensions" | "split"
  onSelectExtensions?: (ext: Map<string, InjectedExtension>) => void
  getConnectedAccounts?: (acc: InjectedPolkadotAccount[]) => void
}
