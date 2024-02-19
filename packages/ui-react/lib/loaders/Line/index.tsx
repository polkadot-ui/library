/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { LoaderProps } from "../../base/types";
import "@polkadot-ui/core/css/loaders/Line/index.css";

export const Line = ({ text }: LoaderProps) => (
  <div className="line-loading">
    {text && <p>{text}</p>}
    <span></span>
  </div>
);
