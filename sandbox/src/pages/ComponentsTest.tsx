import {
  Extensions,
  Accounts,
} from "@packages/ui-react/lib/components/ConnectRx"

export const ComponentsTest = () => (
  <div className="page">
    <h1>Components</h1>
    <p>Testing Polkadot Library Components.</p>

    <Extensions>
      <Accounts>Something</Accounts>
    </Extensions>
  </div>
)
