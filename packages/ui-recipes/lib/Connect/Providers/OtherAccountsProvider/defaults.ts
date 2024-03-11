// Copyright 2024 @polkadot-ui/recipes authors & contributors
// SPDX-License-Identifier: MIT

/* eslint-disable @typescript-eslint/no-unused-vars, no-unused-vars, @typescript-eslint/no-empty-function */

import type { OtherAccountsContextInterface } from "./types";

export const defaultOtherAccountsContext: OtherAccountsContextInterface = {
  addExternalAccount: (a, b) => {},
  addOtherAccounts: (a) => {},
  renameOtherAccount: (a, n) => {},
  importLocalOtherAccounts: (n) => {},
  forgetOtherAccounts: (a) => {},
  forgetExternalAccounts: (a) => {},
  otherAccounts: [],
  accountsInitialised: false,
};
