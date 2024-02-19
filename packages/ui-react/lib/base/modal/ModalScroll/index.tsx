/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { RefObject, forwardRef } from "react";
import { valEmpty } from "../../../utils";
import { ModalScrollProps } from "../types";
import "@polkadot-ui/core/css/base/modal/ModalScroll/index.css";

/**
 * @name ModalScroll
 * @summary Used for modal window height.
 */
export const ModalScroll = forwardRef(
  (
    { size, children, style }: ModalScrollProps,
    ref?: RefObject<HTMLDivElement>
  ) => (
    <div
      ref={ref}
      className={`modal-scroll${valEmpty(size === "xl", "xl")}${valEmpty(
        size === "lg",
        "lg"
      )}`}
      style={style}
    >
      {children}
    </div>
  )
);
ModalScroll.displayName = "ModalScroll";
