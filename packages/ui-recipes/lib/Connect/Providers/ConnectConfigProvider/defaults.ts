// Copyright 2024 @polkadot-ui/recipes authors & contributors
// SPDX-License-Identifier: MIT

/* eslint-disable @typescript-eslint/no-unused-vars, no-unused-vars, @typescript-eslint/no-empty-function */

import type { ConnectConfigContextInterface } from "./types";

export const defaultConnectConfigContext: ConnectConfigContextInterface = {
  dappName: "",
  network: "polkadot",
  ss58: 0,
  setNetwork: (network: string): void => {},
  activeAccount: {},
  setActiveAccount: () => {},
  wallets: {
    hardwareActive: true,
    webActive: true,
    devActive: true,
    readOnlyActive: true,
    proxiesActive: true,
  },
};
