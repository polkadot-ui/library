/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { ModalAnimationProps } from "../types";
import { motion } from "framer-motion";
import "@polkadot-ui/core/css/base/modal/ModalContainer/index.css";

/**
 * @name ModalContainer
 * @summary Modal container wrapper.
 */
export const ModalContainer = ({ children, ...rest }: ModalAnimationProps) => (
  <motion.div className="modal-container" {...rest}>
    {children}
  </motion.div>
);
