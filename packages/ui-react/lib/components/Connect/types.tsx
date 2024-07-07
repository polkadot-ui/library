import { PolkadotSigner } from "polkadot-api"
import { KeypairType } from "polkadot-api/pjs-signer";

export type SelectedAccountType = {
  address: string
  name?: string;
  type?: KeypairType;
  extension: string
  polkadotSigner: PolkadotSigner
} | null
