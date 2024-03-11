// Copyright 2024 @polkadot-ui/recipes authors & contributors
// SPDX-License-Identifier: MIT

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function, no-unused-vars */

import type { ActiveAccountsContextInterface } from "./types";

export const defaultActiveAccountsContext: ActiveAccountsContextInterface = {
  activeAccount: null,
  activeProxy: null,
  activeProxyType: null,
  getActiveAccount: () => null,
  setActiveAccount: (address, updateLocal) => {},
  setActiveProxy: (address, updateLocal) => {},
};
