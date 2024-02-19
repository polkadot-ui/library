/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { ComponentBase } from "../../../utils/types";
import "@polkadot-ui/core/css/base/modal/ModalCustomHeader/index.css";

/**
 * @name ModalCustomHeader
 * @summary The header section along with the title.
 */
export const ModalCustomHeader = ({ children, style }: ComponentBase) => (
  <div className="modal-custom-header" style={style}>
    {children}
  </div>
);
