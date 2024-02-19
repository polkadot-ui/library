/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { valEmpty } from "../../../utils";
import { RowProps } from "../../types";
import "@polkadot-ui/core/css/base/structure/PageRow/index.css";

/**
 * @name PageRow
 * @summary Used to separate page content based on rows. Commonly used with RowPrimary and
 * RowSecondary.
 */
export const PageRow = ({ children, style, yMargin }: RowProps) => (
  <div
    className={`core-page-row${valEmpty(yMargin, "y-margin")}`}
    style={style}
  >
    {children}
  </div>
);
