// Copyright 2024 @polkadot-ui/recipes authors & contributors
// SPDX-License-Identifier: MIT

import type { MaybeAddress } from "@polkadot-ui/react/utils/types";

export interface BondedAccount {
  address?: string;
  bonded?: string;
  nominations?: Nominations;
}

export interface Nominations {
  targets: Targets;
  submittedIn: string | number;
}

export type Targets = string[];

export interface BondedContextInterface {
  getAccount: (address: MaybeAddress) => BondedAccount | null;
  getBondedAccount: (address: MaybeAddress) => string | null;
  getAccountNominations: (address: MaybeAddress) => Targets;
  isController: (address: MaybeAddress) => boolean;
  bondedAccounts: BondedAccount[];
}
