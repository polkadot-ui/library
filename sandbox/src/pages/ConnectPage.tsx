import {
  Connect,
  ConnectConfiguration,
  ConnectExtensions,
  Polkicon,
} from "@packages/ui-react/lib/components"
import { useState } from "react"

export const ConnectPage = () => {
  const [selectedAccount, setSelectedAccount] = useState()
  const [isOpen, setIsOpen] = useState(false)

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

      {/* <div style={{ width: "100%", paddingTop: "10rem" }}>
        <h1 style={{ margin: "5rem 0" }}>Split</h1>
        <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
          <Connect
            type="split"
            selected={selectedAccount}
            setSelected={setSelectedAccount}
            config={connectConfig}
          />
        </div>
      </div> */}
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
      </div> */}

          <div style={{ width: "100%", paddingTop: "1rem" }}>
            <h1 style={{ margin: "5rem 0" }}>In a modal</h1>
            <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
              <button onClick={() => setIsOpen(!isOpen)}>
                {!isOpen ? "Nothing" : "Open"}
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
              height: "400px",
            }}
          >
            {/* <ConnectExtensions
              setSelected={setSelectedAccount}
              config={connectConfig}
              onSelectExtensions={(ext) => {
                setSelectedExtensions(ext)
              }}
            /> */}
            <Connect
              type="split"
              selected={selectedAccount}
              setSelected={setSelectedAccount}
              config={connectConfig}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
