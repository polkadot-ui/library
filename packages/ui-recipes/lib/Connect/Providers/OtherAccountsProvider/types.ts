// Copyright 2024 @polkadot-ui/recipes authors & contributors
// SPDX-License-Identifier: MIT

import type {
  ExternalAccountAddedBy,
  ImportedAccount,
} from "@polkadot-ui/react/connect/types";
import type { MaybeAddress } from "@polkadot-ui/react/utils/types";
import type { NetworkName } from "../../Utils";

export interface OtherAccountsContextInterface {
  addExternalAccount: (a: string, addedBy: ExternalAccountAddedBy) => void;
  addOtherAccounts: (a: ImportedAccount[]) => void;
  renameOtherAccount: (a: MaybeAddress, n: string) => void;
  importLocalOtherAccounts: (g: (n: NetworkName) => ImportedAccount[]) => void;
  forgetOtherAccounts: (a: ImportedAccount[]) => void;
  forgetExternalAccounts: (a: ImportedAccount[]) => void;
  accountsInitialised: boolean;
  otherAccounts: ImportedAccount[];
}
