/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { ComponentBase } from "../../../utils/types";
import "@polkadot-ui/core/css/base/structure/PageHeading/index.css";

/**
 * @name PageHeading
 * @summary Positioned under titles for a Go Back button and other page header info.
 */
export const PageHeading = ({ children, style }: ComponentBase) => (
  <div className="core-page-heading" style={style}>
    {children}
  </div>
);
