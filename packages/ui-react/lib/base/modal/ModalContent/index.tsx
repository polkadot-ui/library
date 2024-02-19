/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { motion } from "framer-motion";
import "@polkadot-ui/core/css/base/modal/ModalContent/index.css";
import { valEmpty } from "../../../utils";
import { ModalContentProps } from "../types";

/**
 * @name ModalContent
 * @summary Modal content wrapper for `ModalContainer` and `CanvasContainer`.
 */
export const ModalContent = ({
  children,
  canvas,
  ...rest
}: ModalContentProps) => (
  <motion.div
    className={`modal-content${valEmpty(canvas, "canvas")}`}
    {...rest}
  >
    {children}
  </motion.div>
);
