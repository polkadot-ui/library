/* @license Copyright 2024 @polkadot-ui/library authors & contributors",
"SPDX-License-Identifier: MIT */

export type Mode = "light" | "dark";

export interface ThemeContextInterface {
  toggleMode: (mode: Mode) => void;
  setTheme: (theme: string) => void;
  mode: Mode;
  theme: string;
}
