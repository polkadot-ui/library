/* @license Copyright 2024 @polkadot-ui/library authors & contributors",
"SPDX-License-Identifier: MIT */

import { ReactNode } from "react";
import { ExtensionAccount } from "../ExtensionsProvider/types";
import { ImportedAccount } from "../types";
import { MaybeAddress, Sync } from "../../utils/types";

export interface ExtensionAccountsContextInterface {
  connectExtensionAccounts: (id?: string) => Promise<boolean>;
  extensionAccountsSynced: Sync;
  extensionAccounts: ImportedAccount[];
}

export interface ExtensionAccountsProviderProps {
  children: ReactNode;
  network: string;
  ss58: number;
  dappName: string;
  activeAccount?: MaybeAddress;
  setActiveAccount?: (address: MaybeAddress) => void;
  onExtensionEnabled?: (id: string) => void;
}

export interface HandleImportExtension {
  newAccounts: ExtensionAccount[];
  meta: {
    accountsToRemove: ExtensionAccount[];
    removedActiveAccount: MaybeAddress;
  };
}

export type NetworkSS58 = {
  network: string;
  ss58: number;
};
