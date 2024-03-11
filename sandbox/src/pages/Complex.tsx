/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { AccountCard } from "../../../packages/ui-react/lib/complex/AccountCard";

export const Complex = () => (
  <div className="page">
    <h1>Complex Components</h1>
    <p>Testing Polkadot Library Complex Components.</p>

    <h2>Account Card</h2>
    <div style={{ display: "flex" }}>
      <AccountCard
        style={{ padding: "1rem" }}
        icon={{
          copy: false,
          position: "right",
          gridSize: 3,
          justify: "space-around",
        }}
        title={{
          address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73",
        }}
      />
    </div>
    <div style={{ display: "flex" }}>
      <AccountCard
        style={{ padding: "1rem" }}
        icon={{
          copy: false,
          position: "right",
          gridSize: 3,
          justify: "space-around",
        }}
        title={{
          address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73",
        }}
      />
    </div>
  </div>
);
