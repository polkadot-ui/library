import {
  Odometer,
  Polkicon,
  Chart,
  AccountCard,
  IconProps,
  ConnectConfiguration,
  Connect,
  ConnectExtensions,
  ConnectAccountsProvider,
  ConnectAccounts,
  useConnect,
} from "@packages/ui-react/lib/components"
import { Any } from "@packages/ui-react/lib/utils"

import { useState } from "react"

export const Components = () => {
  // Test Hello World
  const [count, setCount] = useState(0)

  // Odometer Value
  const [val, setVal] = useState<number>(1201903.456789)
  const updateValue = () => setVal(Number((val + 17491.390013).toFixed(4)))

  const [val2, setVal2] = useState<number>(1201903.456789)
  const updateValue2 = () => setVal2(Number((val2 + 17491.390013).toFixed(4)))

  // Connect recipe
  const [selectedAccount, setSelectedAccount] = useState(null)

  const address = "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73"
  const address2 = "13QqEYyFfeWmBVr3QvfhwpYrXoUFDgs7ViYhxv2fvLHe6mtT"
  const address3 = "Ez9kY44SEGDVceyDzRkhd5hpmkqL489sbeyCHKGr3UcfCwM"
  const address4 = "5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY"
  const invalid_address = "111111111111111111111111111111111111111111111111"

  const [isOpen, setIsOpen] = useState(false)

  const { connectedExtensions, connectedAccounts, connectedAccount } =
    useConnect()

  console.log("!!!", connectedExtensions, connectedAccounts, connectedAccount)

  const [selectedExtensions, setSelectedExtensions] =
    useState<Map<string, Any>>()

  // Account card options
  const iconProps: IconProps = {
    copy: false,
    position: "left",
    gridSize: 1,
    justify: "space-around",
    address,
  }

  // Chart colors
  const colors = [
    { value: 60, color: "red" },
    { value: 200, color: "green" },
    { value: 300, color: "blue" },
    { value: 150, color: "purple" },
  ]

  const connectConfig: ConnectConfiguration = {
    icon: {
      width: 4,
      height: 2,
    },
  }

  return (
    <div className="page">
      <h1>Components</h1>
      <p>Testing Polkadot Library Components.</p>

      <h2>Wdio Test</h2>
      <div className="row sm">
        <button
          onClick={() => setCount((prev) => prev + 1)}
          style={{ fontWeight: "bold" }}
        >
          count is {count}
        </button>
      </div>

      <h2>Odometer</h2>
      <p>
        Used to display numbers and balances. Transitions between value updates.
      </p>

      <div style={{ display: "flex" }}>
        <h1 style={{ margin: "1rem 0 0 0", display: "flex" }}>
          <Odometer value={val} />
        </h1>
      </div>
      <div style={{ display: "flex" }}>
        <button
          type="button"
          onClick={() => updateValue()}
          style={{ marginTop: "1rem" }}
        >
          Trigger Update
        </button>
      </div>

      <div style={{ display: "flex" }}>
        <h3 style={{ margin: "1rem 0 0 0", display: "flex" }}>
          <Odometer value={val2} />
        </h3>
      </div>
      <div style={{ display: "flex" }}>
        <button
          type="button"
          onClick={() => updateValue2()}
          style={{ marginTop: "1rem" }}
        >
          Trigger Update
        </button>
      </div>

      <h2>AccountCard</h2>
      <p>A "card" showing the account with the Polkicon</p>
      <div className="row">
        <div className="svg-box">
          <AccountCard
            edit
            style={{ padding: "1rem", width: "500px" }}
            icon={iconProps}
            title={{
              address,
            }}
            ellipsis={{ active: true, amount: 10, position: "center" }}
          />
        </div>
      </div>

      <h2>Connect "Recipe"</h2>
      <p>A "recipe" allowing easily integration with wallet extensions.</p>

      <div style={{ width: "100%" }}>
        <h1 style={{ margin: "5rem 0" }}>Only extensions</h1>
        <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
          <Connect
            type="extensions"
            setSelected={setSelectedAccount}
            config={connectConfig}
            onSelectExtensions={(ext) => {
              for (const [key, value] of ext) {
                console.log("Extension", key, "accounts", value.getAccounts())
              }
            }}
            getConnectedAccounts={(acc) => console.log("acc", acc)}
          />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          paddingTop: "10rem",
        }}
      >
        <h1 style={{ margin: "5rem 0" }}>
          Separate Extensions component from Accounts component
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{ width: "45%", border: "1px solid #ccc", padding: "1rem" }}
          >
            <ConnectExtensions
              setSelected={setSelectedAccount}
              config={connectConfig}
              onSelectExtensions={(ext) => {
                setSelectedExtensions(ext)
              }}
            />
          </div>
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
      </div>

      <div style={{ width: "100%", paddingTop: "10rem" }}>
        <h1 style={{ margin: "5rem 0" }}>In a modal</h1>
        <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
          <button onClick={() => setIsOpen(!isOpen)}>Open</button>
        </div>
      </div>
      {isOpen ? (
        <div
          style={{
            display: "flex",
            position: "fixed",
            background: "white",
            top: "50%",
            left: "50%",
            width: "200px",
            height: "200px",
          }}
        >
          Here is the modal
        </div>
      ) : (
        <div
          style={{
            display: "none",
          }}
        >
          Modal is Closed. Toggle to open the Modal again
        </div>
      )}
      {selectedAccount && (
        <>
          <p>Account selected is: {selectedAccount?.address} </p>
          <p>
            ... of {selectedAccount?.extension} extension ... with Account's
            name: {selectedAccount?.name}
          </p>
        </>
      )}

      <h2>Polkicon</h2>
      <p>Light-weight, customisable Polkadot Icon.</p>
      <h3>Size</h3>
      <div className="row">
        <div className="svg-box">
          {/* Generic */}
          <Polkicon copy size="10rem" address={address2} />
        </div>
        <div className="svg-box">
          {/* Polkadot */}
          <Polkicon copy size="7rem" address={address2} />
        </div>
        <div className="svg-box">
          {/* Kusama */}
          <Polkicon copy size={60} address={address3} />
        </div>
        <div className="svg-box">
          {/* Kusama */}
          <Polkicon copy size={40} address={address} />
        </div>
      </div>

      <h3>Theme</h3>
      <div className="row">
        <div className="svg-box">
          <Polkicon size="5rem" address={address4} />
        </div>
        <div className="svg-box">
          <Polkicon size="5rem" address={address4} outerColor="transparent" />
        </div>
        <div className="svg-box">
          <Polkicon size="5rem" address={address4} outerColor="#E6007A" />
        </div>
      </div>

      <h3>Copy</h3>
      <div className="row">
        <Polkicon copy size="5rem" address={address4} copyTimeout={300} />
      </div>

      <h3>States</h3>
      <div className="row">
        <div className="svg-box">
          <Polkicon
            size="5rem"
            address={address4}
            colors={["blue", "yellow", "black", "pink", "brown"]}
          />
        </div>
        <div className="svg-box">
          <Polkicon
            size="5rem"
            address={address4}
            colors={["blue", "yellow"]}
          />
        </div>
        <div className="svg-box">
          <Polkicon
            size="5rem"
            address={invalid_address}
            colors={["blue", "pink", "white", "yellow"]}
          />
        </div>
      </div>

      <h2>Charts</h2>
      <p>Light-weight charts for simple statistics.</p>

      <h3>Simple</h3>
      <div className="row">
        <div className="svg-box wide">
          <Chart
            diameter={75}
            items={[
              { value: 60, color: "var(--accent-color-primary)" },
              { value: 200, color: "var(--background-default)" },
            ]}
          />
        </div>
        <div className="svg-box wide">
          <Chart
            diameter={75}
            items={[
              { value: 200, color: "var(--accent-color-primary)" },
              { value: 0, color: "var(--background-default)" },
            ]}
          />
        </div>
        <div className="svg-box wide">
          <Chart
            diameter={75}
            items={[
              { value: 0, color: "var(--accent-color-primary)" },
              { value: 200, color: "var(--background-default)" },
            ]}
          />
        </div>
      </div>

      <h3>Empty</h3>
      <div className="row">
        <div className="svg-box">
          <Chart
            diameter={75}
            items={[
              { value: 0, color: "var(--accent-color-primary)" },
              { value: 0, color: "var(--background-default)" },
            ]}
          />
        </div>
      </div>

      <h3>Donut</h3>
      <div className="row">
        <div className="svg-box">
          <Chart
            diameter={75}
            items={[
              { value: 60, color: "var(--background-default)" },
              { value: 50, color: "var(--background-invert)" },
              { value: 150, color: "var(--accent-color-primary)" },
              { value: 200, color: "var(--accent-color-secondary)" },
              { value: 30, color: "var(--button-secondary-background)" },
            ]}
          />
        </div>
        <div className="svg-box">
          <Chart
            diameter={75}
            items={[
              { value: 60, color: "var(--background-default)" },
              { value: 50, color: "var(--background-invert)" },
              { value: 150, color: "var(--accent-color-primary)" },
              { value: 200, color: "var(--accent-color-secondary)" },
              { value: 30, color: "var(--button-secondary-background)" },
            ]}
            innerRadius={20}
          />
        </div>
        <div className="svg-box">
          <Chart
            diameter={75}
            items={[
              { value: 60, color: "var(--background-default)" },
              { value: 50, color: "var(--background-invert)" },
              { value: 150, color: "var(--accent-color-primary)" },
              { value: 200, color: "var(--accent-color-secondary)" },
              { value: 30, color: "var(--button-secondary-background)" },
            ]}
            innerRadius={30}
          />
        </div>
        <div className="svg-box">
          <Chart
            diameter={75}
            items={[
              { value: 60, color: "var(--background-default)" },
              { value: 50, color: "var(--background-invert)" },
              { value: 150, color: "var(--accent-color-primary)" },
              { value: 200, color: "var(--accent-color-secondary)" },
              { value: 30, color: "var(--button-secondary-background)" },
            ]}
            innerRadius={40}
          />
        </div>
        <div className="svg-box">
          <Chart
            diameter={75}
            items={[
              { value: 60, color: "yellow" },
              { value: 200, color: "green" },
              { value: 300, color: "blue" },
            ]}
            innerRadius={5}
          />
        </div>
      </div>

      <h3>Speed</h3>
      <div className="row">
        <div className="svg-box">
          <Chart diameter={75} items={colors} innerRadius={20} />
        </div>
        <div className="svg-box">
          <Chart diameter={75} items={colors} speed={0.1} />
        </div>
        <div className="svg-box">
          <Chart diameter={75} items={colors} innerRadius={30} speed={3} />
        </div>
        <div className="svg-box">
          <Chart diameter={75} items={colors} innerRadius={15} speed={10} />
        </div>
        <div className="svg-box">
          <Chart diameter={75} items={colors} innerRadius={40} speed={100} />
        </div>
      </div>
    </div>
  )
}
