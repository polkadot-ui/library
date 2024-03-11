// Copyright 2024 @polkadot-ui/recipes authors & contributors
// SPDX-License-Identifier: MIT
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function, no-unused-vars */

import type { NotificationsContextInterface } from "./types";

export const defaultNotificationsContext: NotificationsContextInterface = {
  addNotification: (n) => {},
  removeNotification: (n) => {},
  notifications: [],
};
