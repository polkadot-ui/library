/* @license Copyright 2024 @polkadot-ui/library authors & contributors",
"SPDX-License-Identifier: MIT */
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function,  no-unused-vars */

import { LedgerAccountsContextInterface } from "./types";

export const defaultLedgerAccountsContext: LedgerAccountsContextInterface = {
  ledgerAccountExists: (address) => false,
  addLedgerAccount: (address, index, callback) => null,
  removeLedgerAccount: (address, callback) => {},
  renameLedgerAccount: (address, newName) => {},
  getLedgerAccount: (address) => null,
  ledgerAccounts: [],
};
