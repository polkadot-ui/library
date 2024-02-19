/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import * as ReactDOM from "react-dom/client";
import { App } from "./App";

import "../../packages/ui-core/dist/theme/default/index.css";

import "./theme/fonts.css";
import "./theme/theme.css";
import "./styles/index.scss";
import "./styles/app.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
