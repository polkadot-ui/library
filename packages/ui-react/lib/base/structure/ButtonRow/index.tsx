/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { valEmpty } from "../../../utils";
import { RowProps } from "../../types";
import "@polkadot-ui/core/css/base/structure/ButtonRow/index.css";

/**
 * @name ButtonRow
 * @summary A flex container for a row of buttons.
 */
export const ButtonRow = ({ children, style, yMargin }: RowProps) => (
  <div
    className={`core-button-row${valEmpty(yMargin, "y-margin")}`}
    style={style}
  >
    {children}
  </div>
);
