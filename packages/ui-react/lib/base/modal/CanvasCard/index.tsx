/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { ComponentBaseWithClassName } from "../../../utils/types";
import "@polkadot-ui/core/css/base/modal/CanvasCard/index.css";

/**
 * @name CanvasCard
 * @summary Modal canvas card wrapper.
 */
export const CanvasCard = ({
  children,
  style,
  className,
}: ComponentBaseWithClassName) => (
  <div
    className={`modal-canvas-card${className ? ` ${className}` : ""}`}
    style={style}
  >
    {children}
  </div>
);
