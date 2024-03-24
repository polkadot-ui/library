import {
  Odometer,
  Polkicon,
  Chart,
  AccountCard,
  IconProps,
} from "@packages/ui-react/lib/components";

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

  // Account card options
  const iconProps: IconProps = {
    copy: false,
    position: "right",
    gridSize: 3,
    justify: "space-around",
  };

  // Chart colors
  const colors = [
    { value: 60, color: "red" },
    { value: 200, color: "green" },
    { value: 300, color: "blue" },
    { value: 150, color: "purple" },
  ];

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

      <h2>AccountCard</h2>
      <p>A "card" showing the account with the Polkicon</p>
      <div className="row">
        <div className="svg-box">
          <AccountCard
            style={{ padding: "1rem", width: "500px" }}
            icon={iconProps}
            title={{
              address: "1f1yYj2bCFhJCTVdeWLDueUsrZynLAaj6jeMy18fjZ7Cr73",
            }}
            ellipsis={{ active: true, amount: 10, position: "center" }}
          />
        </div>
      </div>

      <h2>Polkicon</h2>
      <p>Light-weight, customisable Polkadot Icon.</p>
      <h3>Size</h3>
      <div className="row">
        <div className="svg-box">
          {/* Generic */}
          <Polkicon
            copy
            size="10rem"
            address="13QqEYyFfeWmBVr3QvfhwpYrXoUFDgs7ViYhxv2fvLHe6mtT"
          />
        </div>
        <div className="svg-box">
          {/* Polkadot */}
          <Polkicon
            copy
            size="7rem"
            address="13QqEYyFfeWmBVr3QvfhwpYrXoUFDgs7ViYhxv2fvLHe6mtT"
          />
        </div>
        <div className="svg-box">
          {/* Kusama */}
          <Polkicon
            copy
            size={60}
            address="Ez9kY44SEGDVceyDzRkhd5hpmkqL489sbeyCHKGr3UcfCwM"
          />
        </div>
        <div className="svg-box">
          {/* Kusama */}
          <Polkicon
            copy
            size={40}
            address="Ez9kY44SEGDVceyDzRkhd5hpmkqL489sbeyCHKGr3UcfCwM"
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
  );
};
