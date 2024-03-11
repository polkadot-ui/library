// Copyright 2024 @polkadot-ui/recipes authors & contributors
// SPDX-License-Identifier: MIT

import type { ExtensionAccount } from "@polkadot-ui/react/connect/ExtensionsProvider/types";
import type { MaybeAddress } from "@polkadot-ui/react/utils/types";
import type { ImportedAccount } from "@polkadot-ui/react/connect/types";

export interface ImportedAccountsContextInterface {
  accounts: ImportedAccount[];
  getAccount: (address: MaybeAddress) => ExtensionAccount | null;
  isReadOnlyAccount: (address: MaybeAddress) => boolean;
  accountHasSigner: (address: MaybeAddress) => boolean;
  requiresManualSign: (address: MaybeAddress) => boolean;
}
