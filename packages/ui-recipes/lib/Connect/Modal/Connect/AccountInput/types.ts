// Copyright 2024 @polkadot-ui/recipes authors & contributors
// SPDX-License-Identifier: MIT

import type { AnyApi, MaybeAddress } from "@polkadot-ui/react/utils/types";

export interface AccountInputProps {
  successCallback: (a: string) => Promise<AnyApi>;
  resetCallback?: () => void;
  defaultLabel: string;
  resetOnSuccess?: boolean;
  successLabel?: string;
  locked?: boolean;
  inactive?: boolean;
  disallowAlreadyImported?: boolean;
  initialValue?: MaybeAddress;
  border?: boolean;
}
