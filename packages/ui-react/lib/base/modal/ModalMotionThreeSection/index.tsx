/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { motion } from "framer-motion";
import { ModalAnimationProps } from "../types";
import "@polkadot-ui/core/css/base/modal/ModalMotionThreeSection/index.css";

/**
 * @name ModalMotionThreeSection
 * @summary Three section wrapper with motion animation.
 */
export const ModalMotionThreeSection = ({
  children,
  ...rest
}: ModalAnimationProps) => (
  <motion.div className="modal-motion-three-sections" {...rest}>
    {children}
  </motion.div>
);
