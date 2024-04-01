import { ComponentBaseWithClassName } from "../../utils";
export type PolkiconProps = ComponentBaseWithClassName & {
  size?: number | string;
  address: string;
  copy?: boolean;
  colors?: string[];
  outerColor?: string;
  copyTimeout?: number;
  copyMsg?: string | JSX.Element;
  style?: object;
};

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
