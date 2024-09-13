import { useState } from "react"
import { ConnectAccounts } from "./ConnectAccounts"
import { ConnectExtensions } from "./ConnectExtensions"
import { ConnectIF } from "./types"
import { InjectedExtension } from "polkadot-api/pjs-signer"
import { ConnectAccountsProvider } from "."

export const Connect: React.FC<ConnectIF> = ({
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
          <div style={{ width: "46%", padding: "1rem" }}>
            <ConnectExtensions
              setSelected={setSelected}
              config={config}
              onSelectExtensions={(ext) => setSplitExtension(ext)}
            />
          </div>
          <div style={{ width: "46%", padding: "1rem" }}>
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
