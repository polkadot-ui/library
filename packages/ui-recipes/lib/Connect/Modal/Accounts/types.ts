// Copyright 2024 @polkadot-ui/recipes authors & contributors
// SPDX-License-Identifier: MIT

import type { Proxy } from "../../Providers/ProxiesProvider/type";
import type { MaybeAddress } from "@polkadot-ui/react/utils/types";

import type BigNumber from "bignumber.js";

export type ClaimPermission =
  | "Permissioned"
  | "PermissionlessCompound"
  | "PermissionlessWithdraw"
  | "PermissionlessAll";

export interface AccountItemProps {
  address?: MaybeAddress;
  label?: string[];
  asElement?: boolean;
  delegator?: string;
  noBorder?: boolean;
  proxyType?: string;
}

export interface DelegatesProps {
  delegator: string;
  delegates: Proxy | undefined;
}

export interface PoolMembership {
  address: string;
  poolId: number;
  points: string;
  balance: BigNumber;
  lastRecordedRewardCounter: string;
  unbondingEras: Record<number, string>;
  claimPermission: ClaimPermission;
  unlocking: {
    era: number;
    value: BigNumber;
  }[];
}

export interface AccountInPool extends PoolMembership {
  delegates?: Proxy;
}

export interface AccountNominating {
  address: MaybeAddress;
  stashImported: boolean;
  delegates?: Proxy;
}

export interface AccountNotStaking {
  address: string;
  delegates?: Proxy;
}

export type AccountNominatingAndInPool = AccountNominating & AccountInPool;
