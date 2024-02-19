/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { motion } from "framer-motion";
import "@polkadot-ui/core/css/base/modal/CanvasScroll/index.css";
import { CanvasScrollProps } from "../types";
import { valEmpty } from "../../../utils";

/**
 * @name CanvasScroll
 * @summary Canvas scrollable container.
 */
export const CanvasScroll = ({
  children,
  size,
  scroll = true,
  ...rest
}: CanvasScrollProps) => (
  <motion.div
    className={`canvas-scroll${valEmpty(size === "xl", "xl")}${valEmpty(
      scroll,
      "scroll"
    )}`}
    {...rest}
  >
    {children}
  </motion.div>
);
