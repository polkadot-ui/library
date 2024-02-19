/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { valEmpty } from "../../../utils";
import { ModalWarningsProps } from "../types";
import "@polkadot-ui/core/css/base/modal/ModalWarnings/index.css";

/**
 * @name ModalWarnings
 * @summary Warnings styling.
 */
export const ModalWarnings = ({
  children,
  style,
  withMargin,
}: ModalWarningsProps) => (
  <div
    className={`modal-warnings${valEmpty(withMargin, "with-margin")}`}
    style={style}
  >
    {children}
  </div>
);
