/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { RefObject, forwardRef } from "react";
import { ModalPaddingProps } from "../types";
import { valEmpty } from "../../../utils";
import "@polkadot-ui/core/css/base/modal/ModalPadding/index.css";

/**
 * @name ModalPadding
 * @summary Generic wrapper for modal padding.
 */
export const ModalPadding = forwardRef(
  (
    { children, style, verticalOnly, horizontalOnly }: ModalPaddingProps,
    ref?: RefObject<HTMLDivElement>
  ) => (
    <div
      ref={ref}
      className={`modal-padding${valEmpty(
        verticalOnly,
        "vertical-only"
      )}${valEmpty(horizontalOnly, "horizontal-only")}`}
      style={style}
    >
      {children}
    </div>
  )
);
ModalPadding.displayName = "ModalPadding";
