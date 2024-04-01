import { ComponentBaseWithClassName, HPositionLR } from "../../utils";
import { GridSizes, GridJustify, GridItemsAlignment } from "../common_types";
import { PolkiconProps } from "../Polkicon/types";

export type FontType =
  | "xx-small"
  | "x-small"
  | "small"
  | "medium"
  | "large"
  | "larger"
  | "x-large"
  | "xx-large";

export type AccountCardProps = {
  title: TitleProps;
  edit?: boolean;
  fontSize?: FontType | string;
  ellipsis?: EllipsisProps;
  icon?: IconProps;
  extraComponent?: ExtraComponentProps;
  noCard?: boolean;
};

export type ExtraComponentProps = CommonParams &
  ComponentBaseWithClassName & {
    component?: JSX.Element;
    position?: HPositionLR;
  };

export type EllipsisProps = {
  active?: boolean;
  amount?: number;
  position?: string;
};

type CommonParams = {
  gridSize?: GridSizes;
  justify?: GridJustify;
};

export type TitleProps = ComponentBaseWithClassName & {
  address: string;
  align?: GridItemsAlignment;
  justify?: GridJustify;
  component?: JSX.Element;
  name?: string;
};

export type IconProps = PolkiconProps &
  CommonParams & {
    position?: HPositionLR;
  };
