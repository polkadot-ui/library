/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { RefObject, forwardRef } from "react";
import "@polkadot-ui/core/css/base/modal/ModalCard/index.css";
import { ModalCardProps } from "../types";

/**
 * @name ModalCard
 * @summary Modal card wrapper.
 */
export const ModalCard = forwardRef(
  (
    { children, style, className }: ModalCardProps,
    ref?: RefObject<HTMLDivElement>
  ) => (
    <div
      ref={ref}
      className={`modal-card${className ? ` ${className}` : ""}`}
      style={style}
    >
      {children}
    </div>
  )
);
ModalCard.displayName = "ModalCard";
