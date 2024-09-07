import { Dispatch, SetStateAction, useState } from "react"
import { ConnectAccounts } from "./ConnectAccounts"
import { ConnectExtensions } from "./ConnectExtensions"
import { SelectedAccountType, ConnectConfiguration } from "./types"
import {
  InjectedExtension,
  InjectedPolkadotAccount,
} from "polkadot-api/pjs-signer"
import { ConnectAccountsProvider } from "."

export const Connect: React.FC<{
  selected?: SelectedAccountType
  setSelected: Dispatch<SetStateAction<SelectedAccountType>>
  config?: ConnectConfiguration
  type?: "onepage" | "extensions" | "split"
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
  const [splitExtensions, setSplitExtension] =
    useState<Map<string, InjectedExtension>>()

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
    case "split": {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ width: "45%", padding: "1rem" }}>
            <ConnectExtensions
              setSelected={setSelected}
              config={config}
              onSelectExtensions={(ext) => setSplitExtension(ext)}
            />
          </div>
          <div style={{ width: "45%", padding: "1rem" }}>
            {splitExtensions && (
              <ConnectAccountsProvider value={[...splitExtensions.values()]}>
                <ConnectAccounts
                  selected={selected}
                  setSelected={setSelected}
                  config={config}
                ></ConnectAccounts>
              </ConnectAccountsProvider>
            )}
          </div>
        </div>
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
