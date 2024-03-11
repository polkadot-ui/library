// Copyright 2024 @polkadot-ui/recipes authors & contributors
// SPDX-License-Identifier: MIT
/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */

import type { BondedContextInterface, Nominations } from "./types";

export const nominations: Nominations = {
  targets: [],
  submittedIn: 0,
};

export const defaultBondedContext: BondedContextInterface = {
  getAccount: (address) => null,
  getBondedAccount: (address) => null,
  getAccountNominations: (address) => [],
  isController: (address) => false,
  bondedAccounts: [],
};
