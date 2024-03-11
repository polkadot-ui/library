/* @license Copyright 2024 @polkadot-ui/recipes authors & contributors
SPDX-License-Identifier: MIT */

import { Button, Polkicon } from "@polkadot-ui/react";
import { usePrompt } from "../../Providers/PromptProvider";
import { useOtherAccounts } from "../../Providers/OtherAccountsProvider";
import type { RemoveProps } from "./types";

import "./index.scss";

export const Remove = ({ address, getHandler, removeHandler }: RemoveProps) => {
  const { setStatus } = usePrompt();
  const { forgetOtherAccounts } = useOtherAccounts();

  return (
    <div className="confirm-wrapper">
      <Polkicon address={address} size="3rem" />
      <h3>Remove Account</h3>
      <h5>{address}</h5>
      <div className="footer">
        <Button type="monoInvert" text="Cancel" onClick={() => setStatus(0)} />
        <Button
          type="mono"
          text="Remove Account"
          onClick={() => {
            const account = getHandler(address);
            if (account) {
              removeHandler(address);
              forgetOtherAccounts([account]);
              setStatus(0);
            }
          }}
        />
      </div>
    </div>
  );
};
