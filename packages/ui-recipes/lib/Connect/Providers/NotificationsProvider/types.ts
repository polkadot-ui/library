// Copyright 2024 @polkadot-ui/recipes authors & contributors
// SPDX-License-Identifier: MIT

export interface NotificationsContextInterface {
  addNotification: (n: NotificationItem) => void;
  removeNotification: (i: number) => void;
  notifications: NotificationInterface[];
}

export interface NotificationInterface {
  index: number;
  item: NotificationItem;
}

export interface NotificationItem extends NotificationText {
  index?: number;
}

export interface NotificationText {
  title: string;
  subtitle: string;
}
