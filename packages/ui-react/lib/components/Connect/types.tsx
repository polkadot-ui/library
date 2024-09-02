import { PolkadotSigner } from "polkadot-api"
import { KeypairType } from "polkadot-api/pjs-signer"

export type SelectedAccountType = {
  address: string
  name?: string
  type?: KeypairType
  extension: string
  polkadotSigner: PolkadotSigner
} | null

export type CommonConfigType = {
  bgColor?: string
  selectedBgColor?: string
  hoverColor?: string
  color?: string
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
