import {
  SelectedAccountType,
  ConnectConfiguration,
  ConnectExtensions,
  localStorageKeyExtensions,
  localStorageKeyAccount,
  Polkicon,
} from "@packages/ui-react/lib/components"
import {
  useConnect,
  useExtensionStorage,
} from "@packages/ui-react/lib/components/Connect/hooks"
import { Any } from "@packages/ui-react/lib/utils"

import { useEffect, useState } from "react"

export const ConnectPage = () => {
  // Connect recipe
  const [selectedAccount, setSelectedAccount] =
    useState<SelectedAccountType>(null)

  const [isOpen, setIsOpen] = useState(false)

  const { connectedExtensions, connectedAccounts, connectedAccount } =
    useConnect()

  const [, setSelectedExtensions] =
    useState<Map<string, Any>>(connectedExtensions)

  useEffect(() => {
    for (const [, value] of connectedExtensions) {
      value.subscribe((a) => {
        console.log(a)
      })
    }
  }, [connectedExtensions])
  console.log("connectedExtensions", connectedExtensions)
  console.log("connectedAccounts", connectedAccounts)
  console.log("connectedAccount", connectedAccount)

  const connectConfig: ConnectConfiguration = {
    icon: {
      width: 4,
      height: 2,
    },
  }

  return (
    <div className="page">
      <h1>Connect</h1>
      <p>Testing Polkadot Library Connect.</p>
      <div
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* 
          <div
            style={{ width: "45%", border: "1px solid #ccc", padding: "1rem" }}
          >
            {selectedExtensions && (
              <ConnectAccountsProvider value={[...selectedExtensions.values()]}>
                <ConnectAccounts
                  selected={selectedAccount}
                  setSelected={setSelectedAccount}
                  config={connectConfig}
                ></ConnectAccounts>
              </ConnectAccountsProvider>
            )}
          </div>
        </div>
      </div>
      <div style={{ width: "100%", paddingTop: "10rem" }}>
        <h1 style={{ margin: "5rem 0" }}>As 1 component</h1>
        <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
          <Connect
            selected={selectedAccount}
            setSelected={setSelectedAccount}
            config={connectConfig}
          />
        </div>
      </div> */}

          <div style={{ width: "100%", paddingTop: "1rem" }}>
            <h1 style={{ margin: "5rem 0" }}>In a modal</h1>
            <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
              <button onClick={() => setIsOpen(!isOpen)}>
                {connectedAccount?.address ? (
                  <>
                    <Polkicon address={connectedAccount?.address} />
                    <span>{connectedAccount?.address}</span>
                  </>
                ) : (
                  "Open"
                )}
              </button>
            </div>
          </div>
          <div
            style={{
              display: !isOpen ? "none" : "flex",
              position: "fixed",
              background: "white",
              top: "30%",
              left: "30%",
              width: "400px",
              height: "400px",
            }}
          >
            <ConnectExtensions
              setSelected={setSelectedAccount}
              config={connectConfig}
              onSelectExtensions={(ext) => {
                setSelectedExtensions(ext)
              }}
            />
          </div>

          {selectedAccount && (
            <>
              <p>Account selected is: {selectedAccount?.address} </p>
              <p>
                ... of {selectedAccount?.extension} extension ... with Account's
                name: {selectedAccount?.name}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
