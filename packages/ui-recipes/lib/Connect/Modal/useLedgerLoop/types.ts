// Copyright 2024 @polkadot-ui/recipes authors & contributors
// SPDX-License-Identifier: MIT

import type { LedgerTask } from "../../Providers/HardwareProviders/types";
import type { AnyJson } from "@polkadot-ui/react/utils/types";

export interface LederLoopProps {
  tasks: LedgerTask[];
  options: {
    uid?: number;
    accountIndex?: () => number;
    payload?: () => Promise<AnyJson>;
  };
  network?: string;
  mounted: () => boolean;
}
