/* @license Copyright 2024 @polkadot-ui/library authors & contributors",
"SPDX-License-Identifier: MIT */
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function,  no-unused-vars */

import type { ExtensionsContextInterface } from "./types";

export const defaultExtensionsContext: ExtensionsContextInterface = {
  checkingInjectedWeb3: false,
  extensionsStatus: {},
  setExtensionStatus: (id, status) => {},
  removeExtensionStatus: (id) => {},
  extensionInstalled: (id) => false,
  extensionCanConnect: (id) => false,
  extensionHasFeature: (id, feature) => false,
};
