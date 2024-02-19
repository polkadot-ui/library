/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { valEmpty } from "../../../utils";
import { ModalSectionProps } from "../types";
import "@polkadot-ui/core/css/base/modal/ModalSection/index.css";

/**
 * @name  ModalSection
 * @summary Section wrapper.
 */
export const ModalSection = ({ children, style, type }: ModalSectionProps) => (
  <div
    className={`${valEmpty(type === "carousel", "modal-carousel")}${valEmpty(
      type === "tab",
      "modal-tabs"
    )}`}
    style={style}
  >
    {children}
  </div>
);
