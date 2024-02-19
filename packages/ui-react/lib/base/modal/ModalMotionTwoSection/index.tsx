/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { ModalAnimationProps } from "../types";
import { motion } from "framer-motion";
import "@polkadot-ui/core/css/base/modal/ModalMotionTwoSection/index.css";

/**
 * @name ModalMotionTwoSection
 * @summary Two section wrapper with motion animation.
 */
export const ModalMotionTwoSection = ({
  children,
  ...rest
}: ModalAnimationProps) => (
  <motion.div className="modal-motion-two-sections" {...rest}>
    {children}
  </motion.div>
);
