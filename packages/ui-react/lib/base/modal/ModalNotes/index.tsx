/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { valEmpty } from "../../../utils";
import { ModalNotesProps } from "../types";
import "@polkadot-ui/core/css/base/modal/ModalNotes/index.css";

/**
 * @name ModalNotes
 * @summary Note styling.
 */
export const ModalNotes = ({
  children,
  style,
  withPadding,
}: ModalNotesProps) => (
  <div
    className={`modal-notes${valEmpty(withPadding, "with-padding")}`}
    style={style}
  >
    {children}
  </div>
);
