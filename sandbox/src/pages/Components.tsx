/* @license Copyright 2024 @polkadot-cloud/library authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Odometer } from "../../../packages/cloud-react/lib/complex/Odometer";
import { Polkicon } from "../../../packages/cloud-react/lib/icons/Polkicon";
import BigNumber from "bignumber.js";
import { useState } from "react";

export const Components = () => {
  // Test Hello World
  const [count, setCount] = useState(0);

  // Odometer Value
  const [val, setVal] = useState<number>(1201903.456789);
  const updateValue = () => setVal(Number((val + 17491.390013).toFixed(4)));

  const [val2, setVal2] = useState<number>(1201903.456789);
  const updateValue2 = () => setVal2(Number((val2 + 17491.390013).toFixed(4)));

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
          <Odometer value={new BigNumber(val).toFormat()} />
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
          <Odometer value={new BigNumber(val2).toFormat()} />
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

      <h2>Polkicon</h2>
      <p>Light-weight, customisable Polkadot Icon.</p>
      <h3>Size</h3>
      <div className="row">
        <div className="svg-box">
          <Polkicon
            size="10rem"
            address="13Bbi16jczqELAGBH7MaBu31ABreDmw9yFhrEiNEx6wMkNWe"
          />
        </div>
        <div className="svg-box">
          <Polkicon
            size="7rem"
            address="EkvDzBYPaageH576B7cwhZrTA9EL9CCM8p7U5eqsp8LJysn"
          />
        </div>
        <div className="svg-box">
          <Polkicon
            size={60}
            address="234CHvWmTuaVtkJpLS9oxuhFd3HamcEMrfFAPYoFaetEZmY7"
          />
        </div>
      </div>

      <h3>Theme</h3>
      <div className="row">
        <div className="svg-box">
          <Polkicon
            size="5rem"
            address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY"
          />
        </div>
        <div className="svg-box">
          <Polkicon
            size="5rem"
            address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY"
            outerColor="transparent"
          />
        </div>
        <div className="svg-box">
          <Polkicon
            size="5rem"
            address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY"
            outerColor="#E6007A"
          />
        </div>
      </div>

      <h3>Copy</h3>
      <div className="row">
        <Polkicon
          copy
          size="5rem"
          address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY"
          copyTimeout={300}
        />
      </div>

      <h3>Colors</h3>
      <div className="row">
        <div className="svg-box">
          <Polkicon
            size="5rem"
            address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY"
            colors={["blue", "yellow", "black", "pink", "brown"]}
          />
        </div>
        <div className="svg-box">
          <Polkicon
            size="5rem"
            address="5EFJZfqfmDZktdFfKUJa3kCrJZrzXUP1tkyN5RNtQ1uqZwtY"
            colors={["blue", "yellow"]}
          />
        </div>
        <div className="svg-box">
          <Polkicon
            size="5rem"
            address="111111111111111111111111111111111111111111111111"
            colors={["blue", "pink", "white", "yellow"]}
          />
        </div>
      </div>
    </div>
  );
};
