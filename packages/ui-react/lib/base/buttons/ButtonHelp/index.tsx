/* @license Copyright 2024 @polkadot-ui/library authors & contributors
SPDX-License-Identifier: MIT */

import { InfoSVG } from "../../../svg/Info";
import { ComponentBaseWithClassName } from "../../../utils/types"
import { valEmpty, onMouseHandlers } from "../../../utils";
import { ButtonCommonProps } from "../types";
import "@polkadot-ui/core/css/base/buttons/index.css";

export type ButtonHelpProps = ComponentBaseWithClassName &
  ButtonCommonProps & {
    // background style.
    background?: "primary" | "secondary" | "none";
    // optional border
    outline?: boolean;
  };

/**
 * @name ButtonHelp
 * @description Help button used throughout dashboard apps.
 */
export const ButtonHelp = ({
  disabled,
  marginLeft,
  marginRight,
  marginX,
  className,
  style,
  onClick,
  onMouseOver,
  onMouseMove,
  onMouseOut,
  outline = false,
  background = "primary",
}: ButtonHelpProps) => (
  <button
    className={`btn-help${valEmpty(
      background === "secondary",
      "background-secondary"
    )}${valEmpty(background === "none", "background-none")}${valEmpty(
      outline,
      "outline"
    )}${valEmpty(marginRight, "m-right")}${valEmpty(
      marginLeft,
      "m-left"
    )}${valEmpty(marginX, "m-x")}${className ? ` ${className}` : ""}`}
    style={style}
    type="button"
    disabled={disabled}
    {...onMouseHandlers({ onClick, onMouseOver, onMouseMove, onMouseOut })}
  >
    <InfoSVG />
  </button>
);