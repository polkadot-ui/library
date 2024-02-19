/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { motion } from "framer-motion";
import "@polkadot-ui/core/css/base/structure/Card/index.css";
import { CardProps } from "../../types";
import { valEmpty } from "../../../utils";

export const Card = ({ children, style, animations, className }: CardProps) => (
  <motion.div
    {...animations}
    style={style}
    className={"core-card" + valEmpty(className, className)}
  >
    {children}
  </motion.div>
);
