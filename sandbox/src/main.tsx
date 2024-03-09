/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import * as ReactDOM from "react-dom/client";
import { App } from "./App";

import "../../packages/ui-core/dist/accent/ui.css";

import "../../packages/ui-core/dist/theme/ui/index.css";
import "../../packages/ui-core/dist/theme/default/index.css";
import "../../packages/ui-core/dist/css/styles/index.css";

import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
