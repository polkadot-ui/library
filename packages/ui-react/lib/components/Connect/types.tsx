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
}

export type CommonConfigType = {
  bgColor?: string
  selectedBgColor?: string
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
