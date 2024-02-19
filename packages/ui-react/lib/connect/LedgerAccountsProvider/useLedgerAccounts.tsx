/* @license Copyright 2024 @polkadot-ui/library authors & contributors",
"SPDX-License-Identifier: MIT */

import { useContext } from "react";
import { LedgerAccountsContext } from ".";

export const useLedgerAccounts = () => useContext(LedgerAccountsContext);
