/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { ComponentBase } from "../../../utils/types";
import "@polkadot-ui/core/css/base/structure/Body/index.css";

/**
 * @name Body
 * @summary An element that houses Side and Main.
 */
export const Body = ({ children, style }: ComponentBase) => (
  <div className="core-body" style={style}>
    {children}
  </div>
);
