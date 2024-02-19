/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { BrowserRouter } from "react-router-dom";
import { Providers } from "./Providers";

export const App = () => (
  <BrowserRouter basename="/">
    <Providers />
  </BrowserRouter>
);
