// Copyright 2024 @polkadot-ui/recipes authors & contributors
// SPDX-License-Identifier: MIT
/* eslint-disable @typescript-eslint/no-unused-vars, no-unused-vars */

import type { ProxiesContextInterface } from "./type";

export const defaultProxiesContext: ProxiesContextInterface = {
  getDelegates: (a) => undefined,
  getProxyDelegate: (x, y) => null,
  getProxiedAccounts: (a) => [],
  handleDeclareDelegate: (a) => new Promise((resolve) => resolve([])),
  proxies: [],
  delegates: {},
};
