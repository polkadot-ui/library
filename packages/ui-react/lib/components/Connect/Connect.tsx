import { Dispatch, SetStateAction } from "react"
import { ConnectAccounts } from "./ConnectAccounts"
import { ConnectExtensions } from "./ConnectExtensions"
import { SelectedAccountType, ConnectConfiguration } from "./types"
import {
  InjectedExtension,
  InjectedPolkadotAccount,
} from "polkadot-api/pjs-signer"

export const Connect: React.FC<{
  selected?: SelectedAccountType
  setSelected: Dispatch<SetStateAction<SelectedAccountType>>
  config?: ConnectConfiguration
  type?: "onepage" | "extensions"
  onSelectExtensions?: (ext: Map<string, InjectedExtension>) => void
  getConnectedAccounts?: (acc: InjectedPolkadotAccount[]) => void
}> = ({
  setSelected,
  selected,
  config,
  type = "onepage",
  onSelectExtensions,
  getConnectedAccounts,
}) => {
  switch (type) {
    case "extensions": {
      return (
        <ConnectExtensions
          setSelected={setSelected}
          config={config}
          onSelectExtensions={onSelectExtensions}
          getConnectedAccounts={getConnectedAccounts}
        />
      )
    }
    default:
    case "onepage": {
      return (
        <ConnectExtensions setSelected={setSelected} config={config}>
          <ConnectAccounts
            selected={selected}
            setSelected={setSelected}
            config={config}
          />
        </ConnectExtensions>
      )
    }
  }
}
