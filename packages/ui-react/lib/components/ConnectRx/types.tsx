import { Any } from "../../utils"
import { PolkadotSigner } from "polkadot-api"
import { KeypairType } from "polkadot-api/pjs-signer"

export type SelectedAccountType = {
  address: string
  name?: string
  type?: KeypairType
  extension: string
  polkadotSigner: PolkadotSigner
} | null

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
