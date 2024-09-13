import {
  ConnectModal,
  ConnectConfiguration,
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

  console.log(selectedAccount)

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
          <div style={{ width: "100%", paddingTop: "1rem" }}>
            <h1 style={{ margin: "5rem 0" }}>In a modal</h1>
            <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
              <button onClick={() => setIsOpen(!isOpen)}>
                {!isOpen ? "Connect" : "Open"}
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
            <ConnectModal
              title={"title"}
              onClose={() => setIsOpen(false)}
              show={isOpen}
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
