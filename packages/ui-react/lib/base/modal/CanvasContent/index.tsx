/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { ComponentBaseWithClassName } from "../../../utils/types";
import "@polkadot-ui/core/css/base/modal/ModalContent/index.css";

/**
 * @name CanvasContent
 * @summary Modal canvas content wrapper.
 */
export const CanvasContent = ({
  children,
  style,
  className,
}: ComponentBaseWithClassName) => (
  <div
    className={`modal-canvas-content${className ? ` ${className}` : ""}`}
    style={style}
  >
    {children}
  </div>
);
