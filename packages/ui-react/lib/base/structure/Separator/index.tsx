/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { ComponentBase } from "../../../utils/types";
import "@polkadot-ui/core/css/base/structure/Separator/index.css";

/**
 * @name Separator
 * @summary A horizontal spacer with a bottom border. General spacer for separating content by
 * row.
 */
export const Separator = ({ children, style }: ComponentBase) => (
  <div className="core-separator" style={style}>
    {children}
  </div>
);
