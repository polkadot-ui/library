/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { ComponentBase } from "../../../utils/types";
import "@polkadot-ui/core/css/base/structure/Page/index.css";

/**
 * @name Page
 * @summary
 * A motion.div that wraps every page. Transitions can be applied to this wrapper that will affect
 * the entire page.
 */
export const Page = ({ children, style }: ComponentBase) => (
  <div className="core-page" style={style}>
    {children}
  </div>
);
