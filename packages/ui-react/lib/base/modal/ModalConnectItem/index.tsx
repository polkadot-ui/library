/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { valEmpty } from "../../../utils";
import { ModalConnectItemProps } from "../types";
import "@polkadot-ui/core/css/base/modal/ModalConnectItem/index.css";

/**
 * @name  ModalConnectItem
 * @summary Wrapper for a modal connect item.
 */
export const ModalConnectItem = ({
  children,
  style,
  canConnect,
}: ModalConnectItemProps) => (
  <div
    className={`modal-connect-item${valEmpty(canConnect, "can-connect")}`}
    style={style}
  >
    {children}
  </div>
);
