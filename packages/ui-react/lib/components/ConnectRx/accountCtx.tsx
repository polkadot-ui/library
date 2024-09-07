/* eslint-disable react-refresh/only-export-components */
import { type InjectedPolkadotAccount } from "polkadot-api/pjs-signer"
import { createContext, useContext } from "react"

export const SelectedAccountCtx = createContext<InjectedPolkadotAccount | null>(
  null
)
export const useSelectedAccount = () => useContext(SelectedAccountCtx)!
