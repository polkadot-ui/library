/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { EntryProps } from "../../types";
import "@polkadot-ui/core/css/base/structure/Entry/index.css";

/**
 * @name Entry
 * @summary The outer-most wrapper that hosts core tag styling.
 */
export const Entry = ({ children, style, mode, theme }: EntryProps) => (
  <div className={`core-entry theme-${mode} theme-${theme}`} style={style}>
    {children}
  </div>
);
