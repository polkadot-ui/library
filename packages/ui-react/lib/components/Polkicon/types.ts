/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

export interface PolkiconProps {
  size?: number | string;
  address: string;
  copy?: boolean;
  colors?: string[];
  outerColor?: string;
  copyTimeout?: number;
  copyMsg?: string | JSX.Element;
  style?: object;
  className?: string;
}

export interface Scheme {
  freq: number;
  colors: number[];
}

export type ChainName = "polkadot" | "kusama" | "westend" | "generic";

export interface Circle {
  cx: number;
  cy: number;
  fill: string;
  r: number;
}
