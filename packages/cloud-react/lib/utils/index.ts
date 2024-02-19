/* @license Copyright 2024 @polkadot-cloud/library authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

/* Returns ` t` if truthy, or an empty string otherwise. */
export const valEmpty = (t: boolean | string | undefined, v: string) =>
  t ? ` ${v}` : "";
