// Copyright 2024 @polkadot-ui/recipes authors & contributors
// SPDX-License-Identifier: MIT

import type { MaybeAddress } from "@polkadot-ui/react/utils/types";

export interface ActiveAccountsContextInterface {
  activeAccount: MaybeAddress;
  activeProxy: MaybeAddress;
  activeProxyType: string | null;
  getActiveAccount: () => string | null;
  setActiveAccount: (
    address: MaybeAddress,
    updateLocalStorage?: boolean,
  ) => void;
  setActiveProxy: (address: ActiveProxy, updateLocalStorage?: boolean) => void;
}

export type ActiveProxy = {
  address: MaybeAddress;
  proxyType: string;
} | null;
